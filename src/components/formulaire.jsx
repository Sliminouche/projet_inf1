import React from "react";

export default function FormComponent({ Image, changeMeme, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit} style={{ marginTop : '50px' }}>
      <input
        type="text"
        className="form-input"
        placeholder="Meme top text"
        name="textHaut"
        value={Image.textHaut}
        onChange={changeMeme}
      />
      <input
        type="text"
        className="form-input"
        placeholder="Meme bottom text"
        name="textBas"
        value={Image.textBas}
        onChange={changeMeme}
      />
      <button className="form-button">Change de meme</button>
    </form>
  );
}
