import { React, useState } from "react";

const Registeration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
  };
  return (
    <div>
      <h1>Registeration Form</h1>
      <form>
        <label>Name: </label>
        <br />
        <input name="userName" onChange={handleChange} type="text" />
        <br />
        <label>Email: </label>
        <br />
        <input name="email" onChange={handleChange} type="email" />
        <br />
        <label>Password: </label>
        <br />
        <input name="password" onChange={handleChange} type="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default Registeration;
