import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, MoreHorizontal, Loader2, PlusCircle, Trash2 } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface Song {
  id: string;
  title: string;
  artist: string;
  src: string;
  cover: string;
  duration?: string; // Will be auto-fetched
}

const defaultSongs: Song[] = [
  { id: '1', title: 'Golden_hour', artist: 'JVKE', src: '/assets/audio/golden_hour.m4a', cover: '/assets/images/covers/hour.jpg' },
  { id: '2', title: 'Circles', artist: 'Post Malone', src: '/assets/audio/circles.m4a', cover: '/assets/images/covers/circles.jpg' },
  { id: '3', title: 'Vagabond', artist: 'MisterWives', src: '/assets/audio/vagabond.m4a', cover: '/assets/images/covers/vagabond.jpg' },
  { id: '4', title: 'Vagabond', artist: 'Wolfmother', src: '/assets/audio/vagabond1.m4a', cover: '/assets/images/covers/vagabond1.jpg' },
  { id: '5', title: 'Army_Dreamers', artist: 'Kate Bush', src: '/assets/audio/dreamers.m4a', cover: '/assets/images/covers/dreamers.jpg' },
  { id: '6', title: 'Ordinary', artist: 'Alex Warren', src: '/assets/audio/ordinary.m4a', cover: '/assets/images/covers/ordinary.jpg' },
];

const MusicPlayer = () => {
  const [songs, setSongs] = useState<Song[]>(defaultSongs);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState([0]);
  const [loading, setLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSong = songs[currentSongIndex];

  // Auto-load duration
  useEffect(() => {
    const audio = new Audio(currentSong.src);
    audio.addEventListener('loadedmetadata', () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60)
        .toString()
        .padStart(2, '0');
      setSongs((prev) =>
        prev.map((s, idx) =>
          idx === currentSongIndex ? { ...s, duration: `${minutes}:${seconds}` } : s
        )
      );
    });
  }, [currentSongIndex, currentSong.src]);

  // Handle Play/Pause
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Next Song
  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  // Handle Previous Song
  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  // Update progress bar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress([(audio.currentTime / audio.duration) * 100 || 0]);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [currentSongIndex]);

  // Handle like toggle
  const toggleLike = (songId: string) => {
    setLikedSongs((prev) => {
      const newSet = new Set(prev);
      newSet.has(songId) ? newSet.delete(songId) : newSet.add(songId);
      return newSet;
    });
  };

  // Handle local add song
  const handleAddSong = () => {
    const newSong: Song = {
      id: Date.now().toString(),
      title: 'New Song',
      artist: 'Unknown Artist',
      src: '/assets/audio/sample.mp3',
      cover: '/assets/images/covers/sample.jpg',
    };
    setSongs((prev) => [...prev, newSong]);
  };

  // Handle remove song
  const handleRemoveSong = (id: string) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
    if (currentSongIndex >= songs.length - 1) {
      setCurrentSongIndex(0);
    }
  };

  return (
    <div className="w-full max-w-sm bg-black/20 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
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

      {/* Current Song */}
      <div className="text-center mb-6">
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
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadStart={() => setLoading(true)}
        onCanPlay={() => setLoading(false)}
        onEnded={handleNext}
        volume={volume[0] / 100}
      />

      {/* Progress Bar */}
      <div className="mb-6">
        <Slider value={progress} onValueChange={(val) => {
          if (audioRef.current) {
            audioRef.current.currentTime = (val[0] / 100) * audioRef.current.duration;
          }
          setProgress(val);
        }} max={100} step={1} />
        <div className="flex justify-between text-xs text-white/60 mt-2">
          <span>
            {audioRef.current ? `${Math.floor(audioRef.current.currentTime / 60)}:${Math.floor(audioRef.current.currentTime % 60).toString().padStart(2, '0')}` : '0:00'}
          </span>
          <span>{currentSong.duration || '0:00'}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handlePrevious} className="text-white/80 hover:text-white">
          <SkipBack className="w-6 h-6" />
        </motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handlePlayPause} className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
          {isPlaying ? <Pause className="w-5 h-5 text-black" /> : <Play className="w-5 h-5 text-black ml-0.5" />}
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleNext} className="text-white/80 hover:text-white">
          <SkipForward className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 mb-6">
        <Volume2 className="w-4 h-4 text-white/60" />
        <Slider value={volume} onValueChange={(val) => {
          setVolume(val);
          if (audioRef.current) audioRef.current.volume = val[0] / 100;
        }} max={100} step={1} className="flex-1" />
      </div>

      {/* Playlist */}
      <div className="max-h-64 overflow-y-auto">
        <h4 className="text-white/80 text-sm font-medium mb-3 flex items-center justify-between">
          Up Next
          <button onClick={handleAddSong} className="text-green-400 hover:text-green-300">
            <PlusCircle className="w-4 h-4" />
          </button>
        </h4>
        <div className="space-y-2">
          {songs.map((song, index) => (
            <motion.div key={song.id} whileHover={{ scale: 1.02 }} onClick={() => setCurrentSongIndex(index)} className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors ${index === currentSongIndex ? 'bg-white/10' : 'hover:bg-white/5'}`}>
              <img src={song.cover} alt={song.title} className="w-10 h-10 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{song.title}</p>
                <p className="text-white/60 text-xs truncate">{song.artist}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); toggleLike(song.id); }} className={`${likedSongs.has(song.id) ? 'text-red-500' : 'text-white/40'} hover:text-red-500`}>
                  <Heart className="w-4 h-4" fill={likedSongs.has(song.id) ? 'currentColor' : 'none'} />
                </motion.button>
                <span className="text-white/40 text-xs">{song.duration || '...'}</span>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={(e) => { e.stopPropagation(); handleRemoveSong(song.id); }} className="text-white/40 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
