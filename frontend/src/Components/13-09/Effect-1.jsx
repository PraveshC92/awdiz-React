import { React, useState, useEffect } from "react";

const Effect1 = () => {
  const [counter, setCount] = useState(0);
  useEffect(() =>
    alert(
      "Rendered....it will execute on every render and render causes because of first render, reload or state change"
    )
  );
  return (
    <div>
      <h1>Effect1</h1>
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
