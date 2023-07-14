import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => {
        return setData(response.data[0]);
      });
    setCount(count);
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
  }, [count]); // Never to pass array at the end []
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //   }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <strong>id: </strong> {data.id}
    </div>
  );
}

export default UseEffect;
