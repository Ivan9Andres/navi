"use client"
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { FiSearch, FiBell } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import useUserStore from "@/store/userStore";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Albun({ onSelectTrack }) {
  const [albums, setAlbums] = useState([]);

  const { user, clearUser } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    async function fetchAlbums() {
      const querySnapshot = await getDocs(collection(db, "artistas"));
      const albumsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAlbums(albumsList);
    }

    fetchAlbums();
  }, []);

  const nickName = user.email.toUpperCase().slice(0, 2);

  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      clearUser();
      // Redireccionar al usuario después del logout, si es necesario
      router.push('/login');
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="relative h-screen z-0 bg-gray-100">

      <div className=" fixed lg:top-0 right-[0%] flex w-[1105] items-center justify-between p-4 bg-purple-100">
        {/* Barra de búsqueda */}
        <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 w-1/2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Artists, tracks, podcasts..."
            className="ml-2 bg-transparent outline-none text-sm text-gray-600 w-full"
          />
        </div>

        {/* Iconos */}
        <div className=" flex items-center gap-4">
          {/* Campana de notificaciones */}
          <FiBell className="text-gray-500 w-5 h-5" />
          {/* Avatar */}
          <div className="w-8 h-8 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full font-bold">
            {nickName}
          </div>
          <button type="button" role="button" onClick={handleLogout} className="w-8 h-8 bg-gray-200 text-gray-600 flex items-center justify-center font-bold">
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Album */}
      <div className="flex fixed">
        <div className="fixed lg:right-[195] right-[0] p-8">
          <h1 className="text-xl font-bold mb-4">Albums</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-black">
            {albums.map(album => (
              <div
                key={album.id}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer"
                onClick={() => onSelectTrack(album.url)} // Pasa la URL de la canción seleccionada
              >

                <h3 className="text-center font-medium text-gray-700">
                  {album.nombre}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Menu izquierdo */}
        <div className="barraiz fixed lg:left-0 left-[0%] h-full w-[260] flex flex-col p-5 bg-purple-100 ">
          <div className="">
            <h1 className="text-4xl font-extrabold text-black ">
              NAVI
            </h1>
          </div>
          <ul className="mt-5">
            <li className="text-xl text-black flex items-center gap-1"><GoHomeFill />
              <h3>Casa</h3></li>
            <li className="text-xl text-black flex items-center gap-1"><MdExplore /><h3>Explorar</h3></li>
            <li className="text-xl text-black flex items-center gap-1"><FaRegHeart /><h3>Favoritos</h3></li>
          </ul>
          <div className="mt-5">
            {/* Upgrade Banner */}
            <div className="bg-purple-500 text-white text-sm p-4 rounded-lg mb-6">
              <p className="font-medium">Upgrade & skip ads free for 1 month</p>
              <button className="bg-white text-purple-500 mt-2 py-1 px-4 rounded-md font-semibold">
                Try it now
              </button>
            </div>

            {/* Playlists Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Playlists</h2>

              {/* Favourite Tracks */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-red-200 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-red-500"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Favourite tracks</span>
              </div>

              {/* Create Playlist */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Create a playlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}