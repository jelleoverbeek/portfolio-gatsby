import React from "react";
import caseHeaderStyles from "./caseHeader.module.css";
import Button from "../button/button";

const CaseIntro = ({ children }) => {
  return (
    <div className={caseHeaderStyles.header}>
      <nav className={caseHeaderStyles.nav}>
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

export default CaseIntro;
