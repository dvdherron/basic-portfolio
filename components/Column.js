import React from "react";
import SbEditable from "storyblok-react";

const Column = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <p>{blok.text}</p>
    </SbEditable>
  );
};

export default Column;
