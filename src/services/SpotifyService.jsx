
import axios from 'axios';

const CLIENT_ID = '22c26789d4534a458986c5eca89a9584';
const CLIENT_SECRET = '2bb27261914f464184809d8c17a320d7';

async function fetchSpotifyCredentials() {
    try {
        const authOptions = {
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: 'grant_type=client_credentials',
        };

        const response = await axios(authOptions);
        return response.data;
    } catch (error) {
        console.error('Erreur d\'authentification Spotify : ', error);
        throw error;
    }
}

export { fetchSpotifyCredentials };
