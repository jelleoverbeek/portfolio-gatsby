import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/intro/intro"
import Card from "../components/card/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Card
      title="Event page"
      subtitle="The place where thousands of fans are trying to get a ticket, daily."
    ></Card>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
