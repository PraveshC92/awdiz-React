import { useNavigate } from "react-router-dom";

const Login = () => {
  const router = new useNavigate();

  function goToHomePage() {
    router("/");
  }
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={goToHomePage}>Go to Home Page</button>
    </div>
  );
};

export default Login;
