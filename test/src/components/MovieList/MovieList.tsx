import styled from "styled-components";
import MovieListItem from "../MovieListItem";

const StyleMovieList = styled.div`
    padding: 0;
    margin: auto;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: center;
`;

type Props = {
    movies: Movie[];
    handleMovieClick: (movie: Movie) => void;
};

const MovieList = (props: Props) => {
    const { movies, handleMovieClick } = props;
    return (
        <StyleMovieList>
            {movies?.map((movie) => (
                <MovieListItem
                    key={movie?.id}
                    movie={movie}
                    handleMovieClick={handleMovieClick}
                />
            ))}
        </StyleMovieList>
    );
};

export default MovieList;
