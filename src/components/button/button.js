import { Link } from "gatsby";
import React from "react";
import buttonStyles from "./button.module.css";

const Button = ({ children, to, type, href }) => {
  if (href) {
    if (type === "primary") {
      return (
        <a href={href}>
          <button className={buttonStyles.primary}>{children}</button>
        </a>
      );
    } else if (type === "secondary") {
      return (
        <a href={href}>
          <button className={buttonStyles.secondary}>{children}</button>
        </a>
      );
    }
  } else {
    if (type === "primary") {
      return (
        <Link to={to}>
          <button className={buttonStyles.primary}>{children}</button>
        </Link>
      );
    } else if (type === "secondary") {
      return (
        <Link to={to}>
          <button className={buttonStyles.secondary}>{children}</button>
        </Link>
      );
    }
  }
};

export default Button;
