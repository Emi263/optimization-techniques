import React, { useState, useCallback } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function Parent() {
  console.log("Parent rendered");
  const [data, setData] = useState<number[]>([1, 3, 4, 5, 6]);
  const [state, setState] = useState<boolean>(true);
  const toggleState = () => {
    setState((previousState: boolean) => !previousState);
  };
  const increment = (): void => {
    console.log("increment function created a new reference");
    console.log(data.toString());
  };
  //memoize the function, it will create a new reference (change), only when data changes
  const memoizedIncrement = useCallback(increment, [data]);
  return (
    <div className="parent">
      <ChildOne increment={memoizedIncrement} />
      <ChildTwo />
      <button onClick={toggleState}>Toggle State</button>
    </div>
  );
}
export default React.memo(Parent);
