import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <TodoItem
              task={todo.task}
              id={todo.id}
              completed={todo.completed}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
