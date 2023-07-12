import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);
  const [input, setInput] = useState("");
  console.log(text);

  //   const [countInTimeout, setCountInTimeout] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count + 1); //Incremeant value after every 1 s
  //   }, 1000);
  //   // setCount(5);  Update count to be 5 after timeout is scheduled
  // });

  //   Function to increment count by 1

  //   Function to decremeant count by 1

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1); //Incremeant Counter by 1
    setText(!text); //toggle text to true and false
  };

  const decremeantCount = () => {
    // Update state with Decremeant value
    if (count > 0) {
      setCount(count - 1); //Decremeant Counter by 1 if it greater than 0
      setText(!text);
    }
  };
  const inputValue = (e) => {
    const newValue = e.target.value;
    setInput(newValue); //Whenever input change occur it will update/set the value of input
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increase</button>
      {/* Incremeant  */}
      <button onClick={decremeantCount}>Decrease</button> {/* Decremeant  */}
      <input type="text" onChange={inputValue} name="" id="" />{" "}
      {/* Change of Value in react  */}
      {input}
      {text && <p>The text is Enable</p>}
      {/* text if else condition */}
    </div>
  );
};
