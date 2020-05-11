import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
    padding: 50px 30px;
    min-height: ${({height}) => height ? height : '100vh'};
    background-color: ${({theme}) => theme.colors.black};

    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
    `}
`;

const SectionWrapper = ({children, height}) => {
    return (
        <StyledWrapper height={height}>
            {children}
        </StyledWrapper>
    )
}

export default SectionWrapper;