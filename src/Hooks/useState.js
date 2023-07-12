import React, { useEffect, useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  //   const [countInTimeout, setCountInTimeout] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1); //Incremeant value after every 1 s
    }, 1000);
    // setCount(5);  Update count to be 5 after timeout is scheduled
  });

  //   Function to increment count by 1
  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };

  //   Function to decremeant count by 1
  const decremeantCount = () => {
    // Update state with Decremeant value
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={incrementCount}>Increase</button>
      <button onClick={decremeantCount}>Decrease</button>
    </div>
  );
};
