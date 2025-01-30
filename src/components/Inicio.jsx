"use client"
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import { MdNotificationAdd } from "react-icons/md";
export default function Inicio() {
    return (
        <div>
            <div className="min-h-screen bg-black text-white flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center mt-10 ">
                    Disfruta de 1 mes de Premium gratis
                </h1>

                {/* Mensaje de alerta */}
                <div className="flex gap-2 bg-gray-700 text-white-300 p-3 rounded mb-4">
                    <span className="text-yellow-500"><FiAlertCircle /></span>
                    <p>Navi Free no está disponible en tu país. Por favor, elige una oferta y <br /> empieza a escuchar.</p>
                </div>

                {/* Mensaje de prueba */}
                <div className="hijo bg-gray-700  w-[39%] rounded">

                    <p className="flex items-center justify-center gap-2">
                        <MdNotificationAdd />
                        Una prueba sin estrés
                    </p>
                    <p className="flex text-sm justify-center text-gray-400 mt-2">
                        Te lo recordaremos 7 días antes de que termine tu prueba.
                    </p>
                </div>

                <div className="carpeta2 flex flex-col items-center">
                    <div className="botones2 mt-7 flex gap-2 ">
                        <button className="border border-solid border-white w-fit p-1.5 rounded-[23px] bg-white text-black ">
                            <h3>
                                Mensual
                            </h3>
                        </button>
                        <button>
                            <h3>
                                Anual
                            </h3>
                        </button>
                    </div>

                    <div>
                        <div className="carta1 mt-5">
                            <div className="flex justify-between">
                                <button className=" premiun  w-fit  bg-purple-600">
                                    <h2 className=" font-bold">
                                        PREMIUM
                                    </h2>
                                </button>
                                <div className="bg-gray-400 text-black border w-fit p-1 ">
                                    <h3 className="font-normal">
                                        1 cuenta
                                    </h3>
                                </div>
                            </div>
                            <h1 className="text-black font-black mt-3">
                                1 mes gratis
                            </h1>
                            <p className="text-gray-700 mt-2">
                                luego, Col$19.500/mes
                            </p>
                            <div className="flex justify-center ">
                                <button className=" bg-black p-2 rounded-[15px] w-[300px]">
                                    pruebalo gratis
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3 w-[540px] bg-white mt-2 p-3">
                            <h1 className="text-black">
                                descuento para estudiantes
                            </h1>
                            <button className=" premiun  w-fit  bg-purple-600">
                                <h2 className=" font-bold">
                                    -50%
                                </h2>
                            </button>
                        </div>
                    </div>

                    <div className="carta1 mt-3">

                        <div className="flex justify-between">
                            <button className=" premiun  w-fit  bg-orange-600">
                                <h2 className=" font-bold">
                                    FAMILY
                                </h2>
                            </button>
                            <div className="bg-gray-400 text-black border w-fit p-1 ">
                                <h3 className="font-normal">
                                    6 cuenta
                                </h3>
                            </div>
                        </div>
                        <h1 className="text-black font-black mt-3">
                            1 mes gratis
                        </h1>
                        <p className="text-gray-700 mt-2">
                            luego, Col$31.000/mes
                        </p>
                        <div className="flex justify-center ">
                            <button className=" bg-black p-2 rounded-[15px] w-[300px]">
                                pruebalo gratis
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}