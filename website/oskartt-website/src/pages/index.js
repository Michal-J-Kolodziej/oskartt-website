import React from "react"
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import HeroWrapper from "../components/Hero_wrapper/HeroWrapper";
import { graphql } from "gatsby";


const IndexPage = ({data}) => {
  return (
    <Layout>
      <Header/>
      <HeroWrapper image={data} />
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
