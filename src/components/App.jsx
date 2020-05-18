import React from "react";
import Login from "./Login";

let isLoogedIn = false;

function App() {
  return (
    <div className="container">
      {isLoogedIn ? <h1>You are logged in!</h1> : <Login />}
    </div>
  );
}

export default App;
