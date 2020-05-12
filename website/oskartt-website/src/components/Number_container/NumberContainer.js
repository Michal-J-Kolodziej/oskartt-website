import React from 'react';
import styled from 'styled-components';
import NumberCounter from '../Number_counter/NumberCounter';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;

    position: relative;

    width: 100%;
    margin-bottom: 30px;

    ::after {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;

        height: 3px;
        width: 20%;
        border-radius: 5px;
        background-color: ${({theme, color}) => theme.colors[color]};
    }


    ${({theme}) => theme.media.tablet`
        width: 50%;
        margin-bottom: 50px;
    `}

    ${({theme}) => theme.media.desktop`
        width: 33%;
        margin-bottom: 70px;
    `}
`;

const StyledTitle = styled.h3`
    color: rgba(${({theme}) => theme.colors.white90});
    font-weight: ${({theme}) => theme.font.medium};
    letter-spacing: 5px;
    font-size: 30px;

    ${({theme}) => theme.media.tablet`
        font-size: 40px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 50px;
    `}
`;

const StyledSubtitle = styled.h5`
    color: rgba(${({theme}) => theme.colors.white80});
    font-weight: ${({theme}) => theme.font.medium};
    letter-spacing: 3px;
    font-size: 15px;
    margin-bottom: 25px;

    ${({theme}) => theme.media.tablet`
        font-size: 20px;
        margin-bottom: 30px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 25px;
        margin-bottom: 45px;
    `}
`;



const NumberContainer = ({title, subtitle, number, color}) => {
    return (
        <StyledContainer color={color}>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
            <NumberCounter number={number}/>
        </StyledContainer>
    )
}

export default NumberContainer;
