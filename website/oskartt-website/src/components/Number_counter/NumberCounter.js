import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StyledNumber = styled(CountUp)`

    color: rgba(${({theme}) => theme.colors.white80});
    font-weight: ${({theme}) => theme.font.medium};
    letter-spacing: 5px;
    font-size: 20px;
    margin-bottom: 20px;

    ${({theme}) => theme.media.tablet`
        font-size: 25px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 35px;
    `}
`;


const NumberCounter = ({number}) => {

    return (
        <StyledNumber end={parseInt(number)} />
    )
}

export default NumberCounter;