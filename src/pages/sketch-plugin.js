import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/plugin-demo.mp4";
import Card from "../components/card/card";
import Group from "../components/group/group";

const eventPage = () => (
  <Layout>
    <SEO title="TicketSwap Sketch Plugin" />
    <CaseHeader title="Sketch Plugin" subtitle="Development">
      <p>
        When we still worked with Sketch I developed a plugin that fetched data
        from our production database right into Sketch. This plugin allowed the
        design team to work with real data very easily and saved us a lot of
        time.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>

    <Group title="Next case" description="">
      <Card
        title="Abstract To Do"
        subtitle="Automatic to do lists for design feedback."
        imagePath="thumbs/thumb-abstract.png"
        to="/abstract-to-do/"
      ></Card>
    </Group>
  </Layout>
);

export default eventPage;
