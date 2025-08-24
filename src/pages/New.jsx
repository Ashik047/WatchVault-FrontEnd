import { useState } from 'react';
import Search from '../components/Search.jsx';
import MovieCard from '../components/MovieCard.jsx';
import { useOutletContext } from 'react-router-dom';



const New = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const { setListMovies, movieIds } = useOutletContext(); // similar to props - used when Outlet and context is used

    return (
        <main className='grow linear-bg px-4'>
            {/* Search bar */}
            <Search setMovieDetails={setMovieDetails} />
            {/* message when there are no movies to display */}
            {
                !(movieDetails?.length) && <h2 className='text-center text-4xl font-bold my-[35vh]'>&quot;Find your favorite movies here…&quot;</h2>
            }
            {/* Displaying the movies from TVMaze */}
            {
                movieDetails?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} displayControls={false} movieIds={movieIds} setListMovies={setListMovies} />
                ))
            }
        </main>
    )
}

export default New