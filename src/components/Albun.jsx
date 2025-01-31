"use client";

import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Corazón vacío y lleno
import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { FiSearch, FiBell } from "react-icons/fi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import useUserStore from "@/store/userStore";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { IoExitOutline } from "react-icons/io5";

export default function Album({ onSelectTrack, track }) {
  const [albums, setAlbums] = useState([]);
  const [favorites, setFavorites] = useState([]); // Estado para favoritos
  const { user, clearUser } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    async function fetchAlbums() {
      const querySnapshot = await getDocs(collection(db, "artistas"));
      const albumsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAlbums(albumsList);
    }

    fetchAlbums();
  }, []);

  // Alternar favoritos
  const toggleFavorite = (albumId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(albumId)
        ? prevFavorites.filter((id) => id !== albumId) // Quitar de favoritos
        : [...prevFavorites, albumId] // Agregar a favoritos
    );
  };

  const nickName = user?.email?.toUpperCase().slice(0, 2);
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      clearUser();
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {/* Barra Superior */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-purple-100 z-10 shadow-md">
        {/* Barra de búsqueda */}
        <div className="flex items-center bg-gray-300 rounded-full px-4 py-2 w-1/2 max-w-md">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Artists, tracks, podcasts..."
            className="ml-2 bg-transparent outline-none text-sm text-gray-600 w-full"
          />
        </div>

        {/* Iconos y Cerrar Sesión */}
        <div className="flex items-center gap-4">
          <FiBell className="text-gray-500 w-5 h-5" />
          <div className="w-8 h-8 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full font-bold">
            {nickName}
          </div>
          <button
            onClick={handleLogout}
            className="bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            <IoExitOutline />
          </button>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex h-full pt-16">
        {/* Barra lateral */}
        <aside className="w-64 h-full bg-purple-100 p-5 flex flex-col shadow-md">
          <h1 className="text-4xl font-extrabold text-black mb-8">NAVI</h1>
          <nav>
            <ul className="space-y-4">
              <li className="text-xl text-black flex items-center gap-2">
                <GoHomeFill />
                <span>Casa</span>
              </li>
              <li className="text-xl text-black flex items-center gap-2">
                <MdExplore />
                <span>Explorar</span>
              </li>
              <li className="text-xl text-black flex items-center gap-2">
                <FaRegHeart />
                <span>Favoritos</span>
              </li>
            </ul>
          </nav>

          {/* Upgrade Banner */}
          <div className="mt-10 bg-purple-500 text-white text-sm p-4 rounded-lg">
            <p className="font-medium">Upgrade & skip ads free for 1 month</p>
            <button className="bg-white text-purple-500 mt-2 py-1 px-4 rounded-md font-semibold">
              Try it now
            </button>
          </div>

          {/* Playlists */}
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-4">Playlists</h2>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-red-200 flex items-center justify-center rounded-md">
                <FaHeart className="text-red-500 w-5 h-5" />
              </div>
              <span className="text-gray-700 font-medium">
                Favourite tracks
              </span>
            </div>

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
              <span className="text-gray-700 font-medium">
                Create a playlist
              </span>
            </div>
          </div>
        </aside>

        {/* Lista de álbumes */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-xl font-bold mb-4">Musia</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-black">
            {albums.map((album) => (
              <div
                key={album.id}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition p-4 cursor-pointer relative"
                onClick={() => onSelectTrack(album)}
              >
                {/* Botón de favorito */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que haga clic en el álbum
                    toggleFavorite(album.id);
                  }}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
                >
                  {favorites.includes(album.id) ? (
                    <FaHeart className="text-red-500 w-5 h-5" />
                  ) : (
                    <FaRegHeart className="w-5 h-5" />
                  )}
                </button>

                <h3 className="text-center font-medium text-gray-700">
                {album?.nombre === track?.artist ? "🎧" : ""} {album.nombre}
                </h3>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
