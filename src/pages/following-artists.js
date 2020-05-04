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
        We all have an artist we like and want to visit as soon as they perform
        in the area. By giving users the ability to follow artists we want them
        to be able to easily keep track of their favourite artists. We will also
        use this to improve our event recommendations. The research existed of
        user interviews, a survey, analyzing data and benchmarking similar
        features.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>
            Add the ability for users to get informed when their favourite
            artists are performing.
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
          information. The primary action here is to follow the artist.
          Following an artist will inform users about when they are performing
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
          If you’ve never heard about “Zomer Kabinet" or “Breakfast Club” and
          you see those event names passing by when browsing TicketSwap, the
          odds are low you're gonna click on them. You simply don’t know what
          kind of event it is.
        </p>
        <p>
          To give users an idea of what events are interesting to them, I came
          up with this badge that shows the artist the user follows on the event
          cards throughout the platform.
        </p>
      </Chapter>

      <Chapter title="Notifications" imagePath="cases/artist/push.jpg">
        <p>
          When an artist performing is performing in the area of the user we
          will send out a push notification. If the user doesn’t have the app
          installed we send out an email instead.
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
          more personalised. One of the new widgets on this page contains all
          nearby upcoming events of artists the users follows.
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
