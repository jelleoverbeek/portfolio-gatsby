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
      liveUrl="//www.ticketswap.com/event/dekmantel-festival/c4b0156a-aa73-4e89-a027-fe679776c746"
      buttonLabel="View live"
    >
      <p>
        The event page of TicketSwap is the most viewed page of the platform. On
        this page thousands of fans are trying to get a ticket to their
        favourite event. My colleague Jim and I worked together on the UX and I
        finished the UI and led the implementation of the design. By researching
        Hotjar, doing a survey, digging through testimonials and the contact
        moments with our support team we composed the following goals.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Revamp UI of the page.</li>
          <li>Simplify ticket alert behaviour.</li>
          <li>
            Decrease questions of users where there newly created listings are.
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
          Users land on this page from either our search or Google. The page
          gives a clear overview of general information about the event, the
          supply and demand, the available ticket types and artists performing
          at the event.
        </p>
      </Chapter>

      <Chapter
        title="Listings overview"
        imagePath="cases/event/ticket-type.jpg"
        type="border"
      >
        <p>
          Here users spend a lot of time trying to get a ticket. To create trust
          and make the page feel personal we show avatars of the sellers. The
          comments that sellers add to their listing sometimes create funny
          situations that sometimes even get shared on social media.
        </p>
      </Chapter>

      <Chapter
        title="Ticket alerts"
        imagePath="cases/event/alerts.jpg"
        type="border"
      >
        <p>
          We changed the ticket alert behaviour from a traditional button that
          triggered a form to a simple toggle. The user can also set a price
          limit to only receive alerts for tickets offered below a certain
          price. Changing the behaviour increased the amount of conversions and
          time to convert by quite a bit.
        </p>
      </Chapter>

      <Chapter
        title="Types of listings"
        imagePath="cases/event/listings.jpg"
        type="border"
      >
        <p>
          New Listings only show up after a few minutes to give people with
          ticket alerts enabled a higher change on getting a ticket and to
          combat bots. When doing our research we discovered that sellers went
          to the event page immediatly after creating a listing but couldn’t see
          it yet. This resulted in a lot of users contacting support. To solve
          this issue without giving bots a chance and hurting the ticket alert
          conversion we will now show the newly created to the seller only.
        </p>
        <p>
          Since about a year we are also selling organizer tickets on the
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
          This is useful when there are for example no tickets available for the
          event the user wants to visit, in that situation the user easliy find
          an alternative. The badges with the favourite artists of the user are
          an extra trigger to visit check out the events.
        </p>
      </Chapter>

      <CaseFooter url="//www.ticketswap.com/event/dekmantel-festival/c4b0156a-aa73-4e89-a027-fe679776c746"></CaseFooter>

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
