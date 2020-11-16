// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";
import introStyles from "./intro.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ fileName, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(fileName);
      });
      if (!image) {
        return null;
      }

      const imageSizes = image.node.childImageSharp.sizes;
      return <Img alt={alt} sizes={imageSizes} />;
    }}
  />
);

const Intro = () => (
  <div className={introStyles.intro}>
    <div className={introStyles.text}>
      <p>
        I’m Jelle, a designer who{" "}
        <a
          href="//github.com/jelleoverbeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          codes
        </a>
        . Currently on the product design team at{" "}
        <a
          href="https://ticketswap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TicketSwap
        </a>
        .
      </p>
    </div>
    <div className={introStyles.avatar}>
      <Image fileName="avatar.jpg" alt="" />
    </div>
  </div>
);

export default Intro;
