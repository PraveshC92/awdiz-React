import React from "react";
import Styled from "styled-components";
const StyledComponents = () => {
  const Button = Styled.button`
    color: red;
    background-color: blue;
  `;

  return (
    <div>
      <h1>Styled Components</h1>
      <Button>This is a styled button</Button>
    </div>
  );
};

export default StyledComponents;
