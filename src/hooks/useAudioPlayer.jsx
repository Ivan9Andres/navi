"use client";
import { useState, useEffect } from "react";

const useAudioPlayer = ({ audio, url }) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [duracionn, setDuracionn] = useState(0);
  const [actualTime, setActualTime] = useState(0);

  const handlePlay = () => {
    if (audio.current) {
      audio.current.play().catch((error) => {
        console.error("Error reproduciendo audio:", error);
      });
      setPlay(true);
    }
  };

  const handlePause = () => {
    if (audio.current) {
      audio.current.pause();
      setPlay(false);
    }
  };

  const handlePosition = (position) => {
    if (audio.current) {
      audio.current.currentTime = position;
      setActualTime(position);
    }
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.onloadedmetadata = () => {
        setDuracionn(audio.current.duration);
        setDuration(formatTime(audio.current.duration));
      };

      audio.current.ontimeupdate = () => {
        setActualTime(audio.current.currentTime);
        setCurrentTime(formatTime(audio.current.currentTime));
      };
    }

    return () => {
      if (audio.current) {
        audio.current.ontimeupdate = null;
        audio.current.onloadedmetadata = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audio.current && url) {
      audio.current.pause();
      audio.current.src = url;
      audio.current.load();
      setPlay(false);
    }
  }, [url]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return {
    handlePlay,
    play,
    handlePause,
    currentTime,
    duration,
    duracionn,
    actualTime,
    handlePosition,
  };
};

export default useAudioPlayer;
