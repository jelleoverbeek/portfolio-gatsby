import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Case from "../components/case/case";
import Card from "../components/card/card";
import Group from "../components/group/group";
import Goals from "../components/Goals/goals";

const eventPage = () => (
  <Layout>
    <SEO title="Event page" />
    <Case>
      <h1>Event page</h1>
      <p class="h1-subtitle">Product design • TicketSwap</p>
      <p>
        The event page of TicketSwap is the most viewed on the platform. On this
        page listings thousands of fans are trying to get a ticket to their
        favourite show. Jim and I worked together on the UX and I finished the
        UI and led the implementation of the design. By researching Hotjar,
        conducting a survey, digging through the testimonials and the contact
        moments with our support team we composed those goals:
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Refresh UI of the page</li>
          <li>Simplify ticket alert behaviour</li>
          <li>
            Decrease questions of users where there newly created listings are.
          </li>
          <li>Make users aware that refreshing doesn’t help.</li>
        </ul>
      </Goals>

      <Group title="More TicketSwap">
        <Card
          title="Following artists"
          subtitle="The latest of your favourite artists, anywhere on the platform."
          imagePath="thumbs/thumb-artists.png"
          to="/page-2/"
        ></Card>
        <Card
          title="Discover"
          subtitle="Finding the right event on the right day."
          imagePath="thumbs/thumb-discover.png"
          to="/page-2/"
        ></Card>
      </Group>
    </Case>
  </Layout>
);

export default eventPage;
