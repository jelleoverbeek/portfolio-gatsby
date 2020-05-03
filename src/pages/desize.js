import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/desize.mp4";

const eventPage = () => (
  <Layout>
    <SEO title="Desize" />
    <CaseHeader
      title="Desize"
      subtitle="Product designer"
      liveUrl="//desize.app"
      buttonLabel="Download"
    >
      <p>
        I was in search of a small side project to learn Typescript. I came up
        with the idea to create a small app that allowed users to quickly
        resize, compress and convert big amounts of images. The result was the
        app Desize.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>
  </Layout>
);

export default eventPage;
