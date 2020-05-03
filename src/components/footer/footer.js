import React from "react";
import footerStyles from "./footer.module.css";
import linkedin from "./../../images/linkedin.svg";
import twitter from "./../../images/twitter.svg";
import dribbble from "./../../images/dribbble.svg";
import github from "./../../images/github.svg";

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.container}>
      <div>
        <a href="mailto:overbeekjelle@gmail.com">overbeekjelle@gmail.com</a>
      </div>

      <div className={footerStyles.icons}>
        <a href="//dribbble.com/jelleoverbeek">
          <img src={dribbble} alt="" />
        </a>
        <a href="//github.com/jelleoverbeek">
          <img src={github} alt="" />
        </a>
        <a href="//twitter.com/jelleoverbeek">
          <img src={twitter} alt="" />
        </a>
        <a href="//www.linkedin.com/in/jelle-overbeek-a595b246/">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
