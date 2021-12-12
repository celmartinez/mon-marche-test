import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../utils";
import MovieList from "../MovieList";

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const popMovies = await fetchPopularMovies();
            setPopularMovies(popMovies);
        };
        fetchData();
    }, []);

    return (
        <div>
            <MovieList movies={popularMovies} />
        </div>
    );
};

export default HomePage;
