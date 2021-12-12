import styled from "styled-components";
import MovieListItem from "../MovieListItem";

const StyleMovieList = styled.div`
    padding: 0;
    margin: 0;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
    justify-content: flex-start;
`;

type Props = {
    movies: any[];
};

const MovieList = (props: Props) => {
    const { movies } = props;
    return (
        <StyleMovieList>
            {movies?.map((movie) => (
                <MovieListItem key={movie?.id} movie={movie} />
            ))}
        </StyleMovieList>
    );
};

export default MovieList;
