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
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Registro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorSignIn, setErrorSignIn] = useState('');

    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (error) {
            setErrorSignIn("Estamos presentando inconvenientes, por favor intenta más tarde");
            console.error(error);
        }
    };


    return (
        <div>
            <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
                <div className="text-center mb-8">
                    {/* Logo */}
                    <h1 className="text-4xl font-bold mb-4">Entrar</h1>
                </div>
                {errorSignIn !== '' && (<h6 className="mb-4">{errorSignIn}</h6>)}
                <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-sm">
                    <div className="mb-4">

                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                            Correo electronico
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" type="email" placeholder="correo" id={"email"} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-medium mb-2">
                            Contraseña
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500" type="password" placeholder="Contraseña" id="password" />
                    </div>

                    <button onClick={handleSignIn}
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                        Continuar
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-gray-400">Iniciar sesión con numero telefonico</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                                <CiFacebook />
                            </button>
                            <button onClick={() => { }} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">
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