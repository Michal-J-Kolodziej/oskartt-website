import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Section_wrapper/SectionWrapper';
import StyledSectionTitle from '../Styled_section_title/StyledSectionTitle';
import OpinionContainer from '../Opinion_container/OpinionContainer';

const StyledTitle = styled(StyledSectionTitle)`

    font-size: 20px;
    margin-bottom: 50px;

    ${({theme}) => theme.media.tablet`
        font-size: 30px;
    `}
    
    ${({theme}) => theme.media.desktop`
        font-size: 40px;
        margin-bottom: 75px;
    `}
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const OpinionsSection = () => {

    const opinionsList = opinions.map( opinion => (
        <OpinionContainer 
            key={opinion.id}
            name={opinion.name}
            title={opinion.title}
            content={opinion.content}
        />
    ));

    return (
        <SectionWrapper bgc={"rgba(22,22,22,0.98)"} >
            <StyledTitle underlineColor={"pink"}>opinions about me</StyledTitle>
            <StyledWrapper>
                {opinionsList}
            </StyledWrapper>
        </SectionWrapper>
    )
}

export default OpinionsSection;

const opinions = [
    {
        id: 0,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
    {
        id: 1,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
    {
        id: 2,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
    {
        id: 3,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
    {
        id: 4,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
    {
        id: 5,
        name: "Jan Kowalski",
        title: "dj, producer",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nibh at congue luctus, orci sem malesuada ligula, eget fermentum augue mauris eget mauris. Morbi odio sem, gravida et pharetra et, molestie ut erat."
    },
];