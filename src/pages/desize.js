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
      subtitle="Design & development"
      liveUrl="//desize.app"
      buttonLabel="Download"
    >
      <p>
        The best way to learn something new is by just doing it. To learn{" "}
        <a
          href="//www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{" "}
        and improve my Electron knowledge I created a small app called “Desize”.
        It is a open source image resizer, converter and compressor. It was
        built upon the library Sharp which makes it blazing fast at processing
        big amounts of images.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>
  </Layout>
);

export default eventPage;
