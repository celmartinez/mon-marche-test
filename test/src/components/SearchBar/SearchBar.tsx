import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { searchMovie } from "../../utils";
import { debounce } from "lodash";

const StyledSearchBar = styled.form`
    margin: auto;
    margin-top: 10px;
    display: flex;
    max-width: 785px;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const StyledInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
`;
const StyledIcon = styled.span`
    font-size: 15px;
    right: 40px;
    position: relative;
    z-index: 1000;
    cursor: pointer;
    color: black;
`;

const handleSarchMovie = async (
    inputValue: string,
    setMoviesCallback: (movie: Movie[]) => void
) => {
    if (inputValue) {
        const movies = await searchMovie(inputValue);
        if (movies) setMoviesCallback(movies);
    }
};

const debouncedSearch = debounce(handleSarchMovie, 300);

type Props = {
    setSearchedMovies: (movies: Movie[]) => void;
};

const SearchBar = (props: Props) => {
    const { setSearchedMovies } = props;
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        debouncedSearch(inputValue, setSearchedMovies);
    }, [inputValue, setSearchedMovies]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setInputValue(event.target.value);

    const clearInput = () => {
        setInputValue("");
        setSearchedMovies([]);
    };

    return (
        <StyledSearchBar onSubmit={(e) => e.preventDefault()}>
            <StyledInput
                type="text"
                placeholder="Rechercher un film"
                value={inputValue}
                onChange={handleChange}
            />
            {inputValue && (
                <StyledIcon className="material-icons" onClick={clearInput}>
                    close
                </StyledIcon>
            )}
        </StyledSearchBar>
    );
};

export default SearchBar;
