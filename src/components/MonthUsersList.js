import React from "react";

function MonthUsersList({ users, month }) {
  return (
    <ul className="month-users-list">
      {users.map((user) => {
        const date = new Date(Date.parse(user.dob));
        const formatDate =
          date.getDate() + " " + month + ", " + date.getFullYear() + " year";
        return (
          <li key={user.id}>
            {user.lastName + " " + user.firstName + " - " + formatDate}
          </li>
        );
      })}
    </ul>
  );
}

export default MonthUsersList;
