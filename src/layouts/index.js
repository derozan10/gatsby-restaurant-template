import React from "react";
import Helmet from "react-helmet";
import 'typeface-courgette';

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import favicon from "../assets/img/Cocotte-thumbnail.png";

import "./index.css";

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Cocotte restaurant te Berchem" },
        { name: "keywords", content: "restaurant, keuken, dineren, franse keuken, vlees, vis" }
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Hero siteTitle={data.site.siteMetadata.title} />
    <Navbar />
      {children()}
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
