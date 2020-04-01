import React from "react";
import Head from "../components/head";
import Nav from "../components/Nav";
import StoryblokService from "../utils/storyblok-service";

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <div className="util__container">
      <Nav settings={settings} />
      {children}
    </div>

    {StoryblokService.bridge()}
  </div>
);
