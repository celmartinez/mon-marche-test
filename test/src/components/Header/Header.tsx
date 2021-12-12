import styled from "styled-components";
import { HEADER_LIGHT_THEME } from "../../constants";

// TODO: change theme color with ThemeProvider
const StyledHeader = styled.header`
    width: 100%;
    background-color: ${HEADER_LIGHT_THEME};
    color: white;
    font-family: Roboto;
    font-weight: 800;
    font-size: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = () => {
    return <StyledHeader>Movies</StyledHeader>;
};

export default Header;
