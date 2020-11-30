import api from "../utils/api";

export const getPhotos = ({ commit }, query) => {
  commit("SET_SEARCHQUERY", query);
  api
    .getPhotos(query)
    .then((response) => {
      commit("SET_PHOTOS", response.data.results);
      commit("SET_LOADING", false);
    })
    .catch((error) => {
      commit("SET_ERROR", error);
      commit("SET_LOADING", false);
    });
};

export const resetPhotos = ({ commit }) => {
  commit("RESET_PHOTOS");
};

export const resetLoading = ({ commit }, loading) => {
  commit("SET_LOADING", loading);
};
