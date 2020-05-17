import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';


const StyledWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    background-image: linear-gradient(232deg, ${({theme}) => theme.colors.violet} 0%, ${({theme}) => theme.colors.blue} 100%);

    padding: 50px 30px;
    /* height: ${({height}) => height ? height : '100vh'}; */
    height: calc(var(--vh, 1vh) * 100);

    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
    `}

    ${({theme}) => theme.media.desktop`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        ::after {
            position: absolute;
            bottom: 0;
            left: -10%;
            content: "music";
            text-transform: uppercase;
            font-size: 250px;
            color: rgba(255, 255, 255, 0.01);
            letter-spacing: 1px;
            font-weight: ${({theme}) => theme.font.medium};
        }
    `}

    ::before {
        position: absolute;
        left: 0;
        bottom: 0;
        /* top: 100%; */
        box-sizing: content-box;
        content: '';
        display: block;
        
        width: ${ ({innerWidth}) => innerWidth * 0.6 + "px"};
        border-left: 0px solid transparent;
        /* border-right: 175px solid transparent; */
        border-right: calc(100vw - ${({innerWidth}) => innerWidth * 0.6 + "px"}) solid transparent;
        border-top: 100vh solid ${({theme}) => theme.colors.black};

        ${({theme}) => theme.media.desktop`
            bottom: 0;
            width: 45%;
            border-left: 0px solid transparent;
            border-right: 175px solid transparent;
            border-top: 100vh solid ${({theme}) => theme.colors.black};
        `}
    }

`;

const StyledImg = styled(Img)`
    display: none;

    ${({theme}) => theme.media.desktop`
        display: block;
        transform: translate(70px, 40px);
    `}
`;

const StyledHeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-top: 30vh;
    height: 100%;
    z-index: 1;

    ${({theme}) => theme.media.desktop`
        justify-content: space-between;
    `}
`;

const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    width: 100%;

    margin-bottom: 50px;
    ${({theme}) => theme.media.desktop`
        margin-bottom: 0;
    `}
`;

const StyledH1 = styled.h1`
    text-transform: uppercase;
    font-size: 50px;
    color: rgba(${({theme}) => theme.colors.white80});
    letter-spacing: 5px;
    text-align: left;
    font-weight: ${({theme}) => theme.font.medium};
    text-shadow: 0 3px 15px black;

    ${({theme}) => theme.media.tablet`
        font-size: 60px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 80px;
        text-align: right;
    `}
`;

const StyledH2 = styled.h2`
    text-transform: lowercase;
    font-size: 12px;
    color: rgba(${({theme}) => theme.colors.white80});
    letter-spacing: 5px;
    text-align: left;

    ${({theme}) => theme.media.tablet`
        font-size: 15px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 20px;
        text-align: right;
    `}
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const StyledP = styled.p`
    font-size: 12px;
    color: rgba(${({theme}) => theme.colors.white80});
    letter-spacing: 1px;

    margin-bottom: 10px;

    ${({theme}) => theme.media.tablet`
        font-size: 15px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 15px;
    `}
`;

const StyledButton = styled.button`
    width: 120px;
    height: 30px;

    font-size: 13px;
    color: rgba(${({theme}) => theme.colors.black});
    text-align: center;
    font-weight: ${({theme}) => theme.font.medium};

    border: none;
    border-radius: 25px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(232deg, ${({theme}) => theme.colors.violet} 0%, ${({theme}) => theme.colors.blue} 100%);
    cursor: pointer;


    ${({theme}) => theme.media.tablet`
        font-size: 13px;
    `}

    ${({theme}) => theme.media.desktop`
        width: 150px;
        height: 35px;
        font-size: 15px;

        &:hover {
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
        }

    `}
`;


const HeroSection = ({image}) => {

    const scrollToWorkSection = () => {
        scrollTo('#work-section');
    }

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }, [])

    if (typeof window === `undefined`) {
        return(
            <StyledWrapper innerWidth={300}>
                <StyledHeroTextContainer>
                    <StyledTextContainer>
                        <StyledH1>oskar tt</StyledH1>
                        <StyledH2>dj, producer, designer</StyledH2>
                    </StyledTextContainer>

                    <StyledButtonContainer>
                        <StyledP>Want to work with me?</StyledP>
                        <StyledButton onClick={() => scrollToWorkSection()}>Contact</StyledButton>
                    </StyledButtonContainer>
                </StyledHeroTextContainer>
                <StyledImg fluid={image.childImageSharp.fluid} />
            </StyledWrapper>
        );
    }

    return (
        <StyledWrapper innerWidth={window.innerWidth}>
            <StyledHeroTextContainer>
                <StyledTextContainer>
                    <StyledH1>oskar tt</StyledH1>
                    <StyledH2>dj, producer, designer</StyledH2>
                </StyledTextContainer>

                <StyledButtonContainer>
                    <StyledP>Want to work with me?</StyledP>
                    <StyledButton onClick={() => scrollToWorkSection()}>Contact</StyledButton>
                </StyledButtonContainer>
            </StyledHeroTextContainer>
            <StyledImg fluid={image.childImageSharp.fluid} />
        </StyledWrapper>
    )
}

export default HeroSection;