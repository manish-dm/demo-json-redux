const INITIAL_STATE = {
  userList: [],
  selected: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        userList: payload,
      };

    case "GET_SELECTED":
      return {
        ...state,
        selected: payload,
      };

    case "DELETE_USER":
      return {
        ...state,
        userList: state.userList.filter((user) => user.id !== payload),
      };

    default:
      return state;
  }
};

export default userReducer;
