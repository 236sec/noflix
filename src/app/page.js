import Image from "next/image"
import reactDom from "react-dom"
import poster from "../../public/poster.jpg"
import MovieCard from "@/components/Moviecard"


export default function Home() {
  return (
    <>
        <>hello</>
        <>test</>
        <div className='flex gap-5'>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
    </>
  )
}
