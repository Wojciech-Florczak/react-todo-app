import React from "react";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function TodoItem({
  completed,
  removeTodo,
  toggleTodo,
  editTodo,
  task,
  id
}) {
  const [isEditing, toggle] = useToggle();
  return (
    <ListItem style={{height: "64px"}}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          editTodo={editTodo}
          task={task}
          finishEditing={toggle}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
