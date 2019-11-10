import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function TodoItem({ task, completed }) {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText>{task}</ListItemText>
      <ListItemSecondaryAction></ListItemSecondaryAction>
    </ListItem>
  );
}
