import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import Goals from "../components/goals/goals";
import Chapter from "../components/chapter/chapter";
import Card from "../components/card/card";
import Group from "../components/group/group";
import CaseFooter from "../components/caseFooter/caseFooter";

const eventPage = () => (
  <Layout>
    <SEO title="Event Page" />
    <CaseHeader
      title="Event page"
      subtitle="Product designer"
      liveUrl="//ticketswap.com/event/motor-city-drum-ensemble/regular-tickets/f4a6bb16-9418-4941-9857-0c37b1c608fe/1555633"
      buttonLabel="View live"
    >
      <p>
        The event page of TicketSwap is the most viewed page of the platform.
        Here thousands of fans are trying to get a ticket to their favourite
        event. My colleague Jim and I worked together on the UX and I finished
        the UI and led the implementation of the design. By researching Hotjar,
        doing a survey, digging through testimonials and the contact moments
        with our support team we composed the following goals.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Revamp UI of the page.</li>
          <li>Simplify ticket alert behaviour.</li>
          <li>
            Decrease questions of users where their newly created listings are.
          </li>
        </ul>
      </Goals>
    </CaseHeader>

    <main>
      <Chapter
        title="Ticket types"
        imagePath="cases/event/event.jpg"
        type="border"
      >
        <p>
          Users land on this page from either our own search or Google results.
          The page gives a clear overview of general information about the
          event, the supply and demand, the available ticket types and artists
          performing at the event.
        </p>
      </Chapter>

      <Chapter
        title="Listings overview"
        imagePath="cases/event/ticket-type.jpg"
        type="border"
      >
        <p>
          Here users spend a lot of time trying to get a ticket. The comments
          that sellers add to their listing sometimes create funny situations
          that even get shared on social media.
        </p>
      </Chapter>

      <Chapter
        title="Ticket alerts"
        imagePath="cases/event/alerts.jpg"
        type="border"
      >
        <p>
          We changed the ticket alert behaviour from a button that triggered a
          form to a simple toggle. The user can also set a price limit to only
          receive alerts for tickets offered below a certain price. Changing the
          behaviour increased the amount of conversions and time to convert by
          quite a bit.
        </p>
      </Chapter>

      <Chapter
        title="Types of listings"
        imagePath="cases/event/listings.jpg"
        type="border"
      >
        <p>
          New listings only show up after a few minutes to give people with
          ticket alerts enabled a higher chance of getting a ticket and to
          combat bots. When doing our research we discovered that sellers went
          to the event page immediatly after creating a listing but couldn’t see
          it yet. This resulted in a lot of users contacting support. To solve
          this issue without giving bots a chance and hurting the ticket alert
          conversion we will now show the newly created to the seller only.
        </p>
        <p>
          For about a year we are also selling organizer tickets on the
          platform. To make the listing more trustworthy and stand out we added
          a verified badge.
        </p>
      </Chapter>

      <Chapter
        title="Artists"
        imagePath="cases/event/artists.jpg"
        type="border"
      >
        <p>
          Every artist card contains a follow button. Having this on the event
          page in the line-up section makes it very easy for users to follow all
          the artists they like without having to search them all individually.
          Read more about <Link to="/artist">following artists</Link>.
        </p>
      </Chapter>

      <Chapter
        title="Similar events"
        imagePath="cases/event/similars.jpg"
        type="border"
      >
        <p>
          At the bottom of each event page the user can find similar events.
          When there are no tickets available for the event the user can easily
          find an alternative. The badges with artists the users follows are an
          extra trigger to visit the events.
        </p>
      </Chapter>

      <CaseFooter url="//ticketswap.com/event/motor-city-drum-ensemble/regular-tickets/f4a6bb16-9418-4941-9857-0c37b1c608fe/1555633"></CaseFooter>

      <Group title="Next case" description="">
        <Card
          title="Following artists"
          subtitle="The latest of your favourite artists, anywhere on the platform."
          imagePath="thumbs/thumb-artists.png"
          to="/following-artists/"
        ></Card>
      </Group>
    </main>
  </Layout>
);

export default eventPage;
