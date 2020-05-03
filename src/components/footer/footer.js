// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import linkedin from "./../../images/linkedin.svg"
import twitter from "./../../images/twitter.svg"
import dribbble from "./../../images/dribbble.svg"
import github from "./../../images/github.svg"
import footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
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
  </footer>
)

export default Footer
