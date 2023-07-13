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
  }, []);

  return (
    <div>
      <strong>id: </strong> {data.id}
    </div>
  );
}

export default UseEffect;
