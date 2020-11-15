import PropTypes from "prop-types";
import React from "react";
import captionStyles from "./caption.module.css";

const Caption = ({ children }) => {
  return <div className={captionStyles.wrapper}>{children}</div>;
};

export default Caption;
