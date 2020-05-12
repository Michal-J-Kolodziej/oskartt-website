import React from "react"
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero_section/HeroSection";
import AboutSection from "../components/About_section/AboutSection";
import { graphql } from "gatsby";
import NumberSection from "../components/Numbers_section/NumbersSection";
import OpinionsSection from "../components/Opinions_section/OpinionsSection";
import WorkSection from "../components/Work_section/WorkSection";
import Footer from "../components/Footer/Footer";


const IndexPage = ({data}) => {
  return (
    <Layout>
      <Header/>
      <HeroSection image={data.hero} />
      <AboutSection />
      <NumberSection />
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
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    work: file(name: {regex: "/oskar_work/"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;


