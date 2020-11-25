import { FETCH_USERS, HIDE_LOADER, SELECT_USER, SHOW_LOADER } from "./types";

const initialState = {
  users: [],
  loading: true,
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SELECT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, selected: !user.selected };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
