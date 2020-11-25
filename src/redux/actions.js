import { FETCH_USERS, HIDE_LOADER, SELECT_USER, SHOW_LOADER } from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await fetch(
        "https://yalantis-react-school-api.yalantis.com/api/task0/users"
      );
      const data = await response.json();
      dispatch({
        type: FETCH_USERS,
        payload: data.map((user) => {
          return { ...user, selected: false };
        }),
      });
      dispatch(hideLoader());
    } catch (e) {
      alert("Не удалось загрузить список пользователей :( !!!");
    }
  };
}

export function selectUser(id) {
  return {
    type: SELECT_USER,
    payload: id,
  };
}
