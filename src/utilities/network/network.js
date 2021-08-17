import axios from 'axios';

let serverURL;

if (process.env.NODE_ENV === 'development') {
    serverURL = process.env.REACT_APP_SERVER_URL || console.error("Server port not initialised in .env");
}
else {
    serverURL = '/'
}

export const API = axios.create({
    baseURL: serverURL,
    headers: { 'Content-Type': 'application/json' }
});