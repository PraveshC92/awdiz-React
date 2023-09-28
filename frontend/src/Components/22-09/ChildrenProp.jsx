import React from "react";

const ChildrenProps = () => {
  return (
    <>
      <Heading> This is h1</Heading>
      <Button>Message</Button>
    </>
  );
};

const Button = ({ children }) => {
  return <button>{children}</button>;
};

const Heading = ({ props }) => {
  return <h1>{props}</h1>;
};

export default ChildrenProps;
