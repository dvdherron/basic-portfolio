import Placeholder from "./Placeholder";
import Teaser from "./Teaser";
import Panel from "./Panel";
import Nav from "./Nav";
import ImageProfile from "./ImageProfile";
import Column from "./Column";
import "./index.scss";

const Components = {
  teaser: Teaser,
  panel: Panel,
  nav: Nav,
  imageProfile: ImageProfile,
  column: Column
};

const Component = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
