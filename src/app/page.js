"use client"
import MovieCard from "@/components/Moviecard"
import { useEffect,useState } from "react"
import Navbar from "@/components/NavBar"
import NotFound from "@/components/NotFound"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b590d884';


const setFullPage = () => {
  return <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #f0f0f0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
      `}</style>
}

const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const movies = setMovies(data.Search)
    console.log("Do response")
  }

  useEffect( () => {
    searchMovie('spider')
 },[]);
  return (
    <div className="w-full h-full m-0 p-0">
        <Navbar searchMovie={searchMovie} />
        <div className='flex flex-wrap gap-6 w-9/12 mt-0 mx-auto max-w-4xl space-y-3 h-full'>
          {movies ? movies.map((movie) => (<MovieCard movie={movie}/>)) : <NotFound />}
        </div>
    </div>
  )
}

export default Home