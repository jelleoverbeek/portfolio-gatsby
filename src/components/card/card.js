import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import cardStyles from "./card.module.css";
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
                sizes(maxWidth: 600, quality: 100) {
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

const Card = ({ title, subtitle, imagePath, to }) => {
  return (
    <Link to={to}>
      <article className={cardStyles.card}>
        <div className={cardStyles.left}>
          <div className={cardStyles.preview}>
            <Image fileName={imagePath} alt="" />
          </div>
        </div>
        <div className={cardStyles.right}>
          <h3>{title}</h3>
          <p className={cardStyles.subtitle}>{subtitle}</p>
        </div>
      </article>
    </Link>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  to: PropTypes.string,
};

Card.defaultProps = {
  title: `Title`,
  subtitle: `Subtitle`,
  imagePath: ``,
  to: ``,
};

export default Card;
