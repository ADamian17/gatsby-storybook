import React from "react";
import { useSpState } from "@hooks";

const Count: React.FC = (props) => {
  const { count } = useSpState(({ counter }) => counter)

  return <h3>Count: {count}</h3>
}

export default Count;