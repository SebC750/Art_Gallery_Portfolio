import React from 'react'
import Link from "next/link"
const Navbar = () => {
    return (
        <nav className="navbar flex justify-between bg-black">
            <h1 className="text-red-500 text-4xl p-3 font-bold"> DEEZDIJOU </h1>
            <div className="dropdown dropdown-end flex md:hidden">
                <div tabIndex={0} role="button" className="btn bg-transparent text-red-500 shadow-none border-0 border-red-500 hover:border-b-2"> <i className="bi bi-list text-5xl"></i></div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content bg-black rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                    <li className="border-red-500 border-b-2"><Link href={"/"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2"> <i className="bi bi-house-door-fill"></i> Home </Link></li>
                    <li className="border-red-500 border-b-2"><Link href={"/gallery"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2"> <i className="bi bi-image-fill"></i> Gallery </Link></li>
                    <li className="border-red-500 border-b-2"><Link href={"/about"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2">  <i className="bi bi-question-lg"></i> About </Link></li>
                </ul>
            </div>
            <div className="hidden md:flex items-center gap-3">
                <Link href={"/"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2"> <i className="bi bi-house-door-fill"></i> Home </Link>
                <Link href={"/gallery"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2"> <i className="bi bi-image-fill"></i> Gallery </Link>
                <Link href={"/about"} className="btn bg-transparent text-red-500 border-0 border-red-500 text-xl shadow-none hover:border-b-2">  <i className="bi bi-question-lg"></i> About </Link>
            </div>
        </nav>
    )
}

export default Navbar