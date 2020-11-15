import PropTypes from "prop-types";
import React from "react";
import chapterStyles from "./chapter.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Caption from "../caption/caption";

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
                sizes(maxWidth: 1040, quality: 100) {
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

const Chapter = ({ title, imagePath, imageCaption, type, children }) => {
  return (
    <section className={chapterStyles.chapter}>
      <div className={chapterStyles.text}>
        {title && <h3>{title}</h3>}
        {children}
      </div>
      {imagePath && (
        <>
          <div
            className={
              type === "border"
                ? `${chapterStyles.media} ${chapterStyles.mediaBorder}`
                : chapterStyles.media
            }
          >
            <Image fileName={imagePath} alt="" />
          </div>
          {imageCaption && <Caption>{imageCaption}</Caption>}
        </>
      )}
    </section>
  );
};

Chapter.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
};

Chapter.defaultProps = {
  title: ``,
  imagePath: ``,
};

export default Chapter;
