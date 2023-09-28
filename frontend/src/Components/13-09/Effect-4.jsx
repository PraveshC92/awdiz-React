import { React, useEffect, useState } from "react";

const Effect4 = () => {
  const [counter1, setCount1] = useState(0);
  const [counter2, setCount2] = useState(0);

  useEffect(() => {
    alert("Rendered..? On initial render and when any of the both counters changes..");
  }, [counter1, counter2]);

  return (
    <div>
      <h3>Effect3</h3>
      <h2>Counter 1 : {counter1}</h2>
      <button onClick={() => setCount1((preVal) => preVal + 1)}>
        Counter1 +
      </button>
      <h2>Counter 2 : {counter2} </h2>
      <button onClick={() => setCount2((preVal) => preVal + 1)}>
        Counter2 +
      </button>
    </div>
  );
};

export default Effect4;
