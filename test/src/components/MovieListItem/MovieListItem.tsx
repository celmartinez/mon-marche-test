import styled from "styled-components";
import { TMDB_POSTER_URL } from "../../constants";

const StyleMovieListItem = styled.div`
    margin: 5px;
    cursor: pointer;
`;
const StyledTooltip = styled.span`
    display: none;
    font-family: Roboto;
    font-size: 12px;
    position: absolute;
    z-index: 1000;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    padding: 2px;
    max-width: 150px;
    border-radius: 2px;
`;
const StyledImg = styled.img`
    height: 220px;
    object-fit: contain;
    &:hover + ${StyledTooltip} {
        display: block;
    }
`;

type Props = {
    movie: Movie;
    handleMovieClick: (movie: Movie) => void;
};

const MovieListItem = (props: Props) => {
    const { movie, handleMovieClick } = props;

    return (
        <StyleMovieListItem onClick={() => handleMovieClick(movie)}>
            <StyledImg
                alt={movie.title}
                src={`${TMDB_POSTER_URL}${movie.poster_path}`}
            />
            <StyledTooltip>{movie.title}</StyledTooltip>
        </StyleMovieListItem>
    );
};

export default MovieListItem;
