import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import uuid from "uuid/v4";

export default function TodoApp() {
  const initialTodos = [
    { id: uuid(), task: "pet dog", completed: false },
    { id: uuid(), task: "watch tv", completed: true },
    { id: uuid(), task: "play a game", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const removeTodo = todoId => {
    const filteredTodos = todos.filter(e => e.id !== todoId);
    setTodos(filteredTodos);
  };
  const addTodo = newTodo => {
    setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
  };
  const toggleTodo = todoId => {
    const filteredTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(filteredTodos);
  };

  return (
    <>
      <CssBaseline />
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fafafa"
        }}
        elavation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" style={{ marginTop: "1rem" }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
              todos={todos}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
