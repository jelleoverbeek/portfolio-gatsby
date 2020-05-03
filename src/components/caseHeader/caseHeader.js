import React from "react";
import caseHeaderStyles from "./caseHeader.module.css";
import Button from "../button/button";

const CaseHeader = ({ children, title, subtitle, liveUrl, buttonLabel }) => {
  return (
    <div className={caseHeaderStyles.header}>
      <div className={caseHeaderStyles.cover}>
        <nav className={caseHeaderStyles.nav}>
          <Button type="secondary" to="/">
            Back
          </Button>
          <Button type="primary" href={liveUrl}>
            {buttonLabel}
          </Button>
        </nav>
      </div>
      <div className={caseHeaderStyles.text}>
        <h1>{title}</h1>
        <p className={caseHeaderStyles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default CaseHeader;
