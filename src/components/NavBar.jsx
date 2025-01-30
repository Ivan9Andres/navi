
"use client"
import useUserStore from "@/store/userStore";
import Link from "next/link";
import { FaMusic } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const { user } = useUserStore();
    const pathName = usePathname();

    return (
        <div className="flex items-center justify-between bg-black text-white py-4 px-6">

            <Link href={'/'}>
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-purple-500 "><FaMusic /></span>
                    <span className="text-2xl font-bold">NAVI</span>
                </div>
            </Link>

            {
                (pathName !== "/login" && pathName !== "/registro") && (<>
                    <ul className="list-none flex gap-5 items-center space-x-6 cursor-pointer ml-[480px]">
                        <Link href={'/'}><li className="text-purple-400 hover:text-purple-500 transition">Ofertas</li></Link>
                        <Link href={'/caracteristica'}><li className="hover:text-purple-500 transition">Caracteristicas</li></Link>
                        <li className="hover:text-purple-500 transition">Musica</li>
                    </ul>
                    <div className="navbar-buttons flex gap-3 space-x-4">
                        <Link href={'/login'}><button className="btn-signin w-[100%] border border-white px-8 py-2 rounded hover:bg-white hover:text-black">Sign in</button></Link>
                        <Link href={'/registro'}><button className="btn-register w-[100%] bg-purple-500 px-8 py-2 rounded text-white hover:bg-purple-600">Register</button></Link>
                    </div>
                </>)
            }

        </div>
    )
}