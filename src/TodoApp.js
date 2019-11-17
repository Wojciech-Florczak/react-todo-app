import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import uuid from "uuid/v4"
import useTodoState from "./hooks/useTodoState"
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  const initialTodos = [{id: uuid(), task: "Pet a dog", completed: false}];
  const {todos, addTodo, editTodo, removeTodo, toggleTodo} = useTodoState(initialTodos)

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
              editTodo={editTodo}
              todos={todos}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
