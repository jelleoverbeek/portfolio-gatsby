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
        description="TicketSwap is a safe and fair place to buy and sell e-tickets. Ticket prices are capped at 120% of the original price and checked for validity. Currently TicketSwap has more than 5 million users worldwide which makes it one of the biggest fan-to-fan ticket platforms in the world."
      >
        <Card
          title="Event page"
          subtitle="The place where thousands of people are trying to get tickets, daily."
          imagePath="thumbs/thumb-event.png"
          to="/event-page/"
        ></Card>
        <Card
          title="Following artists"
          subtitle="The latest of your favourite artists, anywhere on the platform."
          imagePath="thumbs/thumb-artists.png"
          to="/following-artists/"
        ></Card>
        <Card
          title="Discover"
          subtitle="Find music and more, on a day that works for you."
          imagePath="thumbs/thumb-discover.png"
          to="/discover/"
        ></Card>
        <Card
          title="Sketch plugin"
          subtitle="Real data with just a click."
          imagePath="thumbs/thumb-plugin.png"
          to="/sketch-plugin/"
        ></Card>
      </Group>

      <Group
        title="Side projects"
        description="While working as a product designer during my day job I also focus a lot on coding during my side projects. In the past year I’ve learned how to use React, Electron and TypeScript while solving some productivity issues."
      >
        <Card
          title="Abstract To Do"
          subtitle="Automatic to do lists for design feedback."
          imagePath="thumbs/thumb-abstract.png"
          to="/abstract-to-do/"
        ></Card>
        <Card
          title="Desize"
          subtitle="Simple image resizer, compressor, and converter."
          imagePath="thumbs/thumb-desize.png"
          to="/desize/"
        ></Card>
      </Group>
    </main>
  </Layout>
);

export default IndexPage;
