import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form htmlFor="todos" onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
