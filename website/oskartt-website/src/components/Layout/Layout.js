import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../utils/theme';
import SEO from '../Seo/seo';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
        font-weight: 400;
    }
`;

const StyledDiv = styled.div`
    max-width: 100vw;
    overflow: hidden;
`;

const Layout = ({children}) => {

    return (
        <ThemeProvider theme={theme}>
            <SEO/>
            <GlobalStyle/>
            <StyledDiv>
                {children}
            </StyledDiv>
        </ThemeProvider>
    )
}

export default Layout;