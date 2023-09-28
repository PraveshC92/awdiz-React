import { React, useEffect, useState } from "react";

const Effect3 = () => {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    alert("Rendered..? On initial render and when counter changes..");
  }, [counter]);

  return (
    <div>
      <h3>Effect3</h3>
      <h2>Counter : {counter}</h2>
      <button onClick={() => setCount((preVal) => preVal + 1)}>
        Counter +++
      </button>
    </div>
  );
};

export default Effect3;
