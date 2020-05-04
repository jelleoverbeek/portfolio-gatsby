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
    <SEO title="Discover" />
    <CaseHeader title="Discover" subtitle="Product designer">
      <p>
        In the pursuit of becoming the starting point of visiting music events
        TicketSwap also needs features that enable users to discover new events.
        My graduation project was about designing a visionary concept of how
        event discovery on TicketSwap could work. I reused all the research
        learnings from this and combined it with what was possible with our
        back-end and data at that moment.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Set first steps towards event discovery.</li>
          <li>
            Start serving event recommendations to learn from user behaviour and
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
          tickets for. Other than a global search we offer two of the most used
          browse presets. These presets bring the user to the browse events
          screen with some filters already set.
        </p>
      </Chapter>

      <Chapter
        title="Browsing events"
        imagePath="cases/discover/browse-events.jpg"
      >
        <p>
          Using the browse event features users can find the right event on the
          right day. During this project my task was to start small and take a
          close look at what we already could implement with the data and
          back-end we had. The result where 3 filters for location, category and
          the date.
        </p>
      </Chapter>

      <Chapter
        title="Personalised recommendations"
        imagePath="cases/discover/picked-for-you.jpg"
      >
        <p>
          The data scientists at TicketSwap have worked on an algorithm that
          recommends relevant events to users. This project was the first time
          we were going to implement it as a permanent feature.At TicketSwap we
          don’t have a team that works full time on curated content so I decided
          to make those recommendations the most prominent part of what we call
          the discovery feed.
        </p>
        <p>
          Since Facebook shut down their API’s it is a challenge to get event
          images in the platform. To still have rich event cards I used images
          of the artists that are performing. The images also give some insight
          on what kind of event it is and might increase the chance of a user
          navigating to the event page.
        </p>
        <p>
          In the actual app the recommendations actually show up quite subtle,
          this decision was made due to technical constraints and will be
          improved in the future.
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
    </main>
  </Layout>
);

export default eventPage;
