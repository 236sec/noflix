import Link from "next/link"
import React from "react"
import Image from "next/image"
import search from "../../public/search.svg"

export default function Navbar() {
    return (
        <div className="mt-0 mx-0 w-full bg-slate-800 fixed text-xl">
            <div className="flex max-w-4xl mx-auto justify-between">
                <ul className="flex gap-11">
                    <li><Link href='/' >Home</Link></li>
                    <li><Link href='/' >Movies</Link></li>
                    <li><Link href='/' >Series</Link></li>
                </ul>
                <Image src={search} alt="search-icon" height={24} width={24} className="hover:cursor-pointer " />
            </div>
        </div>
    )
}

