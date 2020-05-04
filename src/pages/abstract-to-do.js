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
      subtitle="Design & development"
      liveUrl="//github.com/jelleoverbeek/abstract-todo/releases"
      buttonLabel="Download"
    >
      <p>
        While we worked with{" "}
        <a href="//www.abstract.com/" target="_blank" rel="noopener noreferrer">
          Abstract
        </a>{" "}
        as our version control tool we made use of their design review feature.
        While this feature was useful in general I was struggling with one
        thing: having a clear overview of all the feedback given by colleagues
        and being able to check them off. When Abstract released their SDK I
        used it to create an app to solve this problem and learn how to use{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="//www.electronjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Electron
        </a>{" "}
        in the meantime.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>
  </Layout>
);

export default eventPage;
