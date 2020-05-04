import React from "react";
import PropTypes from "prop-types";
import caseFooterStyles from "./caseFooter.module.css";
import Button from "../button/button";

const CaseFooter = ({
  title,
  description,
  url,
  buttonLabel,
  url2,
  buttonLabel2,
}) => {
  return (
    <div className={caseFooterStyles.footer}>
      <h2>{title}</h2>
      <p>{description}</p>

      {url2 ? (
        <span className={caseFooterStyles.buttonWrapper}>
          <Button type="secondary" href={url2}>
            {buttonLabel2}
          </Button>
        </span>
      ) : (
        false
      )}

      <Button type="primary" href={url}>
        {buttonLabel}
      </Button>
    </div>
  );
};

CaseFooter.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

CaseFooter.defaultProps = {
  title: `Try it out`,
  description: `Check out this project on the live website of TicketSwap.`,
  buttonLabel: `View live`,
};

export default CaseFooter;
