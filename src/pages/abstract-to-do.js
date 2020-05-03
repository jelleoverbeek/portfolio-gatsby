import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/abstract-to-do.mp4";

const eventPage = () => (
  <Layout>
    <SEO title="Abstract To Do" />
    <CaseHeader
      title="Abstract To Do"
      subtitle="Product designer"
      liveUrl="//github.com/jelleoverbeek/abstract-todo/releases"
      buttonLabel="Download"
    >
      <p>
        When working with Abstract we made use of the design review feature.
        While this feature was pretty useful in general I was struggling with
        one thing: having a clear overview of all the given feedback and being
        able to check them off. When Abstract released their SDK I used this to
        create an app to solve this problem and learn how to use Electron and
        React.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>
  </Layout>
);

export default eventPage;
