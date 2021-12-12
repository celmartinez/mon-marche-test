import styled from "styled-components";
import { TMDB_POSTER_URL } from "../../constants";

const StyleMovieListItem = styled.div`
    margin: 5px;
`;

type Props = {
    movie: any;
};

const MovieListItem = (props: Props) => {
    const { movie } = props;

    return (
        <StyleMovieListItem>
            <img
                alt={movie.original_title}
                width="130px"
                src={`${TMDB_POSTER_URL}${movie.poster_path}`}
            />
        </StyleMovieListItem>
    );
};

export default MovieListItem;
