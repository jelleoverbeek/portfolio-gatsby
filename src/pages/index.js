import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Intro from "../components/intro/intro";
import Card from "../components/card/card";
import Group from "../components/group/group";

const IndexPage = () => (
  <Layout>
    <SEO title="Jelle Overbeek" />
    <main>
      <Intro />
      <Group
        title="TicketSwap"
        description="TicketSwap is platform where over 5 million music fans buy and sell tickets. Ticket prices are capped at 120% of the original price to keep it fair and tickets are being checked for validity to make sure all transactions are secure."
      >
        <Card
          title="Event page"
          subtitle="The place where thousands of fans are trying to get a ticket, daily."
          imagePath="thumbs/thumb-event.png"
          to="/event-page/"
        ></Card>
        <Card
          title="Following artists"
          subtitle="The latest of your favourite artists, anywhere on the platform."
          imagePath="thumbs/thumb-artists.png"
          to="/artists/"
        ></Card>
        <Card
          title="Discover"
          subtitle="Finding the right event on the right day."
          imagePath="thumbs/thumb-discover.png"
          to="/discover/"
        ></Card>
      </Group>

      <Group
        title="Side projects"
        description="While I work as a product designer during my day job I focus on keeping up my code skills during my side projects. In the past year I learned how to use React, Electron and Typescript while solving some productivity issues using the tools below."
      >
        <Card
          title="Abstract To Do"
          subtitle="Automatic to do lists for design feedback."
          imagePath="thumbs/thumb-abstract.png"
          to="/abstract-to-do/"
        ></Card>
        <Card
          title="Desize"
          subtitle="Simple image resizer, compressor, and converter"
          imagePath="thumbs/thumb-desize.png"
          to="/desize/"
        ></Card>
      </Group>
    </main>
  </Layout>
);

export default IndexPage;
