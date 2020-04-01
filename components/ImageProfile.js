import React from "react";
import SbEditable from "storyblok-react";

const ImageProfile = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="container--header">
        <img src={blok.image} alt={blok.text}></img>
      </div>
    </SbEditable>
  );
};

export default ImageProfile;
