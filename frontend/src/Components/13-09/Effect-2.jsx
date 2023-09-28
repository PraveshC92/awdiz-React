import { React, useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCount] = useState(0);
  useEffect(
    () =>
      alert(
        "Rendered....it will execute the code only on first render of component"
      ),
    []
  );
  return (
    <div>
      <h1>Effect2</h1>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCount((preVal) => preVal + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Effect1;
