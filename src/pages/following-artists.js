import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import CaseFooter from "../components/caseFooter/caseFooter";
import Goals from "../components/goals/goals";
import Chapter from "../components/chapter/chapter";
import Card from "../components/card/card";
import Group from "../components/group/group";

const eventPage = () => (
  <Layout>
    <SEO title="Following Artists" />
    <CaseHeader
      title="Following Artists"
      subtitle="Product designer"
      liveUrl="//www.ticketswap.com/artist/hunee/5736e43b-8538-4c6b-98d8-e72b3094cde0"
      buttonLabel="View live"
    >
      <p>
        To get notified once your favourite artists are performing in your area,
        we added the option to follow them via our platform. On top of that,
        we’re going to use the resulting data to improve our recommendation
        model. The research consisted of user interviews, a survey, analyzing
        data and benchmarking similar features.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>
            Add the ability for users to get informed when their favourite
            artists are performing.
          </li>
          <li>Get better user insights for our recommendation model</li>
          <li>Revamp the UI of the existing artists page.</li>
        </ul>
      </Goals>
    </CaseHeader>

    <main>
      <Chapter
        title="The artists page"
        imagePath="cases/following-artists/preview.jpg"
        type="border"
      >
        <p>
          Throughout the platform the dark header is used to show general
          information. The primary action here is to follow the artist.
          Following an artist will inform users about when they are performing
          in the area. The tooltip educates the user until they dismiss it or
          follow an artist.
        </p>
      </Chapter>

      <Chapter
        title="Simple follow interaction"
        imagePath="cases/following-artists/artists.jpg"
        type="border"
      >
        <p>
          Similar artists are shown at the bottom of the page. Every artist card
          on the platform will contain a follow button so users can easily build
          up their profile. They can for example go to the line-up section of
          their favourite festival and follow all the artists they like.
        </p>
      </Chapter>

      <Chapter
        title="Badges across the platform"
        imagePath="cases/following-artists/badges.jpg"
        type="border"
      >
        <p>
          If you’ve never heard about “Zomer Kabinet" or “Breakfast Club” and
          you see those event names passing by when browsing TicketSwap, the
          odds are low you're going to click on them. You simply don’t know what
          kind of event it is.
        </p>
        <p>
          The event cards across the platform show badges with artists. The
          artists on those badges are being followed by the user. This helps the
          user to determine if an event is interesting to them.
        </p>
      </Chapter>

      <Chapter
        title="Notifications"
        imagePath="cases/following-artists/push.jpg"
      >
        <p>
          When an artist performing is performing in the area of the user we
          will send out a push notification. If the user doesn’t have the app
          installed we send out an email instead.
        </p>
      </Chapter>

      <Chapter
        title="Homepage widget"
        imagePath="cases/following-artists/homepage.jpg"
        type="border"
      >
        <p>
          A project that is currently work in progress is the redesign of the
          TicketSwap homepage. The new design has the goal of making the
          homepage more personalised to the user. One of the new widgets on this
          page contains all nearby upcoming events of artists the users follows.
        </p>
      </Chapter>

      <CaseFooter url="//www.ticketswap.com/artist/hunee/5736e43b-8538-4c6b-98d8-e72b3094cde0"></CaseFooter>

      <Group title="Next case" description="">
        <Card
          title="Discover"
          subtitle="Find music and more, on a day that works for you"
          imagePath="thumbs/thumb-discover.png"
          to="/discover/"
        ></Card>
      </Group>
    </main>
  </Layout>
);

export default eventPage;
