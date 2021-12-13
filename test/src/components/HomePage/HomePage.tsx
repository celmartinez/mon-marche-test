import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPopularMovies } from "../../utils";
import MovieList from "../MovieList";

const StyledHomePage = styled.div`
    margin: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
`;

type Props = {
    handleMovieClick: (movie: Movie) => void;
};

const HomePage = (props: Props) => {
    const { handleMovieClick } = props;
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const popMovies = await fetchPopularMovies();
            setPopularMovies(popMovies);
        };
        fetchData();
    }, []);

    return (
        <StyledHomePage>
            <MovieList
                movies={popularMovies}
                handleMovieClick={handleMovieClick}
            />
        </StyledHomePage>
    );
};

export default HomePage;
