import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import Card from "../components/card/card";
import Group from "../components/group/group";
import Goals from "../components/Goals/goals";
import Chapter from "../components/chapter/chapter";

const eventPage = () => (
  <Layout>
    <SEO title="Event page" />
    <CaseHeader>
      <h1>Event page</h1>
      <p>Product design • TicketSwap</p>
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

    <Chapter title="Ticket types" imagePath="cases/event/event.jpg">
      <p>
        On this page the user can select the right ticket type and find all
        general info about the event.
      </p>
    </Chapter>

    <Chapter title="Listings overview" imagePath="cases/event/ticket-type.jpg">
      <p>
        This is the page where users spend a lot of time trying to get a ticket.
        To create trust and make the page feel personal we show avatars of the
        sellers. The comments that sellers can add to their listing sometimes
        create funny situations that get shared on social media.
      </p>
    </Chapter>

    <Chapter title="Listings" imagePath="cases/event/listings.jpg">
      <p>
        Users with ticket alerts enabled will first receive a notification once
        a new listing is created, the listing won’t be visible on the event page
        immediately. We do this to combat bots and increase app downloads. When
        doing our research we discovered that sellers went to the event page to
        check their listing and couldn’t see it yet, this resulted in a lot of
        users contacting support. To solve this issue without giving bots a
        chance and hurting the app downloads conversion we will now show the
        newly created to the seller only.
      </p>
    </Chapter>

    <Chapter title="Header" imagePath="cases/event/header.jpg">
      <p>header</p>
    </Chapter>

    <Chapter title="Artists" imagePath="cases/event/artists.jpg">
      <p>artists</p>
    </Chapter>

    <Chapter title="Similars" imagePath="cases/event/similars.jpg">
      <p>similar</p>
    </Chapter>

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
  </Layout>
);

export default eventPage;
