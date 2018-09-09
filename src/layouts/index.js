import React from "react";
import Helmet from "react-helmet";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "./index.css";
import { Footer } from "../components/Footer";
import favicon from "../assets/img/thumbnail-restaurant.png"

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Hero siteTitle={data.site.siteMetadata.title} />
    <Navbar />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
