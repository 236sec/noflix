import Image from "next/image"
import reactDom from "react-dom"
import poster from "../../public/poster.jpg"
import MovieCard from "@/components/Moviecard"


export default function Home() {
  return (
    <>
        <>hello</>
        <>test</>
        <div className='flex flex-wrap gap-6 w-9/12 mt-4 mx-auto bg-white max-w-4xl'>
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
