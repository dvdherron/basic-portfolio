import React from "react";
import SbEditable from "storyblok-react";
import "./Teaser.scss";

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <header className="header--home">
        <h1>{blok.headline}</h1>
        <div className="container--home__text">
          <p>{blok.body}</p>
          <p>{blok.graf}</p>
        </div>
        <img src={blok.image}></img>
      </header>
    </SbEditable>
  );
};

export default Teaser;
