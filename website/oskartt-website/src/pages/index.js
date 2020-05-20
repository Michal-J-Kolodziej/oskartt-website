import React, { useState } from "react"
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import HeroSection from "../sections/Hero_section/HeroSection";
import AboutSection from "../sections/About_section/AboutSection";
import { graphql } from "gatsby";
import NumberSection from "../sections/Numbers_section/NumbersSection";
import OpinionsSection from "../sections/Opinions_section/OpinionsSection";
import WorkSection from "../sections/Work_section/WorkSection";
import Footer from "../components/Footer/Footer";
import VisiblitySensor from "react-visibility-sensor";


const IndexPage = ({data}) => {

  const [numbersVisible, setNumbersVisible] = useState(false);
  
  return (
    <Layout>
      <Header/>
      <HeroSection image={data.hero} />
      <AboutSection />
      <VisiblitySensor partialVisibility onChange={(isVisible) => !numbersVisible ? setNumbersVisible(isVisible) : null}>
        <NumberSection visible={numbersVisible} />
      </VisiblitySensor>
      <OpinionsSection />
      <WorkSection image={data.work} />
      <Footer />
    </Layout>
  )
}

export default IndexPage;

export const dataImage = graphql`
  query {
    hero: file(name: {regex: "/hero_image/"}) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 50) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    work: file(name: {regex: "/oskar_work/"}) {
      childImageSharp {
        fluid(maxWidth: 750, quality: 50) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;


