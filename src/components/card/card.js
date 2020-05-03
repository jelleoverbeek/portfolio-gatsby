import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import cardStyles from "./card.module.css";
import Image from "./../image";

const Card = ({ title, subtitle, imagePath, to }) => {
  return (
    <Link to={to}>
      <article className={cardStyles.card}>
        <div className={cardStyles.left}>
          <div className={cardStyles.preview}>
            <Image fileName={imagePath} maxWidth="392" alt="" />
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
