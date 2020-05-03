import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cardStyles from "./card.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = ({ title, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "thumbs/thumb-event.png" }) {
        childImageSharp {
          fluid(maxWidth: 392) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <article className={cardStyles.card}>
      <div className={cardStyles.left}>
        <Img
          className={cardStyles.preview}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </div>
      <div className={cardStyles.right}>
        <h3>{title}</h3>
        <p className={cardStyles.subtitle}>{subtitle}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

Card.defaultProps = {
  title: ``,
  subtitle: ``,
}

export default Card
