import React from "react";
function ChildTwo() {
  console.log("Child two rendered");
  return <div>Child Two</div>;
}

//rerenders only when its props change
export default React.memo(ChildTwo);
