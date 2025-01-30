"use client"
import { useState, useEffect } from "react";
import Inicio from "../components/Inicio";
import AudioPlayer from "@/components/AudioPlayer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserStore from "@/store/userStore";
import Albun from "@/components/Albun";


export default function HomePage() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  const { setUser, user } = useUserStore();

  const handleSelectTrack = (track) => {
    setSelectedTrack({
      url: track.url,
      name: track.album, // Puedes ajustar esto según tus datos
      artist: track.nombre, // Puedes ajustar esto según tus datos
    });
  };

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <>
    {
      loading && <h2>Autenticando...</h2>
    }
      {user !== null ? (
        <>
          <Albun onSelectTrack={handleSelectTrack} track={selectedTrack}/>
          {selectedTrack && <AudioPlayer track={selectedTrack} />}
        </>
      ) : (
        <Inicio />
      )}
    </>
  );
}
