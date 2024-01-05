import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../styles/MusicPlayer.css";
import { useDispatch, useSelector } from 'react-redux';
import { RiCloseLine, RiSpotifyFill } from '@remixicon/react';
import { resetMusic } from '../store/slices/musicPlay';

const MusicPlayer = () => {
  const { musicLink, name, artists, externalUrl } = useSelector((store) => store.musicPlay)
  const dispatch = useDispatch()

  return (
    <AudioPlayer 
      autoPlay
      showJumpControls={false}
      volume={0.25}
      src={musicLink}
      customAdditionalControls={[
        <span key="artist-name" className='text-white absolute font-urbanist h-[20px] left-[14px] top-8 max-w-[260px] truncate'>{name}</span>, // Agrega el nombre del artista como un elemento adicional
        <span key="artists-name" className='text-white/60 font-urbanist absolute h-[20px] left-[14px] top-2 w-full max-w-[260px] truncate'>{artists}</span>,
        <RiCloseLine onClick={() => dispatch(resetMusic())} key="close" className='absolute top-0 right-0 hover:scale-110' color='#A284F6' />,
        <a href={externalUrl} target='_blank' rel="noreferrer" key="spotify" className='absolute botton-2 left-3 hover:scale-110'><RiSpotifyFill  color='#A284F6' /></a>
      ]}
    ></AudioPlayer>
  )
}
export default MusicPlayer
























/* import { useRef, useState, useEffect } from "react";
import "../styles/MusicPlayer.css";
import { RiPauseCircleFill, RiPlayCircleFill } from "@remixicon/react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="fixed bottom-2 left-60 w-[350px] h-[100px] px-2 flex flex-col items-center bg-white/10 backdrop-blur-md rounded-md border-[1px] border-white/30">
      <audio
        ref={audioRef}
        src="https://p.scdn.co/mp3-preview/c0f4b44e91971d348de02ca38b74003bdd6c853b?cid=76728c380d7c4a60b2d346094b79fccd"
        onEnded={() => setIsPlaying(false)}
      ></audio>
      <div className="absolute bottom-5 right-3 w-[60%] h-2 border-[1px] border-white/20 rounded-full overflow-hidden">
        <div
          className="h-[6px] bg-white rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>
      <div className="relative w-full h-full">
        <div className="w-full absolute bottom-5 right-3">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              setCurrentTime(e.target.value);
              audioRef.current.currentTime = e.target.value;
            }}
          />
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume"
          />
        </div>
      </div>
      <button onClick={togglePlay} className="absolute">
        {isPlaying ? (
          <RiPauseCircleFill size="40px" />
        ) : (
          <RiPlayCircleFill size="40px" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
 */