import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AlbumButton from '../components/AlbumButton/AlbumButton.jsx';
import {fetchSpotifyCredentials} from "../services/SpotifyService.jsx";

const AlbumDuJour = () => {
  const [albums, setAlbums] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);


  useEffect(() => {
    async function fetchAndSetCredentials() {
      try {
        const credentials = await fetchSpotifyCredentials();
        setCredentials(credentials);
      } catch (error) {
        console.log('Erreur lors de la récupération des credentials : ', error);
      }
    }

    fetchAndSetCredentials();
  }, []);


  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get('https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/albums', {
          headers: {
            Authorization: `Bearer ${credentials.access_token}`,
          },
        });

        setAlbums(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.error('erreur albums : ', error);
      }
    }

    if (credentials.access_token) {
      fetchAlbums();
    }
  }, [credentials]);

  const handleRandomAlbum = () => {
    const randomIndex = Math.floor(Math.random() * albums.length);
    setSelectedAlbum(albums[randomIndex]);
  };

  return (
    <div className="p-16">
      {error && <p className="text-red-500">{error}</p>}
      <div className='flex justify-center mt-12'>
        <AlbumButton
          title={" Quel album écouter aujourd'hui ?"}
          className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
          onClick={handleRandomAlbum}
        />
      </div>

      {selectedAlbum && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold flex justify-center">Album recommandé :</h2>
          <div className="flex justify-center"> {/* Center the content */}
            <img src={selectedAlbum.images[0].url} alt={selectedAlbum.name} className="mt-4 rounded shadow-lg" />
          </div>
          <p className="text-xl font-bold mt-4 flex justify-center">{selectedAlbum.name}</p>
          <p className="text-gray-500 flex justify-center">{selectedAlbum.release_date}</p>
        </div>
      )}
    </div>
  );
};

export default AlbumDuJour;