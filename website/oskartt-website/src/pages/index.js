import React from "react"
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero_section/HeroSection";
import AboutSection from "../components/About_section/AboutSection";
import { graphql } from "gatsby";
import NumberSection from "../components/Numbers_section/NumbersSection";



const IndexPage = ({data}) => {
  return (
    <Layout>
      <Header/>
      <HeroSection image={data} />
      <AboutSection />
      <NumberSection />
    </Layout>
  )
}

export default IndexPage;

export const dataImage = graphql`
  query {
    file(name: {regex: "/hero_image/"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
