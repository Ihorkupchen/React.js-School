import React, { useEffect } from "react";
import AlphabeticalList from "../components/AlphabeticalList";
import EmployeesBirthday from "../components/EmployesBirthday";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions";
import { Link } from "react-router-dom";

function Employees() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, []);

  if (loading || users.length === 0) {
    return <h3>Загрузка ...</h3>;
  }

  return (
    <>
      <Link to="/"> GO HOME</Link>
      <h1 className="header">Employees</h1>
      <div className="container">
        <AlphabeticalList users={users} />
        <EmployeesBirthday users={users} />
      </div>
    </>
  );
}

export default Employees;
