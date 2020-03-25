import SbEditable from "storyblok-react";

const Panel = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div>
        <img src={blok.image} />
        <h2>{blok.title}</h2>
        <p>{blok.text}</p>
        <style jsx>{`
          img {
            width: 50%;
          }
        `}</style>
      </div>
    </SbEditable>
  );
};

export default Panel;
