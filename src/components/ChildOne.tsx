import React, { useRef } from "react";

interface props {
  increment: () => void;
}

const ChildOne = ({ increment }: props) => {
  const value = useRef(0);
  console.log("Child one rendered");
  increment();
  return (
    <div>
      <span>Child one</span>
      <span>Value: {value.current}</span>
    </div>
  );
};
//Child one will render when it props change
export default React.memo(ChildOne);
