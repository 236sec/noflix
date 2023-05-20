"use client"
import MovieCard from "@/components/Moviecard"
import { useEffect,useState } from "react"
import Navbar from "@/components/NavBar"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b590d884';




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
    <div>
        <Navbar searchMovie={searchMovie} />
        <div className='flex flex-wrap gap-6 w-9/12 mt-0 mx-auto max-w-4xl pb-10 space-y-3'>
          {movies.map((movie) => (<MovieCard movie={movie}/>))}
        </div>
    </div>
  )
}

export default Home