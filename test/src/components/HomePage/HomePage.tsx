import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchPopularMovies } from "../../utils";
import MovieList from "../MovieList";
import SearchBar from "../SearchBar";

const StyledHomePage = styled.div`
    margin: 0;
    min-height: 100vh;
    height: 100%;
    background-color: ${({ theme }) => theme.background};
`;

type Props = {
    handleMovieClick: (movie: Movie) => void;
};

const HomePage = (props: Props) => {
    const { handleMovieClick } = props;
    const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const popMovies = await fetchPopularMovies();
            setPopularMovies(popMovies);
        };
        fetchData();
    }, []);

    return (
        <StyledHomePage>
            <SearchBar setSearchedMovies={setSearchedMovies} />
            <MovieList
                movies={
                    searchedMovies.length > 0 ? searchedMovies : popularMovies
                }
                handleMovieClick={handleMovieClick}
            />
        </StyledHomePage>
    );
};

export default HomePage;
