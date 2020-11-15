import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/desize.mp4";
import Card from "../components/card/card";
import Group from "../components/group/group";
import CaseFooter from "../components/caseFooter/caseFooter";

const eventPage = () => (
  <Layout>
    <SEO title="Desize" />
    <CaseHeader title="Desize" subtitle="Design & development">
      <p>
        The best way to learn something new is by just doing it. To learn{" "}
        <a
          href="//www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{" "}
        and improve my Electron knowledge I created a small app called Desize.
        It is an open source image resizer, converter and compressor. It was
        built upon the library Sharp which makes it blazing fast at processing
        big amounts of images.
      </p>
    </CaseHeader>
    <VideoPlayer videoUrl={video}></VideoPlayer>

    <CaseFooter
      title="Try it yourself"
      description="View the source code or download the app"
      url2="//github.com/jelleoverbeek/desize"
      buttonLabel2="Source Code"
      url="//desize.app"
      buttonLabel="Download"
    ></CaseFooter>

    <Group title="Next case" description="">
      <Card
        title="The raffle"
        subtitle="Fairly distributing a few tickets between thousands of people."
        imagePath="thumbs/thumb-raffle.png"
        to="/raffle/"
      ></Card>
    </Group>
  </Layout>
);

export default eventPage;
