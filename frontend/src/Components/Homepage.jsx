import { useNavigate } from "react-router-dom";

function Homepage() {
  const router = new useNavigate();

  function routeToLogin() {
    router("/Login");
  }
  return (
    <div>
      <h1>React Application - Home Page</h1>
      <button onClick={routeToLogin}>Go to Login Page</button>
      <button
        onClick={() => {
          router("/Profile");
        }}
      >
        Go to Profile Page
      </button>
      <button
        onClick={() => {
          router("/Register");
        }}
      >
        Go to Register
      </button>
      <button
        onClick={() => {
          router("/Counter");
        }}
      >
        Go to Counter
      </button>
    </div>
  );
}

export default Homepage;
