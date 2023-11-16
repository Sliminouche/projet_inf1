import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Item = ({ gifUrl, gifName }) => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  // Utilisez des valeurs aléatoires pour rendre l'animation plus dynamique
  const directionX = (Math.random() - 0.9) * 40; // Valeurs entre -20 et 20
  const directionY = (Math.random() - 0.9) * 40; // Valeurs entre -20 et 20

  const downloadGif = () => {
    const gifId = getGifIdFromUrl(gifUrl);
    window.open(`https://giphy.com/gifs/${gifId}/fullscreen`, '_blank');
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Function to extract Giphy GIF ID from the URL
  const getGifIdFromUrl = (url) => {
    const regex = /(?:\/gifs\/|\/embed\/|\/media\/)([^\/\?]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <motion.div
      animate={{ y: [directionY, 0, directionY], x: [directionX, 0, directionX] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex justify-center items-center flex-col relative mb-8"
      style={{ width: '300px' }}
    >
      <img
        style={{ boxShadow: '0 0 7px rgba(0,0,0,0.5)' }}
        src={gifUrl}
        alt={`GIF ${gifName}`}
        className="hover:cursor-pointer h-[500px] w-[300px] hover:opacity-50 object-cover"
        //onClick={() => navigate(`/projet/${gifName}`)}
      />
      {showTooltip && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 hover:cursor-pointer opacity-100 text-[20px] bottom-[10%] p-2 text-black rounded w-full text-center"
        >
          <p>{`GIF ${gifName}`}</p>
          <motion.button
            className="gif-button"
            onClick={downloadGif}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

const Home = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = 'aFpLs75LDF8Y1FgeO8dg5dtViYsUzldc';
    const randomOffset = Math.floor(Math.random() * 100); // Adjust the maximum value based on your needs
    const searchUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=48&offset=${randomOffset}`;

    const fetchGifs = async () => {
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        const gifData = data.data.map((gif) => ({
          url: gif.images.fixed_height.url,
          name: gif.title,
        }));
        setGifs(gifData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
        setLoading(false); 
      }
    };

    fetchGifs();
  }, []);

  return (
    <div className={`px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-10 ${loading ? 'loading' : ''}`}style={{backgroundColor:"#D1DEDE", paddingTop:"100px" }} >
      {gifs.map((gifData, index) => (
        <Item key={index} gifUrl={gifData.url} gifName={gifData.name} />
      ))}
    </div>
  );
};

export default Home;
