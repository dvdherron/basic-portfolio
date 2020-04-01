import React from "react";
import SbEditable from "storyblok-react";
import "./ImageProfile.scss";

const ImageProfile = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="home--image_container">
        <img src={blok.image} alt={blok.text}></img>
      </div>
    </SbEditable>
  );
};

export default ImageProfile;
