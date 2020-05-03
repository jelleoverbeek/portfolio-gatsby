import { Link } from "gatsby";
import React from "react";
import goalsStyles from "./goals.module.css";

const Goals = ({ children }) => {
  return <div className={goalsStyles.goals}>{children}</div>;
};

export default Goals;
