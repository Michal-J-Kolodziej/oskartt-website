import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    color: rgba(${({theme}) => theme.colors.white90});
    letter-spacing: 5px;
    font-weight: ${({theme}) => theme.font.medium};
    text-shadow: 0 3px 15px black;

    /* make h2 the size of its text */
    display: inline-block;

    ::after {
        display: block;
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);

        width: 50%;
        height: 3px;
        background-color: ${({theme, underlineColor}) => theme.colors[underlineColor]};
        border-radius: 5px;
    }
`;

const StyledSectionTitle = ({underlineColor, children, className}) => {
    return (
        <StyledH2 className={className} underlineColor={underlineColor} >{children}</StyledH2>
    )
}

export default StyledSectionTitle;