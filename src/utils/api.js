import axios from "axios";

const KEY = process.env.VUE_APP_ACCESS_KEY;
const BASE_URL = process.env.VUE_APP_BASE_URL;
const SEARCH_URL = `${BASE_URL}/search/photos`;

export default {
  getPhotos: (query) => {
    return axios.get(`${SEARCH_URL}/?query=${query}&per_page=8&page=1`, {
      headers: { Authorization: `Client-ID ${KEY}` },
    });
  },
};
