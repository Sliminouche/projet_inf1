import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Input from '../components/Input.jsx';
import Button from '../components/Button/Button.jsx';
import AlbumList from '../components/AlbumList.jsx';

export default function SpotifySearch() {
    const [albums, setAlbums] = useState([]);
    const [credentials, setCredentials] = useState({});
    const [error, setError] = useState(null);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [artistName, setArtistName] = useState('');
    const [artistId, setArtistId] = useState('');
    const [similarArtists, setSimilarArtists] = useState([]);

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

    async function fetchArtistId(artistName) {
        try {
            const response = await axios.get(
                `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.access_token}`,
                    },
                }
            );

            const artistId = response.data.artists.items[0].id;
            console.log(artistId);
            return artistId;
        } catch (error) {
            setError('Artiste introuvable. Veuillez réessayer.');
            throw error;
        }
    }

    async function fetchArtistAlbums() {
        try {
            // Fetch artist ID
            const artistId = await fetchArtistId(artistName);

            // Use artistId to fetch albums
            const response = await axios.get(
                `https://api.spotify.com/v1/artists/${artistId}/albums`,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.access_token}`,
                    },
                }
            );

            let albums = response.data.items;

            albums = albums.map((album) => {
                if (album.album_type === 'album') {
                    return {
                        nom: album.name,
                        date_de_sortie: album.release_date,
                        nombre_total_de_musiques: album.total_tracks,
                        image: album.images[0].url,
                    };
                }
            });

            setAlbums(albums);
            setError(null);
            console.log("albums dans le state",albums)

        } catch (error) {
            console.error("Pas d'album trouvé pour cet artiste :", error);
        }
    }

    async function fetchSimilarArtistsByName(artistName) {
        try {
            const response = await axios.get(
                `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=10`,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.access_token}`,
                    },
                }
            );

            const artists = response.data.artists.items.map((artist) => {
                return {
                    image: artist.images[0].url,
                    name: artist.name,
                    id: artist.id,
                    popularity: artist.popularity,
                };
            });

            const sortedArtists = artists.sort((a, b) => b.popularity - a.popularity);

            console.log(artists);
            setSimilarArtists(sortedArtists);
        } catch (error) {
            setError('Artiste introuvable. Veuillez réessayer.');
            throw error;
        }
    }

    return (
        <>
            <div className={'h-screen w-screen py-32 px-52 overflow-y-auto'}>
                <p className={"text-2xl font-bold py-2"}>SpotifySearch</p>
                <p className={"py-2"}>Passionnés par la musique, nous avons décidé d'exploiter l'API Spotify sur deux pages de notre projet.
                    <br/>Dans cette section, il vous suffit d'entrer le nom d'un artiste pour accéder à sa discographie complète (à condition que ce dernier soit disponible et listé sur Spotify).</p>
                <div className={"p-4 bg-white border border-dashed border-gray-400"}>
                    <p className={"font-bold italic"}>Instructions à suivre pour utiliser toutes les fonctionnalités de cette page :</p>
                    <ul className={"list-disc ml-12 mt-1"}>
                        <li>Entrez le nom d'un artiste que vous appréciez et cliquez sur le bouton <strong>"Rechercher"</strong></li>
                        <li>Une fois la liste d'albums chargée, cliquez</li>
                    </ul>
                </div>
                <div className={"mt-2"}>
                    <Input
                        label={"Nom de l'artiste"}
                        className={'w-44'}
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                    <Button
                        title={'Rechercher'}
                        className={
                            'ml-2 font-normal border-black border-dashed bg-emerald-300 hover:bg-emerald-400'
                        }
                        onClick={fetchArtistAlbums}
                    />
                </div>

                {error && <div className={"text-red-400"}>{error}</div>}
                {similarArtists.length !== 0 && (
                    <>
                        <h2>Artistes similaires qui pourraient t'intéresser !</h2>
                        <div className={"flex space-x-4"}>
                            {similarArtists.map((artist) => (
                                <span key={artist.id} className={"text-center"}>
                                    <div>
                                        <img src={artist.image} alt={`Image for ${artist.name}`} className={"w-14 h-114"}/>
                                    <p
                                        className={'text-blue-500 hover:text-blue-700 cursor-pointer hover:underline'}
                                        onClick={() => {
                                            setArtistName(artist.name);
                                            setSimilarArtists([]);
                                            fetchArtistAlbums();
                                        }}
                                    >
                                        {artist.name}
                                    </p>
                                    </div>

                                </span>
                            ))}
                        </div>
                    </>
                )}
                {albums.length !== 0 && (
                    <a className={"text-orange-400 hover:text-orange-500 cursor-pointer hover:underline mt-2"}
                       onClick={() => fetchSimilarArtistsByName(artistName)}>Ce n'est pas l'artiste que vous cherchez
                        ?</a>
                )}
                <AlbumList data={albums}/>

            </div>
        </>
    );
}
