import { Link } from "gatsby";
import React from "react";
import caseStyles from "./case.module.css";
import Button from "../button/button";

const Case = ({ children }) => {
  return (
    <div className={caseStyles.case}>
      <nav className={caseStyles.nav}>
        <Button type="secondary" to="/">
          Back
        </Button>
        <Button type="primary" href="//ticketswap.com/">
          Live version
        </Button>
      </nav>
      {children}
    </div>
  );
};

export default Case;
