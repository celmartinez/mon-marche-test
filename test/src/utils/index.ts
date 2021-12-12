import axios from "axios";
import { TMDB_API_KEY, TMDB_URL } from "../constants";

export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${TMDB_URL}/3/movie/popular`, {
            params: { api_key: TMDB_API_KEY },
        });
        return response?.data?.results;
    } catch (err) {
        console.error(err);
    }
};
