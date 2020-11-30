export const SET_PHOTOS = (state, photos) => {
  let itemsInSubArray = 0;
  if (photos.length <= 6) {
    itemsInSubArray = 2;
  } else if (photos.length <= 3) {
    itemsInSubArray = 1;
  } else {
    itemsInSubArray = 3;
  }
  const newArray = new Array(Math.ceil(photos.length / itemsInSubArray))
    .fill()
    .map((_) => photos.splice(0, itemsInSubArray));
  state.photos = newArray;
};

export const SET_ERROR = (state, error) => {
  state.error = error;
};

export const SET_LOADING = (state, loading) => {
  state.loading = loading;
};

export const SET_SEARCHQUERY = (state, query) => {
  state.searchQuery = query;
};

export const RESET_PHOTOS = (state) => {
  state.photos = [];
};
