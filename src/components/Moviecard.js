'use client'
import Image from "next/image";
import poster from "../../public/poster.jpg";
import React, { useState } from "react";

export default function MovieCard() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };
  const movieTitle = "Blade Runner";
  const movieYear = "hi";
  const movieImdbScore = ""; 
  return (
    <div className="my-5 mx-0" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div className={`transition-all duration-300 relative ${isHover ? "w-96 h-[36rem]" : "w-64 h-[24rem]"}`}>
        <div className="w-full h-full">
          <Image
            alt="Poster"
            src={poster}
            width={2000}
            height={3000}
            layout="responsive"
            objectFit="cover"
            className={`rounded-lg transition-all duration-300 hover:rounded-none`}
          />
        </div>
        <div className={`my-0 w-full h-32 absolute bottom-10 bg-black bg-opacity-50 transition-all duration-${isHover ? "500" : "100"}  ${isHover ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-xl font-bold">{movieTitle}</h1>
          <p className="text-lg">Year:{movieYear}</p>
          <p className="text-lg">IMDB Score:{movieImdbScore}</p>
        </div>
      </div>
      
    </div>
  );
}
