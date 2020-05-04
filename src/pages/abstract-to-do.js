import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import video from "../videos/abstract-to-do.mp4";
import Card from "../components/card/card";
import Group from "../components/group/group";
import CaseFooter from "../components/caseFooter/caseFooter";

const eventPage = () => (
  <Layout>
    <SEO title="Abstract To Do" />
    <CaseHeader title="Abstract To Do" subtitle="Design & development">
      <p>
        When we still worked with{" "}
        <a href="//www.abstract.com/" target="_blank" rel="noopener noreferrer">
          Abstract
        </a>{" "}
        as our version control tool we made use of their design review feature.
        While this feature was useful I was struggling with one thing: having a
        clear overview of all the feedback given by colleagues and being able to
        check them off. When Abstract released their SDK I used it to create an
        app to solve this problem and learn how to use{" "}
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

    <CaseFooter
      title="Try it yourself"
      description="View the source code or download the app"
      url2="//github.com/jelleoverbeek/abstract-todo"
      buttonLabel2="Source Code"
      url="//github.com/jelleoverbeek/abstract-todo/releases/download/0.2.0/To-Dos.for.Abstract-0.2.0.dmg"
      buttonLabel="Download"
    ></CaseFooter>

    <Group title="Next case" description="">
      <Card
        title="Desize"
        subtitle="Simple image resizer, compressor, and converter"
        imagePath="thumbs/thumb-desize.png"
        to="/desize/"
      ></Card>
    </Group>
  </Layout>
);

export default eventPage;
