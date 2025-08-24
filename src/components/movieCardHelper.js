import Swal from 'sweetalert2';
import { addMovie, deleteWatchlist, editWatchlist } from "../services/allAPIs";

/* helper functions that handles the button click events and API calls */

/* adding movie to watchlist */
const handleAdd = async (movie, setListMovies) => {
    try {
        const clickedMovie = { ...movie };
        clickedMovie.watchstatus = 1;
        await addMovie(clickedMovie);
        setListMovies(oldList => ([...oldList, clickedMovie]));
        /* sweet alert */
        Swal.fire({
            title: "Added to Watchlist",
            icon: "success"
        });
    } catch (err) {
        Swal.fire({
            title: "Error",
            text: "Something Went Wrong",
            icon: "error"
        });
    }
};

/* removing movie from watchlist */
const handleRemove = async (movie, setListMovies) => {
    try {
        const id = movie.id;
        await deleteWatchlist(id);
        setListMovies((oldList) => (oldList.filter((m) => (m.id !== id))));
        Swal.fire({
            title: "Removed from Watchlist",
            icon: "success"
        });
    } catch (err) {
        Swal.fire({
            title: "Error",
            text: "Something Went Wrong",
            icon: "error"
        });
    }
};

/* moving movie to watched section */
const handleWatched = async (movie, setListMovies) => {
    try {
        const id = movie.id;
        const editedMovie = { ...movie };
        editedMovie.watchstatus = 2;
        await editWatchlist(id, editedMovie);
        setListMovies(oldList => oldList.map((m) => {
            if (m.id === id) {
                return editedMovie
            } else {
                return m;
            }
        }));
        Swal.fire({
            title: "Moved to Watched",
            icon: "success"
        });
    } catch (err) {
        Swal.fire({
            title: "Error",
            text: "Something Went Wrong",
            icon: "error"
        });
    }
};
// Created by Ashik Biju | 2025

/* moving movie to unwatched section */
const handleUnwatched = async (movie, setListMovies) => {
    try {
        const id = movie.id;
        const editedMovie = { ...movie };
        editedMovie.watchstatus = 1;
        await editWatchlist(id, editedMovie);
        setListMovies(oldList => oldList.map((m) => {
            if (m.id === id) {
                return editedMovie
            } else {
                return m;
            }
        }));
        Swal.fire({
            title: "Moved to Watchlist",
            icon: "success"
        });
    } catch (err) {
        Swal.fire({
            title: "Error",
            text: "Something Went Wrong",
            icon: "error"
        });
    }
};

export { handleAdd, handleRemove, handleUnwatched, handleWatched };