import PropTypes from "prop-types";
import React from "react";
import groupStyles from "./group.module.css";

const Group = ({ title, description, children }) => {
  return (
    <section className={groupStyles.group}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={groupStyles.cards}>{children}</div>
    </section>
  );
};

Group.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Group.defaultProps = {
  title: ``,
  description: ``,
};

export default Group;
