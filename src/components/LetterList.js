import React from "react";

function LetterList({ users, markUser }) {
  const onChangeToggle = (id) => {
    markUser(id);
  };

  return (
    <ul className="letter-list">
      {users.map((user) => {
        return (
          <li key={user.id} className="letter-list__item">
            <span>{user.lastName + " " + user.firstName}</span>
            <input
              type="checkbox"
              checked={user.selected}
              onChange={() => onChangeToggle(user.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default LetterList;
