import api from "../utils/api";

export const getPhotos = ({ commit }, query) => {
  api
    .getPhotos(query)
    .then((response) => {
      if (response.data.results.length === 0) {
        alert("nothing to show");
      }
      commit("SET_PHOTOS", response.data.results);
      commit("SET_LOADING", false);
    })
    .catch((error) => {
      commit("SET_ERROR", error);
      commit("SET_LOADING", false);
    });
};
