import React, { useContext } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

export default function EditTodoForm({ task, finishEditing, id }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange] = useInputState(task);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value });
    finishEditing();
  };

  return (
    <ListItemText>
      <form
        htmlFor="editTodo"
        onSubmit={handleSubmit}
        style={{ marginLeft: "1rem" }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          fullWidth
          autoFocus
        />
      </form>
    </ListItemText>
  );
}
