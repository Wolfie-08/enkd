import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Heart,
  MoreHorizontal,
  Loader2,
  PlusCircle,
  Trash2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import Vibrant from "node-vibrant";

interface Song {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
  duration?: string;
}

const defaultSongs: Song[] = [
  { id: "1", title: "Golden Hour", artist: "JVKE", src: "/audio/golden_hour.mp3", cover: "/images/covers/hour.jpg" },
  { id: "2", title: "Circles", artist: "Post Malone", src: "/audio/circles.mp3", cover: "/images/covers/circles.jpg" },
  { id: "3", title: "Vagabond", artist: "MisterWives", src: "/audio/vagabond.mp3", cover: "/images/covers/vagabond.jpg" },
  { id: "4", title: "Vagabond", artist: "Wolfmother", src: "/audio/vagabond1.mp3", cover: "/images/covers/vagabond1.jpg" },
  { id: "5", title: "Army Dreamers", artist: "Kate Bush", src: "/audio/dreamers.mp3", cover: "/images/covers/dreamers.jpg" },
  { id: "6", title: "Ordinary", artist: "Alex Warren", src: "/audio/ordinary.mp3", cover: "/images/covers/ordinary.jpg" },
];

const MusicPlayer = () => {
  const [songs, setSongs] = useState(defaultSongs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState([0]);
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState<string>("rgba(0,0,0,0.6)");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const currentSong = songs[currentSongIndex];

  // Extract dominant color from cover
  useEffect(() => {
    Vibrant.from(currentSong.cover).getPalette().then((palette) => {
      if (palette?.Vibrant) {
        const rgb = palette.Vibrant.rgb;
        setBgColor(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.4)`);
      }
    });
  }, [currentSong]);

  // Preload audio for instant playback
  useEffect(() => {
    const preloadAudio = new Audio(currentSong.src);
    preloadAudio.load();
  }, [currentSong]);

  // Load duration
  useEffect(() => {
    const audio = new Audio(currentSong.src);
    audio.addEventListener("loadedmetadata", () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");
      setSongs((prev) =>
        prev.map((s, idx) =>
          idx === currentSongIndex ? { ...s, duration: `${minutes}:${seconds}` } : s
        )
      );
    });
  }, [currentSongIndex, currentSong.src]);

  // Web Audio API waveform setup
  useEffect(() => {
    if (!audioRef.current) return;
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audioRef.current);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const barWidth = (canvasRef.current.width / dataArrayRef.current.length) * 2.5;
      let x = 0;

      dataArrayRef.current.forEach((value) => {
        const barHeight = value / 2;
        const gradient = ctx.createLinearGradient(0, 0, 0, canvasRef.current.height);
        gradient.addColorStop(0, "#1db954");
        gradient.addColorStop(1, "#191414");
        ctx.fillStyle = gradient;
        ctx.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      });

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      audioCtx.close();
    };
  }, [currentSongIndex]);

  // Play / Pause
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  const handlePrevious = () => setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);

  // Progress tracking
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      setProgress([(audio.currentTime / audio.duration) * 100 || 0]);
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, [currentSongIndex]);

  const toggleLike = (id: string) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <div
      className="relative w-full max-w-sm rounded-3xl overflow-hidden"
      style={{
        background: bgColor,
        backdropFilter: "blur(20px)",
      }}
    >
      <canvas ref={canvasRef} width={300} height={80} className="absolute top-2 left-1/2 -translate-x-1/2 z-10 opacity-60" />
      <div className="p-6 relative z-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1db954] flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">Spotify</span>
          </div>
          <MoreHorizontal className="w-5 h-5 text-white/60" />
        </div>

        {/* Song Info */}
        <motion.img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-24 h-24 rounded-2xl mx-auto mb-4"
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: isPlaying ? Infinity : 0, duration: 6, ease: "linear" }}
        />
        {loading && <Loader2 className="w-6 h-6 text-white animate-spin mx-auto mb-2" />}
        <h3 className="text-white font-semibold text-lg mb-1">{currentSong.title}</h3>
        <p className="text-white/60 text-sm">{currentSong.artist}</p>

        {/* Audio */}
        <audio
          ref={audioRef}
          src={currentSong.src}
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadStart={() => setLoading(true)}
          onCanPlay={() => setLoading(false)}
          onEnded={handleNext}
        />

        {/* Progress */}
        <Slider
          value={progress}
          onValueChange={(val) => {
            if (audioRef.current) {
              audioRef.current.currentTime = (val[0] / 100) * audioRef.current.duration;
            }
            setProgress(val);
          }}
          max={100}
          step={1}
        />

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <motion.button onClick={handlePrevious} whileHover={{ scale: 1.1 }}>
            <SkipBack className="text-white" />
          </motion.button>
          <motion.button onClick={handlePlayPause} className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            {isPlaying ? <Pause className="text-black" /> : <Play className="text-black ml-0.5" />}
          </motion.button>
          <motion.button onClick={handleNext} whileHover={{ scale: 1.1 }}>
            <SkipForward className="text-white" />
          </motion.button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 mt-6">
          <Volume2 className="w-4 h-4 text-white/60" />
          <Slider
            value={volume}
            onValueChange={(val) => {
              setVolume(val);
              if (audioRef.current) audioRef.current.volume = val[0] / 100;
            }}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>

        {/* Playlist */}
        <div className="max-h-64 overflow-y-auto mt-6">
          <h4 className="text-white/80 text-sm font-medium mb-3 flex justify-between">
            Up Next
            <button onClick={() => {}} className="text-green-400 hover:text-green-300">
              <PlusCircle className="w-4 h-4" />
            </button>
          </h4>
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setCurrentSongIndex(index)}
              className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer ${index === currentSongIndex ? "bg-white/10" : "hover:bg-white/5"}`}
            >
              <img src={song.cover} alt={song.title} className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="text-white text-sm font-medium truncate">{song.title}</p>
                <p className="text-white/60 text-xs truncate">{song.artist}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(song.id);
                }}
                className={`${likedSongs.has(song.id) ? "text-red-500" : "text-white/40"}`}
              >
                <Heart fill={likedSongs.has(song.id) ? "currentColor" : "none"} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
