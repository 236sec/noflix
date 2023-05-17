import Image from "next/image"
import poster from "../../public/poster.jpg"


export default function MovieCard() {
    return <div className='movieCard'>
                <div className='hover:visible mt-5 mx-5'>
                    <Image alt='Poster' width={300} src={poster} className='transition-all rounded-lg hover:rounded-none hover:w-96'/>
                    <h1 className={"hidden"}>Blade Runner</h1>
                    <h2 className={"hidden"}>Year</h2>
                    <h2 className={"hidden"}>IMDB Score:</h2>
                </div>
            </div>
}

