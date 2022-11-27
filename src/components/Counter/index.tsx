import React from "react";
import { useDispatch } from "@hooks";
import { counterActions } from "@sp-state";

type CounterType = {};

const Counter: React.FC<CounterType> = (props) => {
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.dataset.type === "decrease") {
      dispatch(counterActions.decrease())
      return;
    }

    dispatch(counterActions.increase())
  }

  return (
    <div>
      <button onClick={handleClick} data-type='decrease'>-</button>
      <button onClick={handleClick} data-type='increase'>+</button>
    </div>
  )
}

export default Counter;