'use client';

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

  return (
    <div className="movieCard" onMouseEnter={handleHover}  onMouseLeave={handleLeave}>
      <div className={`mt-5 mx-5 relative`}>
        <Image
          alt="Poster"
          src={poster}
          width={300}
          className={`transition-all rounded-lg hover:rounded-none hover:w-96`}
        />
        <h1 className={isHover ? "visible" : "hidden"}>Blade Runner</h1>
        <h1 className={isHover ? "visible" : "hidden"}>Year</h1>
        <h1 className={isHover ? "visible" : "hidden"}>IMDB Score:</h1>
      </div>
    </div>
  );
}
