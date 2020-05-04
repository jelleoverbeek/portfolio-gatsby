import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/plugin-demo.mp4";

const eventPage = () => (
  <Layout>
    <SEO title="TicketSwap Sketch Plugin" />
    <CaseHeader title="Sketch Plugin" subtitle="Development">
      <p>
        When we still worked with Sketch I developed a plugin that fetched data
        from our production database right into Sketch. This plugin allowed the
        team work with real data very easily and saved us a lot of time.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>
  </Layout>
);

export default eventPage;
