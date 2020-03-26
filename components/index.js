import Placeholder from "./Placeholder";
import Teaser from "./Teaser";
import Panel from "./Panel";
import Nav from "./Nav";

const Components = {
  teaser: Teaser,
  panel: Panel,
  nav: Nav
};

const Component = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
