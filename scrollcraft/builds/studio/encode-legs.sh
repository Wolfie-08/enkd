#!/usr/bin/env bash
# Cut the continuous Blender flight (renders/frames/0001..1128.png) into worldflight legs.
# Consecutive legs share their boundary frame, so every seam is pixel-identical by construction.
# Desktop: scroll-craft's encode.sh (1080p, GOP 8). Phone: a portrait centre crop (540x960, GOP 4),
# rendered from the full frame rather than upscaled from the landscape clip.
set -euo pipefail
cd "$(dirname "$0")"
OUT=../../../public/studio/world
ENC=~/.claude/skills/scroll-craft/scripts/encode.sh
LEGS=(0 144 288 480 624 768 912 1128) # keep in sync with blender/world.py
mkdir -p "$OUT" renders/legs

for i in 0 1 2 3 4 5 6; do
  a=${LEGS[$i]}; b=${LEGS[$((i + 1))]}; [ "$a" -lt 1 ] && a=1
  master=renders/legs/leg$i.mp4
  ffmpeg -y -v error -framerate 24 -start_number "$a" -i renders/frames/%04d.png -frames:v $((b - a + 1)) \
    -c:v libx264 -crf 10 -preset medium -pix_fmt yuv420p "$master"
  bash "$ENC" "$master" "$OUT/leg$i.mp4" desktop 22
  ffmpeg -y -v error -i "$master" -an -vf "crop=ih*9/16:ih,scale=540:960:flags=lanczos,format=yuv420p" \
    -c:v libx264 -profile:v high -preset slow -crf 24 -g 4 -keyint_min 4 -sc_threshold 0 -movflags +faststart \
    "$OUT/leg$i-m.mp4"
  # Poster from the ENCODED clip, so it matches the frame the browser decodes.
  ffmpeg -y -v error -i "$OUT/leg$i.mp4" -frames:v 1 -q:v 4 "$OUT/p$i.jpg"
  ffmpeg -y -v error -i "$OUT/leg$i-m.mp4" -frames:v 1 -q:v 4 "$OUT/p$i-m.jpg"
done
du -ch "$OUT"/* | tail -1
