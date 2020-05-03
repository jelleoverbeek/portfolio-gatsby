import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
// import Card from "../components/card/card";
// import Group from "../components/group/group";
import Goals from "../components/goals/goals";
import Chapter from "../components/chapter/chapter";

const eventPage = () => (
  <Layout>
    <SEO title="Event page" />
    <CaseHeader title="Discover" subtitle="Product designer">
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
    </CaseHeader>

    <main>
      <Chapter title="top" imagePath="cases/discover/top.jpg">
        <p>top</p>
      </Chapter>

      <Chapter
        title="Browse events"
        imagePath="cases/discover/browse-events.jpg"
      >
        <p>browse events</p>
      </Chapter>

      <Chapter
        title="Personalised recommendations"
        imagePath="cases/discover/picked-for-you.jpg"
      >
        <p>recommendations</p>
      </Chapter>

      <Chapter title="Cards" imagePath="cases/discover/cards.jpg">
        <p>cards</p>
      </Chapter>
    </main>
  </Layout>
);

export default eventPage;
