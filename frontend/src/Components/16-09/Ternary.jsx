import React from "react";

const Ternary = ({ isUserLoggedIn, setLogin }) => {
  return (
    <div>
      <h1>Ternary Operator</h1>
      {isUserLoggedIn ? (
        <h1 onClick={() => setLogin((prevValue) => !prevValue)}>Welcome.</h1>
      ) : (
        <button onClick={() => setLogin((prevValue) => !prevValue)}>
          Please Login
        </button>
      )}
      {isUserLoggedIn && <h1>Logged In</h1>}
    </div>
  );
};

export default Ternary;
