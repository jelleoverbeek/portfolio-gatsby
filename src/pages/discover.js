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
    <SEO title="Discover" />
    <CaseHeader
      title="Discover"
      subtitle="Product designer"
      liveUrl="https://www.ticketswap.com/apps"
      buttonLabel="Download app"
    >
      <p>
        In the pursuit of becoming the starting point of visiting music events
        TicketSwap also needs features that enable users to discover events. My
        graduation project was about designing a visionary concept of how event
        discovery on TicketSwap could work. I reused all the research and
        learnings from this project and combined it with what was possible with
        our back-end and data at that moment.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Set first steps towards event discovery.</li>
          <li>
            Start serving event recommendations to learn how it performs and
            improve the recommendation model.
          </li>
          <li>Increase retention of users.</li>
        </ul>
      </Goals>
    </CaseHeader>

    <main>
      <Chapter title="Opening the app" imagePath="cases/discover/top.jpg">
        <p>
          When an user opens the app the first part they will see is this. Users
          will have the ability to search for the event they want to buy or sell
          tickets for. Other than a global search we also offer two of the most
          used presets to discover events. These presets bring the user to the
          browse events screen with some filters already set.
        </p>
      </Chapter>

      <Chapter title="Search" imagePath="cases/discover/search.jpg">
        <p>
          Most users jump right into the search field after opening TicketSwap.
          I redesigned the search to be scanned easier by moving the date from
          the subtitle to a small calendar, introducing entity specific icons
          and improving the contrast of the text colors.
        </p>
        <p>
          Because our platform is offered in multiple languages and mainly
          exists of user generated content it is important to take this into
          account. In this particular screen that resulted in wrapping search
          result titles and subtitles.
        </p>
      </Chapter>

      <Chapter
        title="Browsing events"
        imagePath="cases/discover/browse-events.jpg"
      >
        <p>
          With the browse event features users can find the right event on the
          right day. During this project my task was to start small and take a
          close look at what we already could implement with the data and
          back-end we had. The result where 3 filters for location, category and
          date.
        </p>
      </Chapter>

      <Chapter
        title="Personalised recommendations"
        imagePath="cases/discover/picked-for-you.jpg"
      >
        <p>
          The data scientists at TicketSwap have worked on an algorithm that
          recommends relevant events to users. This project was the first time
          we were going to implement it as a permanent feature. At TicketSwap we
          don’t have a team that works full time on curated content so I decided
          to make those recommendations the most prominent part of what we call
          the discovery feed.
        </p>
        <p>
          Since Facebook shut down their API’s it is a challenge for us to get
          event images in the platform. To still have rich event cards I used
          images of the artists that are performing. The images also give some
          insight on what kind of event it is and might increase the chance of a
          user navigating to the event page.
        </p>
        <p>
          In the live app the recommendations show up quite subtle and not as in
          this image, this decision was made due to technical constraints and
          will be improved in the future.
        </p>
      </Chapter>

      <Chapter title="Types of content" imagePath="cases/discover/cards.jpg">
        <p>
          With the introduction of the discover feed we started with 4 types of
          content. Event cards, cards for dynamic and fixed collections and blog
          posts. Dynamic collections are lists of events that are updated
          dynamically based on a set of rules. Fixed collections are a list of
          specific events that can be used for events like the Amsterdam Dance
          Event or the Eurovision Song Festival.
        </p>
      </Chapter>

      <CaseFooter
        title="Try it yourself"
        description="Download the iOS or Android app and try out the app yourself."
        url="https://www.ticketswap.com/apps"
        buttonLabel="Download"
      ></CaseFooter>

      <Group title="Next case" description="">
        <Card
          title="Sketch plugin"
          subtitle="Real data with just a click"
          imagePath="thumbs/thumb-plugin.png"
          to="/sketch-plugin/"
        ></Card>
      </Group>
    </main>
  </Layout>
);

export default eventPage;
