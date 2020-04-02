import React from "react";
import Page from "../components/Page";
import Layout from "../components/layout";
import StoryblokService from "../utils/storyblok-service";

export default class extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.page.data.story.content);
    this.state = {
      pageContent: props.page.data.story.content
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    let [page, settings] = await Promise.all([
      StoryblokService.get("cdn/stories/about"),
      StoryblokService.get("cdn/stories/settings")
    ]);

    return {
      page,
      settings
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const settingsContent = this.props.settings.data.story;
    const bodyOfPage = this.state.pageContent.body;

    return (
      <Layout settings={settingsContent}>
        <Page body={bodyOfPage} />
      </Layout>
    );
  }
}
