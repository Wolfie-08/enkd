// src/components/audio-player.tsx
"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";

const KEY = "enkd:muted";
const TRACK = "/audio/ordinary.m4a";
const TARGET_VOLUME = 0.35;

// Tiny store shared by the player and the nav button.
let muted = false;
let audio: HTMLAudioElement | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };
const getMuted = () => muted;
const getServer = () => true; // render as muted on the server to avoid hydration mismatch

function setMuted(next: boolean) {
  muted = next;
  try { localStorage.setItem(KEY, next ? "1" : "0"); } catch {}
  if (audio) {
    if (next) audio.pause();
    else void audio.play().then(() => fadeIn()).catch(() => {});
  }
  emit();
}

function fadeIn() {
  if (!audio) return;
  const start = performance.now();
  const step = (now: number) => {
    if (!audio || muted) return;
    audio.volume = Math.min(TARGET_VOLUME, ((now - start) / 2000) * TARGET_VOLUME);
    if (audio.volume < TARGET_VOLUME) requestAnimationFrame(step);
  };
  audio.volume = 0;
  requestAnimationFrame(step);
}

export function AudioPlayer() {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audio = ref.current;
    let stored = "0";
    try { stored = localStorage.getItem(KEY) ?? "0"; } catch {}
    muted = stored === "1";
    emit();
    if (muted) return;

    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    const start = () => {
      events.forEach((e) => window.removeEventListener(e, start));
      if (muted || !audio) return;
      void audio.play().then(() => fadeIn()).catch(() => {});
    };
    events.forEach((e) => window.addEventListener(e, start, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, start));
  }, []);

  return <audio ref={ref} src={TRACK} loop preload="none" />;
}

export function MuteButton({ label }: { label: string }) {
  const isMuted = useSyncExternalStore(subscribe, getMuted, getServer);
  return (
    <button
      type="button"
      onClick={() => setMuted(!isMuted)}
      aria-pressed={!isMuted}
      aria-label={label}
      title={label}
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground transition-colors"
    >
      {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
    </button>
  );
}
