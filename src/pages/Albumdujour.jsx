import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AlbumButton from '../components/AlbumButton/AlbumButton.jsx';

const SpotifySearch = () => {
  const [albums, setAlbums] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    async function fetchCredentials() {
      try {
        const client_id = '22c26789d4534a458986c5eca89a9584';
        const client_secret = '2bb27261914f464184809d8c17a320d7';

        const authOptions = {
          method: 'post',
          url: 'https://accounts.spotify.com/api/token',
          headers: {
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: 'grant_type=client_credentials',
        };

        const response = await axios(authOptions);

        setCredentials(response.data);
      } catch (error) {
        console.error('erreur authentification : ', error);
      }
    }

    fetchCredentials();
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
       <AlbumButton
        title={" Quel album écouter aujourd'hui ?"}
        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        onClick={handleRandomAlbum}
      />
      {selectedAlbum && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Album recommandé :</h2>
          <img src={selectedAlbum.images[0].url} alt={selectedAlbum.name} className="mt-4 rounded shadow-lg" />
          <p className="text-xl font-bold mt-4">{selectedAlbum.name}</p>
          <p className="text-gray-500">{selectedAlbum.release_date}</p>
        </div>
      )}
    </div>
  );
};


export default SpotifySearch;


/*

      <button
        onClick={handleRandomAlbum}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Quel album écouter aujourd'hui ?
      </button>
      */