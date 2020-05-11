import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: rgba(${({theme}) => theme.colors.white90});
    letter-spacing: 1px;
    font-weight: ${({theme}) => theme.font.regular};
    text-align: center;
    line-height: 150%;
`;

const StyledParagraph = ({className, children}) => {
    return (
        <StyledP className={className}>
            {children}
        </StyledP>
    )
}

export default StyledParagraph;