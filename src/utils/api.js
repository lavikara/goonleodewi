import axios from "axios";

const KEY = process.env.VUE_APP_ACCESS_KEY;
const BASE_URL = process.env.VUE_APP_BASE_URL;
const PHOTOS_URL = `${BASE_URL}/photos`;

export default {
  getPhotos: () => {
    return axios.get(`${PHOTOS_URL}/?per_page=8&client_id=${KEY}`);
  },
};
