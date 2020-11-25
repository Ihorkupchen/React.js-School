import React from "react";
import { useDispatch } from "react-redux";
import LetterList from "./LetterList";
import { selectUser } from "../redux/actions";

function AlphabeticalList({ users }) {
  const alphaUsersList = sortUsersList(users);
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  const dispatch = useDispatch();
  const markUser = (id) => {
    dispatch(selectUser(id));
  };

  return (
    <ul className="alphabetical-list">
      {alphabetArr.map((letter, key) => {
        return (
          <li key={key} className="alphabetical-list__item">
            <h3>{letter}</h3>
            {alphaUsersList.hasOwnProperty(letter) ? (
              <LetterList users={alphaUsersList[letter]} markUser={markUser} />
            ) : (
              <p>---</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function sortUsersList(users) {
  const sortUsers = users.sort((a, b) => {
    if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) {
      return 1;
    }
    if (a.lastName.toUpperCase() < b.lastName.toUpperCase()) {
      return -1;
    }
    return 0;
  });

  const sortUsersList = {};
  sortUsers.forEach((user) => {
    const letter = user.lastName.charAt(0).toUpperCase();
    if (sortUsersList.hasOwnProperty(letter)) {
      sortUsersList[letter].push(user);
    } else {
      sortUsersList[letter] = [];
      sortUsersList[letter].push(user);
    }
  });
  return sortUsersList;
}

export default AlphabeticalList;
