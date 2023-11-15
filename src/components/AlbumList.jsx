import React, {useEffect, useState} from 'react';
import axios from "axios";
import AlbumDetailsModal from "./Modals/AlbumDetailsModal.jsx";

const AlbumList = ({data}) => {

    const [credentials, setCredentials] = useState({}); // les credentials d'auth
    const [albumTracks, setAlbumTracks] = useState([]); // les tracks de l'album sélectionné
    const [selectedAlbum, setSelectedAlbum] = useState(null); // album sélectionné pour le modal
    const [isModalOpen, setIsModalOpen] = useState(false); // état du modal

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

    async function fetchAlbumTrackWithId(albumId) {
        if (albumId.trim() !== '') {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/albums/${albumId}/tracks`,
                    {
                        headers: {
                            Authorization: `Bearer ${credentials.access_token}`
                        },
                    }
                );

                let albumTracks = response.data.items.map((track) => ({
                    id: track.id,
                    nom: track.name,
                    duree: track.duration_ms,
                    lien_de_preview: track.preview_url
                }));

                setAlbumTracks(albumTracks)
            } catch (error) {
                console.error('erreur recherche albums : ', error);
            }
        }
    }

    const openModal = (album) => {
        setIsModalOpen(true);
        setSelectedAlbum(album);
        fetchAlbumTrackWithId(album.id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    function formatElementAttribut(str) {
        const words = str.split('_');

        if (words.length === 0) {
            return str;
        }

        const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        const restOfWords = words.slice(1).join(' ');

        return `${firstWord} ${restOfWords}`;
    }

    function formatDate(dateString) {
        let date = new Date(dateString);
        let formattedMonth = capitalizeFirstLetter(date.toLocaleDateString('fr-FR', {month: 'long'}));
        return `${date.getDate()} ${formattedMonth} ${date.getFullYear()}`;
    }

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!data) {
        return null;
    }

    return (
        <div className={"grid grid-cols-3 gap-x-4 gap-y-6 py-16  "}>
            {data.map((item, index) => (
                <div key={index}
                     className={"cursor-pointer hover:bg-gray-100 hover:ring-2 ring-inset transition duration-100 ring-gray-200 justify-center text-center border border-gray-300 rounded pb-3 px-3"}
                     onClick={() => openModal(item)}>
                    <>
                        {item.image && (
                            <div className={"flex justify-center"}>
                                <img
                                    src={item.image}
                                    alt={`Image for ${item.image}`}
                                    className={"w-56 my-4"}
                                />
                            </div>
                        )}

                        {Object.keys(item)
                            .filter((key) => key !== 'image' && key !== 'id') // permet d'ignorer l attribut id
                            .map((key, i) => (
                                <div key={i} className={""}>
                                    <strong>{formatElementAttribut(key)}</strong>
                                    {`: ${key === 'date_de_sortie' ? formatDate(item[key]) : item[key]} `}
                                </div>
                            ))}
                    </>

                </div>
            ))}


            {selectedAlbum && (
                <AlbumDetailsModal open={isModalOpen} setOpen={closeModal} album={selectedAlbum}
                                   albumTracks={albumTracks}/>
            )}
        </div>
    );
};

export default AlbumList;
