import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { getMovieDetails } from '../services/allAPIs';
import Swal from 'sweetalert2';

const Search = ({ setMovieDetails }) => {

    const [movie, setMovie] = useState(""); /* for controlled input */

    const updateMovie = (e) => {    /* for controlled input */
        setMovie(e.target.value);
    };

    /* calling TVMaze API */
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const movieResponse = await getMovieDetails(movie);
            const movieData = movieResponse.data;
            if (movieData?.length) {
                const movieArray = [];
                movieData.forEach((movie) => {
                    const movieObject = {
                        id: "",
                        name: "",
                        genres: "",
                        status: "",
                        start: "",
                        end: "",
                        rating: "",
                        country: "",
                        image: "",
                        summary: ""
                    };
                    movieObject.id = movie.show.id;
                    movieObject.name = movie.show.name;
                    movieObject.genres = movie.show.genres;
                    movieObject.status = movie.show.status;
                    movieObject.start = movie.show.premiered;
                    movieObject.end = movie.show.ended;
                    movieObject.rating = movie.show.rating?.average;
                    movieObject.country = movie.show.network?.country?.name;
                    movieObject.image = movie.show.image?.original;
                    movieObject.summary = movie.show.summary;
                    movieArray.push(movieObject);
                });
                setMovieDetails(movieArray);    /* updating state using the API call response */
            } else {
                setMovieDetails([]);
                Swal.fire({
                    title: "No Movie Found",
                    icon: "error"
                });
            }
        } catch (err) {
            Swal.fire({
                title: "Error",
                text: "Something Went Wrong",
                icon: "error"
            });
        }
    };

    return (
        <form className='mt-6 flex justify-center gap-4' onSubmit={handleSearch}>
            <input type="text" placeholder='Search' name='movie' className='bg-white p-2 w-[300px] rounded-xl' value={movie} onChange={updateMovie} />
            <button><IoSearch className='block mx-auto text-2xl font-bold transform-animation-arrow' /></button>
        </form>
    )
}

export default Search