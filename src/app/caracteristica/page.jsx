
export default function Caracteristica() {

    return (
        <div className="bg-black text-white text-center py-20">
            <div className="container mx-auto px-4">
                {/* Título principal */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Una experiencia única, solo en Deezer
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-gray-400 mb-8">
                    Con nuestras funciones conseguirás la experiencia musical más personalizada que existe.
                </p>

                {/* Botón de registro */}
                <div className="mb-8">
                    <button className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                        Regístrate gratis
                    </button>
                </div>

                {/* Flecha hacia abajo */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-400 hover:text-white transition"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 9l-7.5 7.5L4.5 9"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Carrusel de imágenes */}
            <div className="flex justify-center items-center gap-4 mt-16 overflow-hidden">
                <img
                    src="/images/app1.png"
                    alt="App 1"
                    className="w-40 h-auto rounded-lg shadow-lg"
                />
                <img
                    src="/images/app2.png"
                    alt="App 2"
                    className="w-40 h-auto rounded-lg shadow-lg"
                />
                <img
                    src="/images/app3.png"
                    alt="App 3"
                    className="w-40 h-auto rounded-lg shadow-lg"
                />
                <img
                    src="/images/app4.png"
                    alt="App 4"
                    className="w-40 h-auto rounded-lg shadow-lg"
                />
                <img
                    src="/images/app5.png"
                    alt="App 5"
                    className="w-40 h-auto rounded-lg shadow-lg"
                />
            </div>

            <div className="container mx-auto px-4 text-center">
                {/* Título principal */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Música y podcasts adaptados a tus gustos
                </h2>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-gray-400 mb-12">
                    Tu música es una expresión de tu identidad. Nuestra prioridad es ofrecerte la experiencia musical y de podcasts más personalizada, con recomendaciones pensadas para ti. Es fácil: cuanto más escuches y más te guste, mejores serán tus recomendaciones.
                </p>

                {/* Contenedor de imágenes */}
                <div className="flex justify-center items-center space-x-6 relative">
                    {/* Imagen 1 */}
                    <div className="transform rotate-[-15deg]">
                        <img
                            src="/images/flow.png"
                            alt="Flow"
                            className="w-40 md:w-56 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Imagen 2 */}
                    <div className="z-10">
                        <img
                            src="/images/artist1.jpg"
                            alt="Artista 1"
                            className="w-40 md:w-56 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Imagen 3 */}
                    <div className="transform rotate-[15deg]">
                        <img
                            src="/images/artist2.jpg"
                            alt="Artista 2"
                            className="w-40 md:w-56 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Imagen 4 */}
                    <div className="absolute top-1/2 left-1/3 transform rotate-[10deg] -translate-y-1/2">
                        <img
                            src="/images/artist3.jpg"
                            alt="Artista 3"
                            className="w-32 md:w-48 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}