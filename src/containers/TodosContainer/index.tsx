import React, { useState } from "react";
import { useDispatch, useSpState } from "@hooks";
import { todosActions } from "@sp-state";

import styles from "./TodosContainer.module.scss"
import { Todo } from "@components";

type TodosContainerType = {};

const TodosContainer: React.FC<TodosContainerType> = (props) => {
  const [todoLabel, setTodoLabel] = useState('')
  const todos = useSpState((state) => state.todos)
  const dispatch = useDispatch()

  const labelStyle = {
    marginRight: 5
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      id: todos.size + 1,
      todoLabel,
      completed: false
    }

    dispatch(todosActions.addTodo(data))
    setTodoLabel('')
  }

  const todosPendingList = [...todos.values()].map((todo, idx) => <Todo key={`${todo.todoLabel}-${idx}`} {...todo} />)

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle} htmlFor="todo-label">Todo Label</label>
          <input type="text" id="todo-label" value={todoLabel} onChange={(e) => setTodoLabel(e.target.value)} />
        </div>
        <br />
        <input type="submit" value="add todo" />
      </form>

      <br />

      <div>
        <h2>Todos list</h2>
        <br />

        <ul className={styles.todos}>
          {todosPendingList}
        </ul>
      </div>

    </div>
  )
}

export default TodosContainer;