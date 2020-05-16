import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SectionWrapper from '../Section_wrapper/SectionWrapper';
import StyledParagraph from '../Styled_paragraph/StyledParagraph';
import StyledSectionTitle from '../Styled_section_title/StyledSectionTitle';

const StyledWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    /* height: 100vh; */
    width: 100%;


    ${({theme}) => theme.media.tablet`
        
    `}

    ${({theme}) => theme.media.desktop`
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    `}

`;

const StyledImg = styled(Img)`
    display: none;

    ${({theme}) => theme.media.desktop`
        display: block;
        width: 90%;
        box-shadow: 20px 20px 5px ${({theme}) => theme.colors.pink10}, 10px 10px 5px ${({theme}) => theme.colors.blue10};
    `}
`;

const StyledContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;

    ${({theme}) => theme.media.tablet`
        grid-column: 2/3;
    `}

`;

const StyledTitle = styled(StyledSectionTitle)`

    font-size: 20px;

    ${({theme}) => theme.media.tablet`
        font-size: 30px;
    `}
    
    ${({theme}) => theme.media.desktop`
        font-size: 40px;
    `}
`;


const StyledP = styled(StyledParagraph)`
    font-size: 15px;
    margin-top: 50px;
    margin-bottom: 50px;

    ${({theme}) => theme.media.tablet`
        font-size: 18px;
    `}
    
    ${({theme}) => theme.media.desktop`
        font-size: 19px;
    `}
`;

const StyledContact = styled.h6`
    color: rgba(${({theme}) => theme.colors.white80});
    font-weight: ${({theme}) => theme.font.regular};
    font-size: 15px;
    padding-top: 10px;

    ${({theme}) => theme.media.tablet`
        font-size: 18px;
    `}

    ${({theme}) => theme.media.desktop`
        font-size: 20px;
    `}

    & span {
        font-size: 12px;
        padding-left: 10px;

        ${({theme}) => theme.media.tablet`
            font-size: 15px;
        `}

        ${({theme}) => theme.media.desktop`
            font-size: 18px;
        `}

        a {
            color: rgba(${({theme}) => theme.colors.white80});
            text-decoration: none;
        }
    }
`;

const paragraphText = `lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque suscipit suscipit odio, vulputate posuere justo scelerisque a. vestibulum varius sollicitudin augue, sed dictum diam ornare eu. integer in interdum purus, vel tincidunt enim. aliquam in tortor et nulla cursus dignissim. morbi magna nunc, laoreet eget nulla nec, ultrices dictum nunc. donec dapibus, nibh et egestas molestie, ante arcu tempor dolor, id commodo elit diam non nisi. maecenas pharetra lectus a justo ullamcorper ullamcorper.`;


const WorkSection = ({image}) => {
    return (
        <SectionWrapper>
            <StyledWrapper>
                <StyledImg fluid={image.childImageSharp.fluid} />
                <StyledContentContainer>
                    <div>
                        <StyledTitle
                            underlineColor={'blue'}
                        >
                            Work with me
                        </StyledTitle>
                        <StyledP>
                            {paragraphText}
                        </StyledP>
                    </div>
                    <div>
                        <StyledContact>
                            Email: <span>jankowalski@gmail.com</span>
                        </StyledContact>
                        <StyledContact>
                            Facebook: <span><a href="https://facebook.com/OskarT.TOfficial" target="_blank" rel="noopener noreferrer">facebook.com/OskarT.TOfficial</a></span>
                        </StyledContact>
                    </div>
                </StyledContentContainer>
            </StyledWrapper>
        </SectionWrapper>
    )
}

export default WorkSection;
