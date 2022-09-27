import "./Database.css";
import React from "react";

const Database = (props) => {
  const [count, setCount] = React.useState(0);
  return (
    <h1>
      <h4>{props.name}</h4>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </h1>
  );
};

export default Database;
