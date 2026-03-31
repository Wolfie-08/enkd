import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, Radar, SkipBack, SkipForward } from "lucide-react";

import { cn } from "@/lib/utils";

type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
};

const tracks: Track[] = [
  { id: "1", title: "Golden Hour", artist: "JVKE", src: "/audio/golden_hour.m4a", cover: "/images/covers/hour.jpg" },
  { id: "2", title: "Circles", artist: "Post Malone", src: "/audio/circles.m4a", cover: "/images/covers/circles.jpg" },
  { id: "3", title: "Vagabond", artist: "MisterWives", src: "/audio/vagabond.m4a", cover: "/images/covers/vagabond.jpg" },
  { id: "4", title: "Vagabond", artist: "Wolfmother", src: "/audio/vagabond1.m4a", cover: "/images/covers/vagabond1.jpg" },
  { id: "5", title: "Army Dreamers", artist: "Kate Bush", src: "/audio/dreamers.m4a", cover: "/images/covers/dreamers.jpg" },
  { id: "6", title: "Ordinary", artist: "Alex Warren", src: "/audio/ordinary.m4a", cover: "/images/covers/ordinary.jpg" },
  { id: "7", title: "Let It Happen", artist: "Tame Impala", src: "/audio/let_it_happen.m4a", cover: "/images/covers/let_it_happen.jpg" },
];

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return "0:00";
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Card = ({ className }: { className?: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = tracks[trackIndex];
  const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setTrackIndex((prev) => (prev + 1) % tracks.length);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();
    setCurrentTime(0);

    if (isPlaying) {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [trackIndex, isPlaying]);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePrevious = () => {
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNext = () => {
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handleRandom = () => {
    if (tracks.length < 2) return;
    setTrackIndex((prev) => {
      let next = prev;
      while (next === prev) {
        next = Math.floor(Math.random() * tracks.length);
      }
      return next;
    });
  };

  const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    const nextTime = ratio * duration;
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div className={cn("music-player-container", isPlaying && "is-playing", className)}>
      <div className="main-music-card">
        <input type="checkbox" id="play-toggle" hidden checked={isPlaying} readOnly aria-hidden="true" />
        <audio ref={audioRef} preload="metadata">
          <source src={currentTrack.src} />
        </audio>

        <div className="track-info">
          <div
            className="album-art"
            style={{ backgroundImage: `url(${currentTrack.cover})` }}
            aria-label={`${currentTrack.title} cover art`}
          />

          <div className="track-details">
            <div className="track-title">{currentTrack.title}</div>
            <div className="artist-name">{currentTrack.artist}</div>
          </div>

          <div className="volume-bars" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bar"
                style={{ animationDelay: `${index * 0.12}s` }}
              />
            ))}
          </div>
        </div>

        <div className="playback-controls">
          <div className="time-info">
            <span className="current-time">{formatTime(currentTime)}</span>
            <span className="remaining-time">-{formatTime(Math.max(duration - currentTime, 0))}</span>
          </div>

          <div
            className="progress-bar"
            onClick={handleSeek}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration || 0)}
            aria-valuenow={Math.round(currentTime)}
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
            <div className="progress-handle" style={{ left: `${progress}%` }} />
          </div>

          <div className="button-row">
            <div className="main-control-btns">
              <button type="button" className="control-button back" onClick={handlePrevious} aria-label="Previous track">
                <SkipBack width={22} height={22} />
              </button>

              <div className="play-pause-btns">
                <label htmlFor="play-toggle" className="control-button play-pause-button" onClick={togglePlayPause}>
                  {isPlaying ? <Pause className="icon-pause" /> : <Play className="icon-play" />}
                </label>
              </div>

              <button type="button" className="control-button next" onClick={handleNext} aria-label="Next track">
                <SkipForward width={22} height={22} />
              </button>
            </div>

            <button type="button" className="control-button d" onClick={handleRandom} aria-label="Random track">
              <Radar width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
