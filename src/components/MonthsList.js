import React from "react";
import MonthUsersList from "./MonthUsersList";

function MonthsList({ users }) {
  if (users.length === 0) {
    return <h4 style={{ textAlign: "center" }}>No selected employees</h4>;
  }

  const usersGroupByMonth = groupByMonth(users);

  return (
    <ul className="months-list">
      {Object.keys(usersGroupByMonth).map((month, key) => {
        return (
          <li key={key} className="months-list__item">
            <h3>{month}</h3>
            <MonthUsersList month={month} users={usersGroupByMonth[month]} />
          </li>
        );
      })}
    </ul>
  );
}

function groupByMonth(users) {
  const months =
    "January February March April May June July August September October November December";
  const monthsArr = months.split(" ");
  const sortUsersByMonth = users.sort((a, b) => {
    const dateA = new Date(Date.parse(a.dob));
    const dateB = new Date(Date.parse(b.dob));
    return dateA.getMonth() - dateB.getMonth();
  });

  const usersGroupByMonth = {};
  sortUsersByMonth.forEach((user) => {
    const date = new Date(Date.parse(user.dob));
    if (usersGroupByMonth.hasOwnProperty(monthsArr[date.getMonth()])) {
      usersGroupByMonth[monthsArr[date.getMonth()]].push(user);
    } else {
      usersGroupByMonth[monthsArr[date.getMonth()]] = [user];
    }
  });
  return usersGroupByMonth;
}

export default MonthsList;
