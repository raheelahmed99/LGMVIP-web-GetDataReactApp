import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUserData = async () => {
    const response = await fetch("https://api.github.com/users");
    const jsonResponse = await response.json();
    setUsers(jsonResponse);
  };
  return (
    <div className="App">
      <h1>Display Users Data </h1>

      <p>
        Fetching data through APIs
        <button onClick={loadUserData}>Get Data</button>
      </p>
      <ul>
        {users.map(
          ({
            id,
            login,
            avatar_url,
            organizations_url,
            node_id,
            followers_url
          }) => (
            <li keyrr={id}>
              <tr>ID#{id}</tr> <tr>Name: {login}</tr>{" "}
              <tr>Avator: {avatar_url}</tr>{" "}
              <tr>Organizations: {organizations_url}</tr>{" "}
              <tr>Node id: {node_id}</tr> <tr>Followers: {followers_url}</tr>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default App;

