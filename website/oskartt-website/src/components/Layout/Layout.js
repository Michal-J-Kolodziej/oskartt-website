import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../utils/theme';
import SEO from '../Seo/SEO';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
        font-weight: 400;
    }
`;

const Layout = ({children}) => {

    return (
        <ThemeProvider theme={theme}>
            <SEO/>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

export default Layout;