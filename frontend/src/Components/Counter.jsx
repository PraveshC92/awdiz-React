import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const [likes, setLiked] = useState(false);

  function likeDislike() {
    setLiked((liked) => !liked);
    if (!likes) {
      setCounter((count) => count + 1);
    } else {
      setCounter((count) => count - 1);
    }
  }

  return (
    <div>
      <h1>Counter Page</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter +
      </button>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        Counter -
      </button>
      <h3>Your Likes : {counter}</h3>
      <button onClick={() => likeDislike()}>Like</button>
    </div>
  );
};

export default Counter;
