import React, { useState } from "react";
import FormComponent from "../components/formulaire";
import MemeComponent from "../components/MemeImage/memeImage";

const About = () => {
  const [Memes, setMemes] = useState([]);
  const apiUrl = "https://api.imgflip.com/get_memes";
  const [Image, setImage] = useState({
    textHaut: "",
    textBas: "",
    image: "https://i.imgflip.com/145qvv.jpg",
  });

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(apiUrl);
        if (res.ok) {
          const data = await res.json();
          setMemes(data.data.memes);
        } else {
          console.error('La requête a échoué.');
        }
      } catch (error) {
        console.error('Une erreur s\'est produite : ', error);
      }
    }
    fetchData();
  }, []);

//Choisit un element au hasard depuis le tableau Memes
  function getImage() {
      return Memes[Math.floor(Math.random() * Memes.length)].url;
  }
  

  function changeMeme(event) {
    const { name, value } = event.target;
    setImage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setImage((prevState) => ({
      ...prevState,
      image: getImage(),
    }));
  }
  return (
    <main>
      <FormComponent Image={Image} changeMeme={changeMeme} handleSubmit={handleSubmit} />
      
      <MemeComponent image={Image.image} textHaut={Image.textHaut} textBas={Image.textBas} />


    </main>
  )
}

export default About