import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

import TodoItem from "./TodoItem";
import { TodosContext } from "./contexts/todos.context";

export default function TodoList({ removeTodo, toggleTodo, editTodo }) {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={todo.id}>
              <TodoItem {...todo} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
