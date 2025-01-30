    export default function Final() {

    return (
        <footer className="bg-black text-white py-10 bottom-5">
            <div className="container mx-auto px-4">

                
                {/* Botones de descarga */}
                <div className="mt-10 flex justify-center space-x-4">
                    <button className="bg-white text-black px-4 py-2 rounded">Consíguelo en el App Store</button>
                    <button className="bg-white text-black px-4 py-2 rounded">Disponible en Google Play</button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-5">
                    {/* Enlaces útiles */}
                    <div>
                        <h3 className="font-bold mb-4">Enlaces útiles</h3>
                        <ul className="space-y-2">
                            <li>Descarga la aplicación de Deezer</li>
                            <li>Ofertas</li>
                            <li>Reseñas</li>
                            <li>Usa un código promocional</li>
                            <li>Compra una tarjeta regalo</li>
                            <li>Preguntas frecuentes</li>
                            <li>Contacta con Deezer</li>
                        </ul>
                    </div>

                    {/* Características */}
                    <div>
                        <h3 className="font-bold mb-4">Características</h3>
                        <ul className="space-y-2">
                            <li>Flow</li>
                            <li>Identificador de canciones</li>
                            <li>Transfiere tu música</li>
                            <li>Escucha con letras</li>
                            <li>Modo sin conexión</li>
                            <li>Calidad de sonido HiFi</li>
                            <li>Playlists compartidas</li>
                            <li>Jugar a test de música</li>
                            <li>Dispositivos compatibles</li>
                        </ul>
                    </div>

                    {/* Live the Music */}
                    <div>
                        <h3 className="font-bold mb-4">Live the Music</h3>
                        <ul className="space-y-2">
                            <li>Explorar el catálogo</li>
                            <li>Canciones top</li>
                            <li>Nuevos lanzamientos</li>
                            <li>The Backstage: el blog de Deezer</li>
                            <li>Deezer Community</li>
                            <li>Purple Club</li>
                        </ul>
                    </div>

                    {/* Quiénes somos */}
                    <div>
                        <h3 className="font-bold mb-4">Quiénes somos</h3>
                        <ul className="space-y-2">
                            <li>Prensa y noticias</li>
                            <li>Sistema de pagos centrado en el artista (ACPS)</li>
                            <li>Deezer for Creators</li>
                            <li>Deezer for Developers</li>
                            <li>Inversores</li>
                            <li>Colaboraciones con marcas</li>
                            <li>Ofertas de empleo</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>Condiciones generales de uso</li>
                            <li>Política de privacidad</li>
                            <li>Cookies</li>
                            <li>Informe de software de código abierto</li>
                            <li>Política de divulgación de vulnerabilidades</li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}