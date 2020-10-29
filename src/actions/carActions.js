export const removeFeature = item => dispatch => {
  dispatch({ type: "REMOVE_FEATURE", payload: item });
};

export const buyItem = item => dispatch => {
  dispatch({ type: "BUY_ITEM", payload: item });
};
