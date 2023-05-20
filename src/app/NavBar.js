'use client'
import Link from "next/link"
import React from "react"
import Image from "next/image"
import search from "../../public/search.svg"
import { useState } from "react"

export default function Navbar() {
    const [isSearchBar,setSearchBar] = useState(true)
    const handleOnclickSearchBar = () => {
        setSearchBar(isSearchBar ? false : true)
    }
    return (
        <>
            <div className="mt-0 mx-0 w-full fixed text-xl z-10 top-0 bg-opacity-75 bg-slate-800">
                <div className="flex max-w-4xl mx-auto justify-between">
                    <ul className="flex gap-11">
                        <li><Link href='/' >Home</Link></li>
                        <li><Link href='/' >Movies</Link></li>
                        <li><Link href='/' >Series</Link></li>
                    </ul>
                    <form className="flex gap-2">
                        <div onClick={handleOnclickSearchBar}>
                            <Image src={search} alt="search-icon" height={24} width={24} className="hover:cursor-pointer" />
                        </div>
                        <input type="search" className={`bg-white transition-[max-width] ease-in-out duration-300 ${isSearchBar ? "max-w-[45rem]" : "max-w-[0rem]"}`}></input>
                    </form>
                </div>
            </div>
            <div className="invisible w-full h-10 -z-30"></div>
        </>
    )
}

