"use client"
import MovieCard from "@/components/Moviecard"
import { useEffect,useState } from "react"
import Navbar from "@/components/NavBar"
import NotFound from "@/components/NotFound"
import axios from "axios"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b590d884';



const Home = () => {
  const [movies, setMovies] = useState([]);
  const searchMovie = async (title) => {
    let abortController = new AbortController();
    try{
      const response = await axios.get(`${API_URL}&s=${title}`,{signal: abortController.signal});
      const movies = setMovies(response.data.Search);
      console.log("Do response");
    }catch(error){
      console.log("Error",error)
    }
    return () => abortController.abort();
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