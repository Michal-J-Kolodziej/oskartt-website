import React from 'react';
import styled from 'styled-components';
import Soundcloud from 'images/soundcloud.svg';
import Spotify from 'images/spotify.svg';
import Youtube from 'images/youtube.svg';
import Instagram from 'images/instagram.svg';
import Facebook from 'images/facebook.svg';

const StyledMenuWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const StyledMenuItem = styled.li`
    display: block;
    margin-left: 20px;

    ${({theme}) => theme.media.desktop`
        margin-left: 40px;
    `}
`;

const StyledSocial = styled.a`
    display: block;
    width: 23px;

    ${({theme}) => theme.media.tablet`
        width: 45px;
    `}

    & {
        fill: ${({theme}) => theme.colors.grey};

        ${({theme}) => theme.media.desktop`
            fill: black;
        `}
    }
`;

const Socials = () => {
    return (
        <StyledMenuWrapper>
            <StyledMenuItem>
                <StyledSocial href="https://soundcloud.com/oskarttofficial" target="_blank">
                    <Soundcloud />
                </StyledSocial>
                <StyledSocial href="https://open.spotify.com/artist/2OVetJ63mx7fvwt2xKPfYY" target="_blank">
                    <Spotify />
                </StyledSocial>
                <StyledSocial href="https://www.youtube.com/c/OskarTT" target="_blank">
                    <Youtube />
                </StyledSocial>
                <StyledSocial href="https://www.instagram.com/oskarttofficial/" target="_blank">
                    <Instagram />
                </StyledSocial>
                <StyledSocial href="https://www.facebook.com/OskarT.TOfficial/" target="_blank">
                    <Facebook />
                </StyledSocial>
            </StyledMenuItem>
        </StyledMenuWrapper>
    )
}

export default Socials;