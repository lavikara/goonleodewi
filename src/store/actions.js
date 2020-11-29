import api from "../utils/api";

export const getPhotos = ({ commit }) => {
  api
    .getPhotos()
    .then((response) => {
      commit("SET_PHOTOS", response.data);
      commit("SET_LOADING", false);
    })
    .catch((error) => {
      commit("SET_ERROR", error);
      commit("SET_LOADING", false);
    });
};
