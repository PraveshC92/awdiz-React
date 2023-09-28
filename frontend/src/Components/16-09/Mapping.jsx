import React from "react";

const Mappings = ({ id, names }) => {
  console.log({ id, names });
  return (
    <div>
      <h1>Mappings</h1>
      {names.map((name, i) => (
        <div key={i}>
          <h3> Student Name : {name}</h3>
          <h3>Student Id : {i}</h3>
        </div>
      ))}
    </div>
  );
};

export default Mappings;
