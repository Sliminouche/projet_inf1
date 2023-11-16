import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';
import AlbumList from '../components/AlbumList.jsx';
import {fetchSpotifyCredentials} from "../services/SpotifyService.jsx";

export default function SpotifyResearch() {
    const [albums, setAlbums] = useState([]);
    const [credentials, setCredentials] = useState({});
    const [error, setError] = useState(null);
    const [artistName, setArtistName] = useState('');
    const [similarArtists, setSimilarArtists] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        async function fetchAndSetCredentials() {
            try {
                const credentials = await fetchSpotifyCredentials();
                setCredentials(credentials);
            } catch (error) {
                console.log(error)
            }
        }

        fetchAndSetCredentials();
    }, []);


    async function fetchArtistId(artistName) {
        if (artistName.trim() === '') {
            setError("L'input ne peut être vide, saisis un nom d'artiste !");
        } else {
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
    }

    async function fetchArtistAlbums() {
        try {
            const artistId = await fetchArtistId(artistName);

            const response = await axios.get(
                `https://api.spotify.com/v1/artists/${artistId}/albums`,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.access_token}`,
                    },
                }
            );

            let albums = response.data.items;
            console.log("albums raw", albums)

            albums = albums
                .map((album) => {
                    if (album.album_type === 'album') {
                        return {
                            nom: album.name,
                            date_de_sortie: album.release_date,
                            nombre_total_de_musiques: album.total_tracks,
                            image: album.images[0].url,
                            id: album.id
                        };
                    } else {
                        return null;
                    }
                })
                .filter((album) => album !== null);

            setAlbums(albums);

            setError(null);
            console.log("albums dans le state", albums)

        } catch (error) {
            console.error("Pas d'album trouvé pour cet artiste :", error);
        }
    }

    async function fetchArtistAlbumsById(artistId) {
        try {
            const response = await axios.get(
                `https://api.spotify.com/v1/artists/${artistId}/albums`,
                {
                    headers: {
                        Authorization: `Bearer ${credentials.access_token}`,
                    },
                }
            );

            let albums = response.data.items
                .filter((album) => album.album_type === 'album')
                .map((album) => ({
                    nom: album.name,
                    date_de_sortie: album.release_date,
                    nombre_total_de_musiques: album.total_tracks,
                    image: album.images[0]?.url || null,
                    id: album.id,
                }));

            setAlbums(albums);
            setError(null);
            console.log("Albums dans le state :", albums);
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
                const imageUrl = artist.images.length > 0 ? artist.images[0].url : null;

                return {
                    image: imageUrl,
                    name: artist.name,
                    id: artist.id,
                    popularity: artist.popularity,
                };
            });


            const sortedArtists = artists.sort((a, b) => b.popularity - a.popularity);

            console.log(artists);
            setSimilarArtists(sortedArtists);
        } catch (error) {
            console.log(error)
            setError('Artiste introuvable. Veuillez réessayer.');
            throw error;
        }
    }

    const handleButtonClick = async () => {
        try {
            setLoading(true);
            setSimilarArtists([]);
            await fetchArtistAlbums();
        } catch (error) {
            //
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }
    };

    const handleSimilarArtistClick = async (artist) => {
        setArtistName(artist.name);
        setSimilarArtists([]);
        await fetchArtistAlbumsById(artist.id);
    };


    return (
        <>
            <div className={'h-screen w-screen py-32 px-52 overflow-y-auto'}>
                <p className={"text-2xl font-bold py-2"}>SpotifyResearch</p>
                <p className={"py-2"}>Passionnés par la musique, nous avons décidé d'exploiter l'API Spotify sur deux
                    pages de notre projet.
                    <br/>Dans cette section, il vous suffit d'entrer le nom d'un artiste pour accéder à sa discographie
                    complète (à condition que ce dernier soit disponible et listé sur Spotify).</p>
                <div className={"p-4 bg-white border border-dashed border-gray-400"}>
                    <p className={"font-bold italic"}>Instructions à suivre pour utiliser toutes les fonctionnalités de
                        cette page :</p>
                    <ul className={"list-disc ml-12 mt-1"}>
                        <li>Entrez le nom d'un artiste que vous appréciez et cliquez sur le
                            bouton <strong>"Rechercher"</strong></li>
                        <li>Une fois la liste d'albums chargée, cliquez sur un des albums listés pour accéder aux
                            détails de ce dernier.
                        </li>
                        <li>Vous pourrez ainsi visualiser les 20 premières tracks de l'album sélectionné.</li>
                        <li className={"text-rose-moche"}>Si l'artiste retourné lors de la recherche ne vous convient
                            pas, le lien <strong>Ce n'est pas l'artiste que vous cherchez ?</strong> vous permettra
                            d'afficher une liste de 10 artistes similaires !
                        </li>
                        <li className={"text-rose-moche"}>Il ne vous reste plus qu'à cliquer sur cet artiste pour
                            afficher automatiquement ses albums.
                        </li>
                    </ul>
                </div>
                <div className={"mt-2 flex items-end"}>
                    <Input
                        label={"Nom de l'artiste"}
                        className={'w-44'}
                        value={artistName}
                        required={true}
                        onChange={(e) => setArtistName(e.target.value)}
                        onEnterPress={handleButtonClick}
                        error={error}
                    />

                    <Button
                        title={'Rechercher'}
                        className={'w-28 h-10 ml-2 font-normal border-black border-dashed bg-emerald-300 hover:bg-emerald-400 '}
                        onClick={handleButtonClick}
                        loading={loading}
                    />
                </div>


                {error && <div className={"text-red-400"}>{error}</div>}
                {albums.length !== 0 && (
                    <div className={"mt-2"}>

                        <a className={"text-red-500  hover:text-red-600 cursor-pointer hover:underline mt-3"}
                           onClick={() => fetchSimilarArtistsByName(artistName)}>Ce n'est pas l'artiste que vous
                            cherchez
                            ?</a>
                    </div>
                )}
                {similarArtists.length !== 0 && (
                    <>
                        <div className={"mt-4 bg-gray-100"}>
                            <h2 className={" w-fit px-2 pt-1 rounded-t-sm"}>Artistes similaires qui pourraient
                                t'intéresser !</h2>
                            <div className={"flex space-x-2 bg-gray-100 rounded-sm justify-center py-2"}>
                                {similarArtists.map((artist, index) => (
                                    <span key={artist.id} className={"text-center"}>
                                        <div
                                            className={`p-2 ${index === 0 ? 'ml-2' : ''} ${index === similarArtists.length - 1 ? 'mr-2' : ''} 
                                            border rounded hover:cursor-pointer hover:ring-2 ring-inset ring-gray-200 border-gray-300`}
                                            onClick={() => handleSimilarArtistClick(artist)}
                                        >
                                            <div className={"flex justify-center"}>
                                                <img src={artist.image}
                                                     alt={`${artist.name}`}
                                                     className={"w-14 h-14 rounded"}
                                                />
                                            </div>
                                            <p className={'text-gray-700'}>
                                                {artist.name}
                                            </p>
                                        </div>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                <AlbumList data={albums} spotifyCredentials={credentials}/>

            </div>
        </>
    )
        ;
}
