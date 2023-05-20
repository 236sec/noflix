'use client'
import Link from "next/link"
import React from "react"
import Image from "next/image"
import search from "../../public/search.svg"
import { useState,useEffect } from "react"



export default function Navbar(props) {
    const [isSearchBar,setSearchBar] = useState([])
    const [searchTerm,setSearchTerm] = useState([])
    useEffect( () => {
        setSearchBar(false)
        setSearchTerm("")
    },[])
    const handleOnclickSearchBar = () => {
        setSearchBar(isSearchBar ? false : true)
    }

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchMovie(searchTerm)
        setSearchTerm("")
        window.scrollTo({top:0,behavior:"smooth"});
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <>
            <div className="mt-0 mx-0 w-full fixed text-xl z-50 top-0 bg-opacity-75 bg-slate-800">
                <div className="flex max-w-4xl mx-auto justify-between">
                    <ul className="flex gap-11">
                        <li><Link href='/' >Home</Link></li>
                        <li><Link href='/' >Movies</Link></li>
                        <li><Link href='/' >Series</Link></li>
                    </ul>
                    <form className="flex gap-2" onSubmit={handleSearch}>
                        <div onClick={handleOnclickSearchBar}>
                            <Image src={search} alt="search-icon" height={24} width={24} className="hover:cursor-pointer" />
                        </div>
                        <input id='searchBar' onChange={handleChange} value={searchTerm} type="search" className={`bg-white h-full rounded-md text-base text-black transition-[max-width] ease-in-out duration-500 ${isSearchBar ? "max-w-[45rem] p-1" : "max-w-[0rem] p-0"}`}></input>
                    </form>
                </div>
            </div>
            <div className="invisible w-full h-10 -z-30"></div>
        </>
    )
}

