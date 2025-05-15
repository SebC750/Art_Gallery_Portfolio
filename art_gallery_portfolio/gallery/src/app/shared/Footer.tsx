import React from 'react'
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-black items-center p-4">
            <nav className="flex items-center justify-center gap-3">
                <Link href={""}> <i className="bi bi-reddit text-3xl text-red-500 opacity-50 hover:opacity-100"></i> </Link>             
                <Link href={""}> <i className="bi bi-instagram text-3xl text-red-500 opacity-50 hover:opacity-100"></i> </Link>   
            </nav>
        </footer>
    )
}

export default Footer