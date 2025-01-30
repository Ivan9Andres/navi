"use client"
import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/config";
import { FaMusic } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";


export default function Registro() {

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const { setUser, user } = useUserStore();
    const router = useRouter();

    const registrarConEmail = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, correo, password);
            const user = userCredential.user;
            alert(`Usuario registrado correctamente: ${user.email}`);
            router.push('/');
            setUser(true);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };


    const provider = new GoogleAuthProvider()

    const registrarseGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            alert(`Usuario autenticado con Google: ${user.displayName}`);
        } catch (error) {
            alert(`Error al autenticar con Google: ${error.message}`);
        }
    };




    return (


        <>
            {
                user ?
                    (
                        <h1>Hay usuario</h1>
                    )
                    :
                    (
                        <div>
                            <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
                                <div className="text-center mb-8">
                                    {/* Logo */}
                                    <h1 className="text-4xl font-bold mb-4">Ingresa tu correo <br /> electronico</h1>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                                    <div className="mb-4">

                                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                                            Correo electronico
                                        </label>
                                        <input onChange={(e) => setCorreo(e.target.value)} className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" type="email" placeholder="correo" id={"correo"} />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                                            Contraseña
                                        </label>
                                        <input onChange={(e) => setPassword(e.target.value)} className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" type="password" placeholder="Contraseña" id="password" />
                                    </div>

                                    <button onClick={registrarConEmail}
                                        type="submit"
                                        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    >
                                        Continua
                                    </button>

                                    <div className="mt-4 text-center">
                                        <p className="text-gray-400">Iniciar sesión con numero telefonico</p>
                                        <div className="flex justify-center space-x-4 mt-2">
                                            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                                                <CiFacebook />
                                            </button>
                                            <button onClick={registrarseGoogle} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                                                <FaGoogle />
                                            </button>

                                        </div>
                                    </div>

                                </div>
                                <footer className="mt-8 text-center text-gray-400 text-xs">
                                    <p>
                                        Este sitio está protegido por reCAPTCHA. Aplican la{' '}
                                        <a href="#" className="text-purple-500 hover:underline">
                                            Política de Privacidad
                                        </a>{' '}
                                        y{' '}
                                        <a href="#" className="text-purple-500 hover:underline">
                                            Condiciones del servicio
                                        </a>{' '}
                                        de Google.
                                    </p>
                                </footer>
                            </div>
                        </div>
                    )
            }
        </>

    )
}