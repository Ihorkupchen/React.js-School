import React from "react";
import MonthsList from "./MonthsList";

function EmployeesBirthday({ users }) {
  const selectedUsers = users.filter((user) => {
    return user.selected;
  });

  return (
    <div className="employees-birthday">
      <h2 className="header">Employees Birthday</h2>
      <MonthsList users={selectedUsers} />
    </div>
  );
}

export default EmployeesBirthday;
