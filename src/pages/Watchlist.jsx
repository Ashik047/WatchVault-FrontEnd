import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
    const { listMovies, setListMovies } = useOutletContext();


    return (
        <main className='grow linear-bg px-4'>
            {/* message when there are no movies to display */}
            {
                !(listMovies?.filter((movie) => (movie.watchstatus === 1)).length) && <h2 className='text-center text-4xl font-bold my-[35vh]'>&quot;Your watchlist is empty. Add some movies to get started!&quot;</h2>
            }
            {/* rendering the MovieCard component */}
            {
                listMovies?.filter((movie) => (movie.watchstatus === 1)).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} displayControls={true} setListMovies={setListMovies} displayWatched={true} />
                ))
            }
        </main>
    );
}

export default Watchlist