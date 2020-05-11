import React from 'react';
import styled from 'styled-components';
import StyledSectionTitle from '../Styled_section_title/StyledSectionTitle';
import StyledParagraph from '../Styled_paragraph/StyledParagraph';

const StyledWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-color: ${({theme}) => theme.colors.black};
    

    padding: 50px 30px;
    height: 600px;


    ${({theme}) => theme.media.tablet`
        padding: 40px 70px;
        height: 100vh;

        background-image: linear-gradient(232deg, ${({theme}) => theme.colors.blue} 0%, ${({theme}) => theme.colors.violet} 100%);

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        ::before {   
            position: absolute;
            right: 0;
            bottom: 0;
            box-sizing: content-box;
            content: '';
            display: block;
            width: 60%;
            border-right: 0px solid transparent;
            border-left: 150px solid transparent;
            border-top: 100vh solid ${({theme}) => theme.colors.black};
        }
    `}

    ${({theme}) => theme.media.desktop`
        height: 80vh;

        ::before {   
            
            border-top: 80vh solid ${({theme}) => theme.colors.black};
        }
    `}

`;

const StyledContentContainer = styled.div`

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

    ${({theme}) => theme.media.tablet`
        font-size: 18px;
    `}
    
    ${({theme}) => theme.media.desktop`
        font-size: 19px;
    `}
`;

const paragraphText = `lorem ipsum dolor sit amet, consectetur adipiscing elit. pellentesque suscipit suscipit odio, vulputate posuere justo scelerisque a. vestibulum varius sollicitudin augue, sed dictum diam ornare eu. integer in interdum purus, vel tincidunt enim. aliquam in tortor et nulla cursus dignissim. morbi magna nunc, laoreet eget nulla nec, ultrices dictum nunc. donec dapibus, nibh et egestas molestie, ante arcu tempor dolor, id commodo elit diam non nisi. maecenas pharetra lectus a justo ullamcorper ullamcorper.`;

const AboutSection = () => {
    return (
        <StyledWrapper height={"75vh"}>
            <StyledContentContainer>
                <StyledTitle
                    underlineColor={'blue'}
                >
                    about me
                </StyledTitle>
                <StyledP>
                    {paragraphText}
                </StyledP>
            </StyledContentContainer>
        </StyledWrapper>
    )
}

export default AboutSection;