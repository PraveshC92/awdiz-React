import { React } from "react";
import { useNavigate } from "react-router-dom";

const Params = () => {
  const router = useNavigate();
  function goToSingleProduct() {
    router("/SingleProduct/12345");
  }
  return (
    <div>
      <h1> Params</h1>
      <button onClick={goToSingleProduct()}>Go to Single Product</button>
    </div>
  );
};

export default Params;
