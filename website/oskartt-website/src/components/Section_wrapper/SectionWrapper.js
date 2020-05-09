import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
    padding: 50px 30px;

    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
    `}
`;

const SectionWrapper = ({children}) => {
    return (
        <StyledWrapper>
            {children}
        </StyledWrapper>
    )
}

export default SectionWrapper;