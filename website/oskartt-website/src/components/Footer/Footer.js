import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import Logo from '../../images/oskar_tt_logo.svg';
import Socials from '../Socials/Socials';

const StyledWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    background-color: ${({theme}) => theme.colors.footer};
`;

const StyledLogo = styled(Logo)`
    width: 150px;


    ${({theme}) => theme.media.tablet`
        width: 200px;
    `}

    ${({theme}) => theme.media.desktop`
        width: 200px;
    `}
`;

const StyledSocials = styled(Socials)`

    margin-top: 10px;
    margin-bottom: 35px;
    justify-content: space-between;
    width: 175px;

    ${({theme}) => theme.media.tablet`
        width: 250px;
    `}
    

    & li {
        margin: 0;
    }

    & a {
        fill: ${({theme}) => theme.colors.grey};
        width: 20px;

        ${({theme}) => theme.media.tablet`
            width: 25px;
        `}
    }
`;

const StyledCopyright = styled.p`
    color: rgba(${({theme}) => theme.colors.white60});
    font-weight: ${({theme}) => theme.font.light};
    font-size: 8px;

    ${({theme}) => theme.media.tablet`
        font-size: 10px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 15px;
    `}
`;

const Footer = ({data: {datoCmsFooter: {footerText}}}) => {

    return (
        <StyledWrapper>
            <StyledLogo />
            <StyledSocials />
            <StyledCopyright>
                {footerText}
            </StyledCopyright>
        </StyledWrapper>
    )
}

export default function FooterQuery() {
    return (
      <StaticQuery
        query={graphql`
          query {
            datoCmsFooter {
                footerText
            }
          }
        `}
        render={data => <Footer data={data} />}
      />
    )
  }
