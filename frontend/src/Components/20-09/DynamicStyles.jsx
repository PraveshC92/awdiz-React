import { React, useState } from "react";
import "./DynamicStyles.css";

const DynamicStyles = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  function handleButtonClick() {
    setIsButtonActive(!isButtonActive);
  }

  const ButtonClassName = isButtonActive ? "Active-Button" : "Inactive-Button";

  return (
    <div>
      <h1>Dynamic Styles</h1>
      <button className={ButtonClassName} onClick={handleButtonClick}>
        {isButtonActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
};

export default DynamicStyles;
