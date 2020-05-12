import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
    padding: 50px 30px;
    min-height: ${({height}) => height ? height : '100vh'};
    background-color: ${({theme, bgc}) => bgc ? bgc : theme.colors.black};

    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
    `}
`;

const SectionWrapper = ({children, height, bgc}) => {
    return (
        <StyledWrapper height={height} bgc={bgc} >
            {children}
        </StyledWrapper>
    )
}

export default SectionWrapper;