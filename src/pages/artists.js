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
      buttonLabel="View live"
    >
      <p>
        We all have an artist we like and want to visit as soon as they perform
        in the area. By giving users the ability to follow artists we want to be
        able to easily keep track of their favourite artists. We will also use
        this data to improve our event recommendations. The research existed of
        user interviews, a survey, analyzing data and benchmarking similar
        features.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>
            Add the ability for users to get informed when their favourite
            artist are performing.
          </li>
          <li>
            Get more data about what artists the users like for our
            recommendations models.
          </li>
          <li>Revamp the UI of the existing artists page.</li>
        </ul>
      </Goals>
    </CaseHeader>

    <main>
      <Chapter
        title="The artists page"
        imagePath="cases/artist/preview.jpg"
        type="border"
      >
        <p>
          Throughout the platform the dark header is used to show general
          information about an entity. The primary action here is to follow the
          artist. Following an artist will inform users when they are performing
          in the area. The tooltip educated this to the user until they dismiss
          it or follow an artist.
        </p>
      </Chapter>

      <Chapter
        title="Simple follow interaction"
        imagePath="cases/artist/artists.jpg"
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
        imagePath="cases/artist/badges.jpg"
        type="border"
      >
        <p>
          If you’ve never heard about “Dekmantel Festival” or “Lowlands” and you
          see those event names passing by when browsing TicketSwap the odds are
          low you click on them. You simply don’t know what kind of event it is.
        </p>
        <p>
          To give users an idea on what events are interesting to them I came up
          with this badge that shows artist the user follows on the event cards
          throughout the platform.
        </p>
      </Chapter>

      <Chapter title="Notifications" imagePath="cases/artist/push.jpg">
        <p>
          When an artist the user follows is performing in his or her area we
          will send out a push notification. If the user doesn’t have the app
          installed we send out an email instead of a push notification. This
          feature is not live yet.
        </p>
      </Chapter>

      <Chapter
        title="Homepage widget"
        imagePath="cases/artist/homepage.jpg"
        type="border"
      >
        <p>
          A project that is currently work in progress is the redesign of the
          homepage. In the new design the homepage of TicketSwap will become
          more personalised. One of the widgets that will be available contains
          all nearby upcoming events of artists the users follows.
        </p>
      </Chapter>
    </main>
  </Layout>
);

export default eventPage;
