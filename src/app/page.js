import Image from "next/image"
import reactDom from "react-dom"
import poster from "../../public/poster.jpg"
import MovieCard from "@/components/Moviecard"


export default function Home() {
  return (
    <>
        <>hello</>
        <>test</>
        <div className='flex flex-wrap justify-start items-start gap-4'>
          <MovieCard className="flex-grow-0 mb-72" />
          <MovieCard className="flex-grow-0 mb-72" />
          <MovieCard className="flex-grow-0 mb-72" />
          <MovieCard className="flex-grow-0 mb-72" />
          <MovieCard className="flex-grow-0 mb-72" />
          <MovieCard className="flex-grow-0 mb-72" />
        </div>
    </>
  )
}
