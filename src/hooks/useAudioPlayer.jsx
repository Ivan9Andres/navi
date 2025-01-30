"use client";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const useAudioPlayer = ({ audio, url }) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [duracionn, setDuracionn] = useState(0);
  const [actualTime, setActualTime] = useState(0);

  const [albums, setAlbums] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTrackName, setCurrentTrackName] = useState(null);

  const handlePlay = () => {
    const playPromise = audio.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          setPlay(true);
        })
        .catch((error) => {
          console.log("Error al reproducir el audio:", error);
        });
    }
  };

  useEffect(() => {
    async function fetchAlbums() {
      const querySnapshot = await getDocs(collection(db, "artistas"));
      const albumsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlbums(albumsList);
      console.log("albumsList", albumsList);
    }

    fetchAlbums();
  }, []);

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < albums.length -1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : albums.length - 1
    );
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
    if (!albums || albums.length === 0) return; // Si no hay álbumes, no hacemos nada
    if (audio.current) {
      audio.current.pause(); // Pausa el audio actual
      audio.current.src = albums[currentTrackIndex].url; // Cambia la URL al nuevo audio
      audio.current.load(); // Carga el nuevo audio
      setPlay(false); // Reinicia el estado de reproducción
      setCurrentTrackName(albums[currentTrackIndex].name); // Actualiza el nombre del audio
      handlePlay(); // Reproduce el nuevo audio
    }
  }, [currentTrackIndex]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
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
    handleNext,
    handlePrev,
    currentTrackName,
  };
};

export default useAudioPlayer;
