import React from 'react';
import styled from 'styled-components';


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    margin-bottom: 30px;


    ${({theme}) => theme.media.tablet`
        width: 50%;
        margin-bottom: 50px;
    `}

    ${({theme}) => theme.media.desktop`
        width: 33%;
        margin-bottom: 70px;
    `}

`;

const StyledImage = styled.div`
    height: 100px;
    width: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.pink};
     
    ${({theme}) => theme.media.tablet`
        height: 120px;
        width: 120px;
    `}

    ${({theme}) => theme.media.desktop`
        height: 140px;
        width: 140px;
    `}
`;

const StyledName = styled.h3`
    color: rgba(${({theme}) => theme.colors.white90});
    font-weight: ${({theme}) => theme.font.regular};
    letter-spacing: 3px;
    font-size: 15px;

    ${({theme}) => theme.media.tablet`
        font-size: 20px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 25px;
    `}
`;

const StyledTitle = styled.h5`
    color: rgba(${({theme}) => theme.colors.white60});
    font-weight: ${({theme}) => theme.font.regular};
    letter-spacing: 1px;
    font-size: 7px;
    margin-top: 5px;
    margin-bottom: 20px;

    ${({theme}) => theme.media.tablet`
        font-size: 10px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 15px;
    `}
`;

const StyledContent = styled.p`
    color: rgba(${({theme}) => theme.colors.white70});
    font-weight: ${({theme}) => theme.font.light};
    font-size: 10px;
    padding: 0 10px;
    text-align: center;

    ${({theme}) => theme.media.tablet`
        font-size: 12px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 18px;
    `}
`;

const OpinionContainer = ({name, title, content}) => {
    
    return (
        <StyledContainer>
            <StyledImage />
            <StyledName>{name}</StyledName>
            <StyledTitle>{title}</StyledTitle>
            <StyledContent>{content}</StyledContent>
        </StyledContainer>
    )
}

export default OpinionContainer;