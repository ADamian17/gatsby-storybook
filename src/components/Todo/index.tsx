import React from "react";
import { useDispatch } from "@hooks";
import { TodoType } from "@types";

import styles from "./Todo.module.scss"
import { todosActions } from "@sp-state";

const Todo: React.FC<TodoType> = ({ todoLabel, id, completed }) => {
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.dataset.action === "remove") {
      dispatch(todosActions.removeTodo(id))
      return
    }

    dispatch(todosActions.completeTodo(id))
  }

  return (
    <li className={`${styles.todo} ${completed && styles.completed}`}>
      <h3 className={styles.todoLabel}>{todoLabel}</h3>

      <button className={styles.removeBtn} onClick={handleClick} data-action="remove">remove</button>
      <button className={styles.completeBtn} onClick={handleClick} disabled={completed}>complete</button>
    </li>
  )
}

export default Todo;