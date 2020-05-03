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
        TicketSwap also wants to add event discovery features. During this
        project we started to make the first steps to add those features. My
        graduation project was about designing a visionary concept of how event
        discovery on TicketSwap could work. I reused all the research I did and
        learnings from this and combined it with what was possible with our data
        at that moment.
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
        title="Browse events"
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
          The data scientists at TicketSwap have worked on creating a system
          that could recommend relevant events to users. This project was the
          first time we were going to implement it and show the recommendations
          to the users.
        </p>
        <p>
          At TicketSwap we didn’t have a team that could work fulltime on
          curated content so I decided to make those recommendations the most
          prominent part of the app. The avatars of the artists already give
          some insight in what kind it is and also help to create a rich event
          card when there is no event image available.
        </p>
        <p>
          In the actual app the recommendations actually show up quite subtle,
          this decision was made based on technical constraints and will be
          improved in the future.
        </p>
      </Chapter>

      <Chapter title="Types of content" imagePath="cases/discover/cards.jpg">
        <p>
          Another new type of content are collections. The curators at
          TicketSwap can create dynamic collections using filters but also
          static collections that can be used for big events like the Amsterdam
          Dance Event.
        </p>
      </Chapter>
    </main>
  </Layout>
);

export default eventPage;
