import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
// import Card from "../components/card/card";
// import Group from "../components/group/group";
import Goals from "../components/Goals/goals";
import Chapter from "../components/chapter/chapter";

const eventPage = () => (
  <Layout>
    <SEO title="Event page" />
    <CaseHeader title="Event page" subtitle="Product designer">
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
        title="Ticket types"
        imagePath="cases/event/event.jpg"
        style="border"
      >
        <p>
          On this page the user can select the right ticket type and find all
          general info about the event.
        </p>
      </Chapter>

      <Chapter
        title="Listings overview"
        imagePath="cases/event/ticket-type.jpg"
        style="border"
      >
        <p>
          This is the page where users spend a lot of time trying to get a
          ticket. To create trust and make the page feel personal we show
          avatars of the sellers. The comments that sellers can add to their
          listing sometimes create funny situations that get shared on social
          media.
        </p>
      </Chapter>

      <Chapter
        title="Listings"
        imagePath="cases/event/listings.jpg"
        style="border"
      >
        <p>
          Users with ticket alerts enabled will first receive a notification
          once a new listing is created, the listing won’t be visible on the
          event page immediately. We do this to combat bots and increase app
          downloads. When doing our research we discovered that sellers went to
          the event page to check their listing and couldn’t see it yet, this
          resulted in a lot of users contacting support. To solve this issue
          without giving bots a chance and hurting the app downloads conversion
          we will now show the newly created to the seller only.
        </p>
      </Chapter>

      <Chapter title="Header" imagePath="cases/event/header.jpg" style="border">
        <p>header</p>
      </Chapter>

      <Chapter
        title="Artists"
        imagePath="cases/event/artists.jpg"
        style="border"
      >
        <p>artists</p>
      </Chapter>

      <Chapter
        title="Similars"
        imagePath="cases/event/similars.jpg"
        style="border"
      >
        <p>similar</p>
      </Chapter>
    </main>
  </Layout>
);

export default eventPage;
