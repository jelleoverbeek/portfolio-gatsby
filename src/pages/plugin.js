import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CaseHeader from "../components/caseHeader/caseHeader";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import sketchPluginVideo from "../videos/sketch-plugin.mp4";
import figmaPluginVideo from "../videos/figma-plugin.mp4";
import Card from "../components/card/card";
import Group from "../components/group/group";
import Tabs from "../components/tabs/tabs";

const eventPage = () => (
  <Layout>
    <SEO title="Figma & Sketch plugin" />
    <CaseHeader title="Figma & Sketch plugin" subtitle="Development">
      <p>
        I developed a Figma and Sketch plugin that fetches data from our
        production database right into the design tools. These plugins allow the
        design team to work with real data very easily and saves us a lot of
        time.
      </p>
    </CaseHeader>

    <Tabs
      tabs={[
        {
          title: "Figma",
          content: <VideoPlayer videoUrl={figmaPluginVideo}></VideoPlayer>,
        },
        {
          title: "Sketch",
          content: <VideoPlayer videoUrl={sketchPluginVideo}></VideoPlayer>,
        },
      ]}
    ></Tabs>

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
