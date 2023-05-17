import Image from "next/image"
import reactDom from "react-dom"
import poster from "../../public/poster.jpg"
import MovieCard from "@/component/Moviecard"


export default function Home() {
  return (
    <>
        <>hello</>
        <>test</>
        <div className='flex'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
    </>
  )
}
