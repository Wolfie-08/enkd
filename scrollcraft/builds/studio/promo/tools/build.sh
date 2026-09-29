#!/usr/bin/env bash
# One-command build: render the HyperFrames composition, then encode the
# web deliverable (H.264 yuv420p + AAC, faststart, loudness -16 LUFS / -1.5 dBTP)
# and the end-card poster into enkd/public/studio/.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=../../../../public/studio
MASTER=renders/promo-master.mp4
mkdir -p "$OUT" renders

npx --yes hyperframes@0.8.91 render -o "$MASTER" --quality looks --skill general-video

# pass 1: measure loudness
MEAS=$(ffmpeg -hide_banner -nostats -i "$MASTER" -vn \
  -af loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
read -r MI MTP MLRA MTH OFF < <(python3 -c 'import json,sys; d=json.loads(sys.stdin.read()); print(d["input_i"],d["input_tp"],d["input_lra"],d["input_thresh"],d["target_offset"])' <<<"$MEAS")

# pass 2: encode
ffmpeg -hide_banner -y -i "$MASTER" \
  -af "loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=$MI:measured_TP=$MTP:measured_LRA=$MLRA:measured_thresh=$MTH:offset=$OFF:linear=true,aresample=48000" \
  -c:v libx264 -preset slow -crf 20 -maxrate 3000k -bufsize 6000k -profile:v high -pix_fmt yuv420p \
  -c:a aac -b:a 160k -ar 48000 -movflags +faststart "$OUT/promo.mp4"

# poster: a frame from the settled end card
ffmpeg -hide_banner -y -ss 18.0 -i "$MASTER" -frames:v 1 -update 1 -q:v 3 "$OUT/promo-poster.jpg"

SIZE=$(stat -f%z "$OUT/promo.mp4" 2>/dev/null || stat -c%s "$OUT/promo.mp4")
echo "promo.mp4: $SIZE bytes"
[ "$SIZE" -le 8388608 ] || { echo "ERROR: promo.mp4 exceeds 8 MB" >&2; exit 1; }
