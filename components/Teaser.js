import React from "react";
import SbEditable from "storyblok-react";
import "./Teaser.scss";

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="container--header">
        <header>
          <h1>{blok.headline}</h1>
          <p>{blok.body}</p>
          <p>{blok.graf}</p>
        </header>
      </div>
    </SbEditable>
  );
};

export default Teaser;
