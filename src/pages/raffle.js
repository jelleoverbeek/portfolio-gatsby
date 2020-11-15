import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import Goals from "../components/goals/goals";
import Chapter from "../components/chapter/chapter";
import Card from "../components/card/card";
import Group from "../components/group/group";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import tooLateVideo from "../videos/raffle-too-late.mp4";
import tappingVideo from "../videos/raffle-notification-tapping.mp4";
import raffleIterations from "../videos/raffle-iterations.mp4";
import productionLoserVideo from "../videos/raffle-production-loser.mp4";
import productionWinnerVideo from "../videos/raffle-production-winner.mp4";

const eventPage = () => (
  <Layout>
    <SEO title="Event Page" />
    <CaseHeader
      title="The Raffle"
      subtitle="Product designer"
      liveUrl="#the-result"
    >
      <p>
        TicketSwap is a marketplace for second hand e-tickets. Most people come
        to TicketSwap if the official ticket sale has been sold out. Because
        it's sold out there is often a huge demand for tickets while the supply
        is low. People enable ticket alerts if there are no available tickets
        when the visit the platform. A ticket alert is a push notification that
        will be send as soon as a new ticket becomes available.
      </p>
      <p>
        The tickets are sometimes in such high demand that thousands of people
        are waiting for a notification and immediately tap on it. Currently the
        first person to press the buy button will reserve the ticket in their
        cart, leaving the other people being disappointed.
      </p>
      <p>
        After trying to get a ticket many times people start to lose trust in
        the system. They think bots are getting all the tickets or that our app
        is broken. Another frustration is that they have to spend a lot of time
        on their phones being ready to tap the push notification and the buy
        button.
      </p>
      <p>
        This experience is the most frustrating part of TicketSwap. A lot of
        users complain about it on social media, in reviews, and to our support
        team. Time to improve it.
      </p>

      <Goals>
        <h4>Goals</h4>
        <ul>
          <li>Reduce frustration of users when trying to get a ticket.</li>
          <li>Give all users a fair chance to get a ticket.</li>
        </ul>
      </Goals>
    </CaseHeader>

    <main>
      <VideoPlayer
        videoUrl={tooLateVideo}
        caption="This is the experience of most people after tapping on a notification. The ticket is already being paid for."
      ></VideoPlayer>

      <Chapter
        title="Understanding our current technology"
        imagePath="cases/raffle/flowchart-ticketalerts.png"
        imageCaption="High level visual representation of how ticket alerts are being send out."
        type="border"
      >
        <p>
          We started our research by investigating how our current system
          exactly works. We’ve also looked at what has already tried previously.
          We learned that the system is sending the notifications out in
          batches. The batches are added to a queue. It can take as much as 2
          minutes before the last person receives the ticket alert. This means
          that the ticket most of the times is already sold before the last
          ticket alert reaches the device of the user.
        </p>
        <p>
          In the past we also tried to not send out the remaining batches if the
          ticket was already reserved. This resulted in users contacting support
          because they thought the app wasn't working properly.
        </p>
        <p>
          We also confirmed our assumption that older devices have a lower
          chance of getting a ticket. The listing page will take longer to load
          and so the button can only be pressed later. The same applies to
          people with a slower internet connection. We thought this was not fair
          and also wanted to solve this issue.
        </p>

        <p>
          This part of the research added the following requirements to our
          solution:
          <ul>
            <li>
              It can take up to 2 minutes to send out all ticket alerts, this is
              the minimum time we should wait before making the ticket available
              to buy.
            </li>
            <li>
              We have to sent a notification to every user that enabled ticket
              alerts. Even if the ticket is not available anymore. When we don't
              do that people will think their app is not working properly.
            </li>
            <li>
              The solution must be independent on the quality of the device or
              network being used. This is required to make the solution fair.
            </li>
          </ul>
        </p>
      </Chapter>

      <Chapter
        title="What users are doing right now to get tickets."
        type="border"
      >
        <p>
          After researching our technology we started investigating what our
          users are doing right now. By interviewing our users and looking up
          data we found out three patterns:
          <ul>
            <li>
              They tap on the place where the notification appears and on the
              place of the buy button while waiting for a new ticket alert to
              pop up.
            </li>
            <li>
              They refresh the event page and wait for a listing to appear.
            </li>
            <li>They try to use bots, which is unfair to other users.</li>
          </ul>
        </p>

        <p>
          Except for the users that are trying to use bots, and risking a ban
          while doing that, we confirmed that a lot of frustration is caused by
          endless refreshing or tapping in the pursuit of a ticket.
        </p>

        <p>
          We added two new requirements to our solution:
          <ul>
            <li>
              The solution should decrease the effort and time the users have to
              put into getting a ticket.
            </li>
            <li>
              A nice to have would be decreasing the problems of bots. There is
              also other ways to do this than by changing the system so we
              threaded this requirement as a nice to have.
            </li>
          </ul>
        </p>
      </Chapter>

      <VideoPlayer
        videoUrl={tappingVideo}
        caption="Currently the highest chance of getting a ticket is by tapping on the spot of the notification and where the buy button will appear."
      ></VideoPlayer>

      <Chapter title="Possible directions" type="border">
        <p>
          Except for researching our own technology and user behavior we also
          did an extensive benchmark. We looked at what our competitors were
          doing but also at how other situations with high demand and low supply
          are handled. After this we went into brainstorming directions. We
          filtered out three viable directions.
          <ul>
            <li>
              <b>
                A first come, first serve approach in the form of a waitlist:
              </b>
              The first one that subscribed to the list, will get the first
              ticket that becomes available.
            </li>
            <li>
              <b>A lottery approach:</b> Tickets that become available will be
              randomly distributed.
            </li>
            <li>
              <b>An auction:</b> The highest bidder gets the ticket.
            </li>
          </ul>
        </p>

        <p>
          The first come, first serve approach would possibly decrease the
          growth of our platform. This because the length of a waitlist could
          make it impossible for potential new users to get a ticket. A lottery
          approach is interesting but can also be very demotivating because of
          the lack of control, low chance of getting a ticket and transparency.
          The auction was quickly dismissed because at TicketSwap the selling
          price is capped at 120% of the original price to reduce scalping. In
          an auction there would simply be way too much bids of the same maximum
          price. Based on these arguments we decided to first take a look at a
          lottery direction.
        </p>
      </Chapter>

      <Chapter
        title="The concept"
        imagePath="cases/raffle/flowchart-raffle.png"
        imageCaption="Happy path the raffle concept"
        type="border"
      >
        <p>
          After a lot of brainstorming, sketching and ideation we came up with a
          concept called: The Raffle.
        </p>

        <p>
          With the new concept we will hold a raffle for every listing. The
          raffle will be drawn within 2 minutes after the listing became
          available. This ensures that the seller also has a good experience.
          During the draw we will show everything that is going on to keep the
          process transparent.
        </p>
        <p>
          For every ticket inside the listing a winner will be picked randomly.
          If a user lost we will increase their chance to win in the next
          raffle. Increasing their chance, and making this visible, is a reward
          for putting in effort to get a ticket.
        </p>
      </Chapter>

      <Chapter title="Design, Prototype, Test, Repeat" type="border">
        <p>
          Now the next challenge is to explain the concept of a raffle in a
          short and clear way to our users when trying to get a ticket. After
          sketching out different ways to do this we jumped into a few intense
          days of designing, prototyping and testing.
        </p>
        <p>
          During this phase we focused mainly on creating a flow that made it
          clear how the raffle works in a non-frustrating way. We also wanted to
          make sure that people perceived the raffle as a fair way of
          distributing tickets.
        </p>
        <p>
          We tried out a lot of different ways of explanation. The conclusion
          was that the best way of explaining the new concept was to let them
          experience it. During the experience we would explain it step by step.
        </p>
      </Chapter>

      <VideoPlayer
        videoUrl={raffleIterations}
        caption="A few of the different approaches on explaining the concept to the user."
      ></VideoPlayer>

      <Chapter
        imagePath="cases/raffle/thunder-vs-clover.png"
        imageCaption="Changing the visual representation of the chance a user has to win the raffle it much easier for users to understand the concept."
        type="no-border"
      >
        <p>
          The biggest win in clarity was made by changing the visual
          representation of the higher chance to win the next raffle. We first
          used a thunder icon and called it a "chance boost". Later we changed
          this to a four leaved clover. The clover is a symbol of luck used in
          many countries. The four leaved clover immediately made it clear that
          it was about increasing luck. The thunder icon gave the impression
          that the user with the highest score always wins.
        </p>
      </Chapter>

      <Chapter title="The result" type="border">
        <p>
          Our plan to release the feature during the festival season of 2020
          fell in the water because of corona. Luckily there were a few events
          with tickets in high demand where we could test the feature. View the
          screen recordings
        </p>
        <p>
          These tests went very well and we got quite some enthusiastic
          responses. During these tests we collected valuable feedback that we
          are going to use for our launch version that will hopefully take place
          in 2021 when events get started again. Once it's released I will
          definitely add any metrics and reactions here.
        </p>
      </Chapter>

      <VideoPlayer
        videoUrl={productionLoserVideo}
        caption="Losing the raffle in production"
      />

      <VideoPlayer
        videoUrl={productionWinnerVideo}
        caption="Winning the raffle in production"
      />

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
