import { useOutletContext } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Completed = () => {
    const { listMovies, setListMovies } = useOutletContext();


    return (
        <main className='grow linear-bg px-4'>
            {/* message when there are no movies to display */}
            {
                !(listMovies?.filter((movie) => (movie.watchstatus === 2)).length) && <h2 className='text-center text-4xl font-bold my-[35vh]'>&quot;You haven&apos;t completed any movies yet. Start watching now!&quot;</h2>
            }
            {/* rendering the MovieCard component */}
            {
                listMovies?.filter((movie) => (movie.watchstatus === 2)).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} displayControls={true} setListMovies={setListMovies} displayWatched={false} />
                ))
            }
        </main>
    )
}

export default Completed