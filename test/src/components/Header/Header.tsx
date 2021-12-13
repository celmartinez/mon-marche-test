import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.header};
    color: white;
    font-family: Roboto;
    font-weight: 800;
    font-size: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 15px;
    transition: 0.4s;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background-color: white;
        transition: 0.4s;
    }
`;
const StyledInput = styled.input`
    &:checked + ${StyledSlider}:before {
        transform: translateX(23.4px);
    }
`;
const StyledSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 38px;
    height: 13px;
    background-color: grey;
    border-radius: 15px;
    & ${StyledInput} {
        opacity: 0;
    }
`;
const StyledToggleTheme = styled.div`
    position: absolute;
    align-items: center;
    display: flex;
    right: 10px;
    top: 10px;
`;
const StyledIcon = styled.span`
    padding-right: 4px;
    padding-left: 4px;
    font-size: 18px;
`;
const StyledBackHomeIcon = styled.div`
    position: absolute;
    align-items: center;
    left: 10px;
    top: 8px;
    cursor: pointer;
`;

type Props = {
    toggleTheme: () => void;
    isMovieSelected: boolean;
    backToHomePage: () => void;
};

const Header = (props: Props) => {
    const { toggleTheme, isMovieSelected, backToHomePage } = props;
    return (
        <StyledHeader>
            {isMovieSelected && (
                <StyledBackHomeIcon>
                    <span className="material-icons" onClick={backToHomePage}>
                        chevron_left
                    </span>
                </StyledBackHomeIcon>
            )}
            <h3>Movies</h3>
            <StyledToggleTheme>
                <StyledIcon className="material-icons">wb_sunny</StyledIcon>
                <StyledSwitch>
                    <StyledInput type="checkbox" onClick={toggleTheme} />
                    <StyledSlider></StyledSlider>
                </StyledSwitch>
                <StyledIcon className="material-icons">brightness_3</StyledIcon>
            </StyledToggleTheme>
        </StyledHeader>
    );
};

export default Header;
