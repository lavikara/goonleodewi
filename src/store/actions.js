import api from "../utils/api";

export const getPhotos = ({ commit }) => {
  api
    .getPhotos()
    .then((response) => {
      commit("SET_PHOTOS", response.data);
    })
    .catch((error) => {
      commit("SET_ERROR", error);
    });
};
