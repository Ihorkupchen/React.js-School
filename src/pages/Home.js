import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Тестове завдання для Yalantis React.js School</h1>
      <Link to="/employees">EMPLOYEES</Link>
    </div>
  );
}

export default Home;
