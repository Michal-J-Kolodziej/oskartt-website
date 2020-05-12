import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNumber = styled.p`

    color: rgba(${({theme}) => theme.colors.white80});
    font-weight: ${({theme}) => theme.font.medium};
    letter-spacing: 5px;
    font-size: 20px;
    margin-bottom: 20px;

    ${({theme}) => theme.media.tablet`
        font-size: 25px;
        // margin-bottom: 30px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 35px;
        // margin-bottom: 45px;
    `}
`;


class NumberCounter extends Component {

    render() {

        return (
            <StyledNumber>
                {this.props.number}
            </StyledNumber>
        )
    }
}

export default NumberCounter;