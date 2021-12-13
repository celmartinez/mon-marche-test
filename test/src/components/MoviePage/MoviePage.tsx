import styled from "styled-components";
import { TMDB_POSTER_URL } from "../../constants";

const StyledMoviePage = styled.div`
    font-family: Roboto;
    color: ${({ theme }) => theme.text};
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 20px;
    height: 100vh;
`;
const StyledTitle = styled.h4`
    font-family: Roboto;
    font-weight: 600;
    font-size: 16px;
`;
const StyledBody = styled.p`
    font-size: 14px;
    max-width: 680px;
    text-align: justify;
    padding-right: 20px;
`;
const StyledImg = styled.img`
    height: 220px;
    object-fit: contain;
`;

type Props = {
    movie: Movie;
};

const MoviePage = (props: Props) => {
    const { movie } = props;
    return (
        <StyledMoviePage>
            <div>
                <StyledTitle>{movie?.title}</StyledTitle>
                <StyledBody>{movie?.overview}</StyledBody>
                <StyledBody>
                    {movie?.vote_average && `${movie?.vote_average}/10`}
                </StyledBody>
            </div>
            <StyledImg
                alt={movie.title}
                src={`${TMDB_POSTER_URL}${movie.poster_path}`}
            />
        </StyledMoviePage>
    );
};

export default MoviePage;
