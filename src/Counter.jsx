import { useState, useEffect } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    setCount(count + 1);
  };

  useEffect(function printSomething() {
    console.log("useEffect called");
  });

  return (
    <div>
      <h3>Count = {count} </h3>
      <button onClick={incCount}>+1</button>
    </div>
  );
}
