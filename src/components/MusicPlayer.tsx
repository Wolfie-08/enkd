import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, Pause, SkipBack, SkipForward, Volume2, Heart, MoreHorizontal, Loader2, PlusCircle
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
  { id: "1", title: "Golden Hour", artist: "JVKE", src: "/audio/golden_hour.m4a", cover: "/images/covers/hour.jpg" },
  { id: "2", title: "Circles", artist: "Post Malone", src: "/audio/circles.m4a", cover: "/images/covers/circles.jpg" },
  { id: "3", title: "Vagabond", artist: "MisterWives", src: "/audio/vagabond.m4a", cover: "/images/covers/vagabond.jpg" },
  { id: "4", title: "Vagabond", artist: "Wolfmother", src: "/audio/vagabond1.m4a", cover: "/images/covers/vagabond1.jpg" },
  { id: "5", title: "Army Dreamers", artist: "Kate Bush", src: "/audio/dreamers.m4a", cover: "/images/covers/dreamers.jpg" },
  { id: "6", title: "Ordinary", artist: "Alex Warren", src: "/audio/ordinary.m4a", cover: "/images/covers/ordinary.jpg" },
];

const MusicPlayer = () => {
  const [songs, setSongs] = useState(defaultSongs);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState([0]);
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0.6)");

  // Two refs for crossfade
  const audioRefs = useRef<[HTMLAudioElement | null, HTMLAudioElement | null]>([null, null]);
  const currentAudioRef = useRef(0);

  // Waveform analyser
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const currentSong = songs[currentSongIndex];

  // Extract colors for background
  useEffect(() => {
    Vibrant.from(currentSong.cover).getPalette().then((palette) => {
      if (palette?.Vibrant) {
        const rgb = palette.Vibrant.rgb;
        setBgColor(`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.35)`);
      }
    }).catch(() => {
      setBgColor("rgba(0,0,0,0.6)");
    });
  }, [currentSong]);

  // Init two audio elements
  useEffect(() => {
    audioRefs.current = [
      new Audio(currentSong.src),
      new Audio()
    ];
    audioRefs.current.forEach(audio => {
      if (audio) {
        audio.preload = "auto";
        audio.volume = volume[0] / 100;
        audio.addEventListener('loadeddata', () => setLoading(false));
        audio.addEventListener('loadstart', () => setLoading(true));
        audio.addEventListener('timeupdate', () => {
          if (audio === audioRefs.current[currentAudioRef.current]) {
            const progress = (audio.currentTime / audio.duration) * 100;
            setProgress([progress || 0]);
          }
        });
        audio.addEventListener('ended', handleNext);
      }
    });
    setupAnalyser(audioRefs.current[0]!);
  }, []);

  const setupAnalyser = (audioEl: HTMLAudioElement) => {
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audioEl);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyserRef.current = analyser;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      if (!canvasRef.current || !dataArrayRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      analyser.getByteFrequencyData(dataArrayRef.current);
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const barWidth = (canvasRef.current.width / dataArrayRef.current.length) * 1.5;
      let x = 0;
      dataArrayRef.current.forEach((value) => {
        const barHeight = value * 0.7;
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
  };

  const handlePlayPause = () => {
    const audio = audioRefs.current[currentAudioRef.current];
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const crossfadeTo = (nextIndex: number) => {
    const currentIdx = currentAudioRef.current;
    const nextIdx = (currentIdx + 1) % 2;

    const currentAudio = audioRefs.current[currentIdx]!;
    const nextAudio = audioRefs.current[nextIdx]!;
    nextAudio.src = songs[nextIndex].src;
    nextAudio.currentTime = 0;
    nextAudio.volume = 0;
    nextAudio.play();

    const fadeDuration = 2; // seconds
    const step = 0.05;
    let vol = 0;
    const fadeInterval = setInterval(() => {
      vol += step / fadeDuration;
      currentAudio.volume = Math.max(0, currentAudio.volume - step / fadeDuration);
      nextAudio.volume = Math.min(volume[0] / 100, vol);
      if (vol >= volume[0] / 100) {
        clearInterval(fadeInterval);
        currentAudio.pause();
        currentAudioRef.current = nextIdx;
        setupAnalyser(nextAudio);
      }
    }, step * 1000);

    setCurrentSongIndex(nextIndex);
  };

  const handleNext = () => crossfadeTo((currentSongIndex + 1) % songs.length);
  const handlePrevious = () => crossfadeTo((currentSongIndex - 1 + songs.length) % songs.length);

  return (
    <div
      className="relative w-full max-w-sm rounded-3xl overflow-hidden"
      style={{
        background: bgColor,
        backdropFilter: "blur(20px)",
        transition: "background 0.5s ease"
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
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSong.cover}
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-24 h-24 rounded-2xl mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, rotate: isPlaying ? 360 : 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ repeat: isPlaying ? Infinity : 0, duration: 6, ease: "linear" }}
          />
        </AnimatePresence>
        {loading && <Loader2 className="w-6 h-6 text-white animate-spin mx-auto mb-2" />}
        <h3 className="text-white font-semibold text-lg mb-1">{currentSong.title}</h3>
        <p className="text-white/60 text-sm">{currentSong.artist}</p>

        {/* Progress */}
        <Slider
          value={progress}
          onValueChange={(val) => {
            const audio = audioRefs.current[currentAudioRef.current];
            if (audio) {
              audio.currentTime = (val[0] / 100) * audio.duration;
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
              const audio = audioRefs.current[currentAudioRef.current];
              if (audio) audio.volume = val[0] / 100;
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
            <button className="text-green-400 hover:text-green-300">
              <PlusCircle className="w-4 h-4" />
            </button>
          </h4>
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => crossfadeTo(index)}
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
                  setLikedSongs(prev => {
                    const newSet = new Set(prev);
                    newSet.has(song.id) ? newSet.delete(song.id) : newSet.add(song.id);
                    return newSet;
                  });
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
