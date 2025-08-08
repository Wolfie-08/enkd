import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, MoreHorizontal } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface Song {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover?: string;
}

interface MusicPlayerProps {
  songs?: Song[];
}

const defaultSongs: Song[] = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
  { id: '2', title: 'Watermelon Sugar', artist: 'Harry Styles', duration: '2:54' },
  { id: '3', title: 'Levitating', artist: 'Dua Lipa', duration: '3:23' },
  { id: '4', title: 'Good 4 U', artist: 'Olivia Rodrigo', duration: '2:58' },
  { id: '5', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', duration: '2:21' },
  { id: '6', title: 'Industry Baby', artist: 'Lil Nas X & Jack Harlow', duration: '3:32' },
  { id: '7', title: 'Heat Waves', artist: 'Glass Animals', duration: '3:58' },
  { id: '8', title: 'Bad Habits', artist: 'Ed Sheeran', duration: '3:51' },
  { id: '9', title: 'Shivers', artist: 'Ed Sheeran', duration: '3:27' },
  { id: '10', title: 'Ghost', artist: 'Justin Bieber', duration: '2:33' },
];

const MusicPlayer = ({ songs = defaultSongs }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [likedSongs, setLikedSongs] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState([0]);
  
  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const toggleLike = (songId: string) => {
    const newLikedSongs = new Set(likedSongs);
    if (newLikedSongs.has(songId)) {
      newLikedSongs.delete(songId);
    } else {
      newLikedSongs.add(songId);
    }
    setLikedSongs(newLikedSongs);
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
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 mx-auto mb-4 flex items-center justify-center">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-1">{currentSong.title}</h3>
        <p className="text-white/60 text-sm">{currentSong.artist}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-white/60 mt-2">
          <span>1:24</span>
          <span>{currentSong.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="text-white/80 hover:text-white"
        >
          <SkipBack className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlayPause}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-black" />
          ) : (
            <Play className="w-5 h-5 text-black ml-0.5" />
          )}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="text-white/80 hover:text-white"
        >
          <SkipForward className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 mb-6">
        <Volume2 className="w-4 h-4 text-white/60" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
      </div>

      {/* Playlist */}
      <div className="max-h-64 overflow-y-auto">
        <h4 className="text-white/80 text-sm font-medium mb-3">Up Next</h4>
        <div className="space-y-2">
          {songs.slice(0, 10).map((song, index) => (
            <motion.div
              key={song.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSongSelect(index)}
              className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors ${
                index === currentSongIndex 
                  ? 'bg-white/10' 
                  : 'hover:bg-white/5'
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                <Play className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{song.title}</p>
                <p className="text-white/60 text-xs truncate">{song.artist}</p>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(song.id);
                  }}
                  className={`${
                    likedSongs.has(song.id) ? 'text-red-500' : 'text-white/40'
                  } hover:text-red-500`}
                >
                  <Heart className="w-4 h-4" fill={likedSongs.has(song.id) ? 'currentColor' : 'none'} />
                </motion.button>
                <span className="text-white/40 text-xs">{song.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;