import React from "react";
import caseHeaderStyles from "./caseHeader.module.css";
import Button from "../button/button";

const CaseIntro = ({ children, title, subtitle, liveUrl }) => {
  return (
    <div className={caseHeaderStyles.header}>
      <nav className={caseHeaderStyles.nav}>
        <Button type="secondary" to="/">
          Back
        </Button>
        <Button type="primary" href={liveUrl}>
          Live version
        </Button>
      </nav>

      <h1>{title}</h1>
      <p className={caseHeaderStyles.subtitle}>{subtitle}</p>
      {children}
    </div>
  );
};

export default CaseIntro;
