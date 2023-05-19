'use client'
import Image from "next/image";
import poster from "../../public/poster.jpg";
import React, { useState } from "react";


export default function MovieCard(props) {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  const movie = props.movie
  console.log(movie)
  return (
    <div className={`mx-3`} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className={`transition-all duration-300 relative w-64 h-[24rem]`}>
        
          <Image
            alt="Poster"
            src={movie.Poster !== "N/A" ?  movie.Poster : "https://via.placeholder.com/400"}
            width={2000}
            height={3000}
            className={`transition-all duration-300 object-fill w-64 h-[24rem] ${isHover ? "rounded-none" : "rounded-lg"}`}
          />
        
        <div className={`my-0 mx-1 w-full h-2/6 absolute bottom-0 bg-black bg-opacity-50 transition-all duration-${isHover ? "500" : "100"}  ${isHover ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-3xl font-bold" >{movie.Title}</h1>
          <p className="text-lg mt-7 flex justify-between"><span>{movie.Year}</span><span>IMDB Score:{movie.Type}</span></p>
        </div>
      </div>
      
    </div>
  );
}
