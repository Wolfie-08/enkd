#!/usr/bin/env python3
"""Deterministic 100 BPM music bed for the Enkd Studio promo (stdlib only).

Original synthesis, no samples -> license-clean. Chord changes land on the
scene cuts (every 3.0 s = 5 beats); resolves on D add9 under the end card.
Writes assets/audio/bed.wav (44.1 kHz, 16-bit stereo).
"""
import math, struct, wave, os

SR = 44100
DUR = 18.8
BEAT = 0.6
N = int(SR * DUR)
TAU = 2 * math.pi

def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)

# (start, end, pad notes, bass note) — MIDI
CHORDS = [
    (0.0, 3.0, [55, 59, 62, 66], 43),        # Gmaj7
    (3.0, 6.0, [57, 61, 64, 66], 45),        # A6
    (6.0, 9.0, [54, 57, 61, 64], 42),        # F#m7
    (9.0, 12.0, [59, 62, 66, 73], 47),       # Bm9
    (12.0, 13.5, [55, 59, 62, 66, 69], 43),  # Gmaj9
    (13.5, 15.0, [57, 61, 64, 69], 45),      # A (lift)
    (15.0, DUR, [62, 66, 69, 76], 38),       # D add9 (end card)
]

L = [0.0] * N
R = [0.0] * N

def add(i, l, r):
    if 0 <= i < N:
        L[i] += l
        R[i] += r

# --- pad: soft additive tone, per-chord envelope with overlap ---
for (s, e, notes, _) in CHORDS:
    a, rel = 0.35, 0.45
    i0, i1 = int(s * SR), min(N, int((e + rel) * SR))
    for n in notes:
        f = hz(n)
        for det, pan in ((-0.0023, 0.25), (0.0023, -0.25)):
            ff = f * (1 + det)
            for i in range(i0, i1):
                t = i / SR - s
                env = min(1.0, t / a)
                if i / SR > e:
                    env *= max(0.0, 1 - (i / SR - e) / rel)
                ph = TAU * ff * t
                v = (math.sin(ph) + 0.35 * math.sin(2 * ph) + 0.12 * math.sin(3 * ph)) * env * 0.022
                add(i, v * (1 - pan), v * (1 + pan))

# --- sidechain-style pump (applied to pad + bass after drums enter) ---
def pump(tsec):
    if tsec < 3.0 or 14.4 <= tsec < 15.0 or tsec >= 15.6:
        return 1.0
    ph = (tsec % BEAT)
    return 1 - 0.45 * math.exp(-ph / 0.09)

for i in range(N):
    p = pump(i / SR)
    L[i] *= p
    R[i] *= p

# --- sub bass: one note per beat, gentle ---
for (s, e, _, b) in CHORDS:
    f = hz(b)
    k = 0
    while s + k * BEAT < min(e, 17.4):
        bs = s + k * BEAT
        ln = BEAT * 0.9 if bs < 15.0 else 2.4
        for i in range(int(bs * SR), min(N, int((bs + ln) * SR))):
            t = i / SR - bs
            env = min(1.0, t / 0.012) * math.exp(-t / (0.35 if bs < 15 else 1.2))
            v = math.sin(TAU * f * t) * env * 0.16 * pump(i / SR)
            add(i, v, v)
        k += 1
        if bs >= 15.0:
            break

# --- kick: soft sine drop on every beat 3.0–14.4, one on 15.0 ---
kicks = [3.0 + k * BEAT for k in range(19)] + [15.0]
for ks in kicks:
    ph = 0.0
    for i in range(int(ks * SR), min(N, int((ks + 0.35) * SR))):
        t = i / SR - ks
        f = 48 + 70 * math.exp(-t / 0.03)
        ph += TAU * f / SR
        v = math.sin(ph) * math.exp(-t / 0.13) * 0.30
        add(i, v, v)

# --- shaker: deterministic LCG noise, one-pole high-pass ---
seed = 1234567
def rnd():
    global seed
    seed = (1103515245 * seed + 12345) & 0x7FFFFFFF
    return seed / 0x7FFFFFFF * 2 - 1

hats = []
for k in range(40):
    t = 3.0 + k * BEAT + BEAT / 2
    if t < 14.4:
        hats.append((t, 0.05, 0.035))
for k in range(26):
    t = 6.0 + k * BEAT / 2 + BEAT / 4
    if t < 14.4:
        hats.append((t, 0.02, 0.018))
for (hs, amp, tau) in hats:
    prev_x = prev_y = 0.0
    pan = 0.3 if int(hs / 0.3) % 2 else -0.3
    for i in range(int(hs * SR), min(N, int((hs + 0.12) * SR))):
        t = i / SR - hs
        x = rnd()
        y = 0.86 * (prev_y + x - prev_x)
        prev_x, prev_y = x, y
        v = y * math.exp(-t / tau) * amp
        add(i, v * (1 - pan), v * (1 + pan))

# --- pluck arpeggio: 8ths, chord tones an octave up ---
pat = [0, 2, 1, 3, 2, 1, 3, 2]
step = 0
for (s, e, notes, _) in CHORDS:
    t = s
    dt = BEAT / 2 if s < 15.0 else BEAT
    while t < e - 1e-6 and t < 17.6:
        n = notes[pat[step % len(pat)] % len(notes)] + 12
        f = hz(n)
        pan = 0.35 if step % 2 else -0.35
        amp = 0.055 if s < 15.0 else 0.07
        for i in range(int(t * SR), min(N, int((t + 1.2) * SR))):
            tt = i / SR - t
            env = min(1.0, tt / 0.004) * math.exp(-tt / 0.22)
            ph = TAU * f * tt
            v = (math.sin(ph) + 0.25 * math.sin(2 * ph) * math.exp(-tt / 0.05)) * env * amp
            add(i, v * (1 - pan), v * (1 + pan))
        step += 1
        t += dt

# --- master: fade in/out, soft clip, normalize to -3 dBFS peak ---
for i in range(N):
    ts = i / SR
    g = min(1.0, ts / 0.25) * (1.0 if ts < 17.6 else max(0.0, 1 - (ts - 17.6) / 1.1))
    L[i] = math.tanh(L[i] * 1.2) * g
    R[i] = math.tanh(R[i] * 1.2) * g
peak = max(max(abs(x) for x in L), max(abs(x) for x in R)) or 1
norm = 10 ** (-3 / 20) / peak

out = os.path.join(os.path.dirname(__file__), "..", "assets", "audio", "bed.wav")
os.makedirs(os.path.dirname(out), exist_ok=True)
with wave.open(out, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    frames = bytearray()
    for i in range(N):
        frames += struct.pack("<hh", int(L[i] * norm * 32767), int(R[i] * norm * 32767))
    w.writeframes(bytes(frames))
print("wrote", os.path.normpath(out), f"{DUR}s")
