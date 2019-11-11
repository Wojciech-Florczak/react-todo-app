import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";

export default function TodoList({ removeTodo, toggleTodo, todos }) {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <TodoItem
            task={todo.task}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </List>
    </Paper>
  );
}
