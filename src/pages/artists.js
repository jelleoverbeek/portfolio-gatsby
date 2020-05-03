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
    <SEO title="Artists page" />
    <CaseHeader
      title="Artists page"
      subtitle="Product designer"
      liveUrl="//www.ticketswap.com/artist/hunee/5736e43b-8538-4c6b-98d8-e72b3094cde0"
    >
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
      <Chapter
        title="Preview"
        imagePath="cases/artist/preview.jpg"
        type="border"
      >
        <p>Preview</p>
      </Chapter>

      <Chapter
        title="Artists"
        imagePath="cases/artist/artists.jpg"
        type="border"
      >
        <p>Artists</p>
      </Chapter>

      <Chapter title="Badges" imagePath="cases/artist/badges.jpg" type="border">
        <p>Badges</p>
      </Chapter>

      <Chapter
        title="Homepage"
        imagePath="cases/artist/homepage.jpg"
        type="border"
      >
        <p>Homepage</p>
      </Chapter>

      <Chapter title="Push" imagePath="cases/artist/push.jpg">
        <p>Push</p>
      </Chapter>
    </main>
  </Layout>
);

export default eventPage;
