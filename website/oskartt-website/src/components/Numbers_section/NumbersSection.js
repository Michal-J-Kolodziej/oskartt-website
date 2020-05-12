import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Section_wrapper/SectionWrapper';
import NumberContainer from '../Number_container/NumberContainer';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const NumberSection = () => {
    return (
        <SectionWrapper>
            <StyledWrapper>
                <NumberContainer title={"Spotify"} subtitle={"followers"} number={"20000"} color={"pink"} />
                <NumberContainer title={"Youtube"} subtitle={"subscribers"} number={"20000"} color={"blue"} />
                <NumberContainer title={"Instagram"} subtitle={"followers"} number={"20000"} color={"pink"} />
                <NumberContainer title={"Facebook"} subtitle={"fanpage likes"} number={"20000"} color={"blue"} />
                <NumberContainer title={"Soundcloud"} subtitle={"followers"} number={"20000"} color={"pink"} />
            </StyledWrapper>
        </SectionWrapper>
    )
}

export default NumberSection;