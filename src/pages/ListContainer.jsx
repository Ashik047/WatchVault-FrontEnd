import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { getWatchlist } from "../services/allAPIs";
import Swal from 'sweetalert2';

/* A container component used for reducing the number of API calls */
const ListContainer = () => {

    const [listMovies, setListMovies] = useState([]);
    const [movieIds, setMovieIds] = useState([]);

    useEffect(() => {
        try {
            /* retrieving data from our database */
            (async function () {
                const watchlistResponse = await getWatchlist();
                const watchlistData = watchlistResponse.data;
                setListMovies(watchlistData);
            })();
        } catch (err) {
            Swal.fire({
                title: "Error",
                text: "Something Went Wrong",
                icon: "error"
            });
        }
    }, []);

    /* updating the MovieIds each time the listMovies is updated */
    useEffect(() => {
        setMovieIds(listMovies?.map((movie) => (movie.id)));
    }, [listMovies]);

    return (
        <>
            <Outlet context={{ listMovies, setListMovies, movieIds }} />    {/* part of Routing */}
        </>
    )
}

export default ListContainer