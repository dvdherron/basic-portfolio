import React from "react";
import Page from "../components/Page";
import Layout from "../components/layout";
import StoryblokService from "../utils/storyblok-service";
import "./work.scss";

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
      StoryblokService.get("cdn/stories/work"),
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
        <main>
          {bodyOfPage.map((panel, index) => (
            <div className="work--item" key={index}>
              <h2>{panel.title}</h2>
              <img src={panel.image}></img>
              <p>{panel.text}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href={panel.link.cached_url}
              >
                view project
              </a>
            </div>
          ))}
        </main>
      </Layout>
    );
  }
}
