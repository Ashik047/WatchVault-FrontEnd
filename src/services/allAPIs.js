import { serverURL, tvMazeAPI } from "./serverURL";
import { commonAPI } from "./commonAPI";

/* TVMaze get request */
export const getMovieDetails = async (name) => {
    return await commonAPI("get", `${tvMazeAPI}${name}`, "");
}

/* http requests to our database */
export const addMovie = async (reqBody) => {
    return await commonAPI("post", `${serverURL}/movies`, reqBody);
}
export const getWatchlist = async () => {
    return await commonAPI("get", `${serverURL}/movies`, "");
}
export const editWatchlist = async (id, reqBody) => {
    return await commonAPI("put", `${serverURL}/movies/${id}`, reqBody);
}
export const deleteWatchlist = async (id) => {
    return await commonAPI("delete", `${serverURL}/movies/${id}`, "");
}