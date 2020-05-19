import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby";
import SectionWrapper from 'components/Section_wrapper/SectionWrapper';
import StyledSectionTitle from 'components/Styled_section_title/StyledSectionTitle';
import OpinionContainer from 'components/Opinion_container/OpinionContainer';

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

const OpinionsSection = ({data: {
    datoCmsOpinionsTitle: {
        opinionSectionTitle
    },
    allDatoCmsOpinion: {
        edges
    }
}}) => {
    
    const opinionsList = edges.map( ({node: {personName, personTitle, opinionText, id}}) => (
        <OpinionContainer 
            key={id}
            name={personName}
            title={personTitle}
            content={opinionText}
        />
    ));

    return (
        <SectionWrapper bgc={"rgba(22,22,22,0.98)"} >
            <StyledTitle underlineColor={"pink"}>{opinionSectionTitle}</StyledTitle>
            <StyledWrapper>
                {opinionsList}
            </StyledWrapper>
        </SectionWrapper>
    )
}

export default function OpinionsQuery() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allDatoCmsOpinion {
                edges {
                node {
                    opinionPhoto {
                    fluid {
                        base64
                        tracedSVG
                        width
                        height
                    }
                    }
                    personName
                    personTitle
                    opinionText
                    id
                }
                }
            }
            datoCmsOpinionsTitle {
                opinionSectionTitle
            }
          }
        `}
        render={data => <OpinionsSection data={data} />}
      />
    )
  }



