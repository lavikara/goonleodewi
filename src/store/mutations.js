export const SET_PHOTOS = (state, photos) => {
  const itemsInSubArray = 3;
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
