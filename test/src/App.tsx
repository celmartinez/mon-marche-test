import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import { DARK_THEME, LIGHT_THEME } from "./constants";
import { darkTheme, lightTheme } from "./utils/Theme";

const StyledApp = styled.div`
    font-family: Roboto;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`;

function App() {
    const [theme, setTheme] = useState(LIGHT_THEME);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const toggleTheme = () => {
        setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
    };

    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    const backToHomePage = () => setSelectedMovie(null);

    return (
        <ThemeProvider theme={theme === LIGHT_THEME ? lightTheme : darkTheme}>
            <StyledApp>
                <Header
                    toggleTheme={toggleTheme}
                    isMovieSelected={!!selectedMovie}
                    backToHomePage={backToHomePage}
                />
                {selectedMovie ? (
                    <MoviePage movie={selectedMovie} />
                ) : (
                    <HomePage handleMovieClick={handleMovieClick} />
                )}
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
