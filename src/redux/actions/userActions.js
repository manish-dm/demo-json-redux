export const addToUserList = (data) => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS", payload: data });
};

export const addSelectedUser = (data) => async (dispatch) => {
  dispatch({ type: "GET_SELECTED", payload: data });
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_USER", payload: id });
};
