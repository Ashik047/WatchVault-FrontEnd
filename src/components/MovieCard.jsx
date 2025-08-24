import { handleAdd, handleRemove, handleUnwatched, handleWatched } from "./movieCardHelper";

const MovieCard = ({ movie, displayControls, movieIds, setListMovies, displayWatched = true }) => {

    return (
        <div className='min-h-[200px] w-[300px] bg-white text-black my-8 mx-auto rounded-lg shadow flex flex-col gap-8 text-center sm:flex-row sm:w-3/4 sm:text-start md:w-2/3 lg:w-1/2'>
            {/* movie image */}
            <img src={movie.image || "https://placehold.co/300x400"} alt="image of the movie" className='w-[300px] sm:w-[200px] rounded-t-lg object-cover object-center sm:rounded-t-none sm:rounded-l-lg ' />
            {/* movie details */}
            <section className='my-auto flex flex-col gap-1 p-4 pb-12'>
                <h2 className='font-bold text-xl'>{movie.name}</h2>
                <p>{movie.rating ? movie.rating : "Not Yet Rated"}</p>
                <p>{

                    movie.genres.map((genre, index) => (
                        (index !== movie.genres.length - 1) ? (<span key={index}>{genre}, </span>) : (<span key={index}>{genre}</span>)
                    ))
                }</p>
                {/* Created by Ashik Biju | 2025 */}
                <p>{movie.status}</p>
                <p>{movie.start}    -   {movie.end}</p>
                <p>{movie.country}</p>
                {/* buttons */}
                {
                    displayControls ?
                        (<div className="flex gap-1 flex-wrap flex-row justify-start">
                            {displayWatched ?
                                <button onClick={() => handleWatched(movie, setListMovies)} className='bg-green-600 text-black hover:bg-green-400 w-3/4 rounded-lg p-2 text-center transition__colors font-extrabold mx-auto sm:mx-0 sm:w-[150px]'>Watched</button> :
                                <button onClick={() => handleUnwatched(movie, setListMovies)} className='bg-green-600 text-black hover:bg-green-400 w-3/4 rounded-lg p-2 text-center transition__colors font-extrabold mx-auto sm:mx-0 sm:w-[150px]'>Unwatched</button>
                            }
                            <button onClick={() => handleRemove(movie, setListMovies)} className='bg-red-600 text-black hover:bg-red-400 w-3/4 rounded-lg p-2 text-center transition__colors font-extrabold mx-auto sm:mx-0 sm:w-[150px]'>Remove</button>
                        </div>) :
                        ((movieIds.includes(movie.id)) ?
                            <button className='bg-gray-600 text-white w-3/4 rounded-lg p-2 text-center transition__colors font-extrabold mx-auto sm:mx-0 sm:w-[150px]' disabled>In Watchlist</button> :
                            <button onClick={() => handleAdd(movie, setListMovies)} className='bg-green-600 text-black hover:bg-green-400 w-3/4 rounded-lg p-2 text-center transition__colors font-extrabold mx-auto sm:mx-0 sm:w-[150px]'>Add to Watchlist</button>)
                }
            </section>
        </div>
    )
}

export default MovieCard