import { React, useState, useEffect } from "react";

const Counterse = () => {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    if (counter == 10) {
      alert("Value has reached to 10");
    }
  });
  return (
    <div>
      <h1>Counter : {counter} </h1>
      <button
        onClick={() => {
          setCount((preVal) => preVal + 1);
        }}
      >
        Add+
      </button>
    </div>
  );
};

export default Counterse;
