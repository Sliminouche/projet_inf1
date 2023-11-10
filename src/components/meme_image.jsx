import React from "react";

export default function MemeComponent({ image, textHaut, textBas }) {
  return (
    <div className="meme">
      <img src={image} alt="meme" className="meme--image" />
      <h1 className="meme--text top">{textHaut}</h1>
      <h1 className="meme--text bottom">{textBas}</h1>
    </div>
  );
}
