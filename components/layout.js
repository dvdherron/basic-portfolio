import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import StoryblokService from "../utils/storyblok-service";

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">{children}</div>

    {StoryblokService.bridge()}
  </div>
);
