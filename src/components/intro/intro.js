// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import avatar2x from "./../../images/avatar@2x.jpg"
import introStyles from "./intro.module.css"

const Intro = () => (
  <div className={introStyles.intro}>
    <p className={introStyles.text}>
      I’m Jelle, a designer that also loves to{" "}
      <a href="//github.com/jelleoverbeek">code</a>. Currently I’m doing product
      design at{" "}
      <a
        href="https://ticketswap.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TicketSwap
      </a>
      .
    </p>
    <img className={introStyles.avatar} src={avatar2x} alt="" />
  </div>
)

export default Intro
