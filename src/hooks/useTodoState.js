import useLocalStorageState from "./useLocalStorageState"
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
 
  return {
    todos,
    addTodo: newTodo => {
      setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
    },
    removeTodo: todoId => {
      const filteredTodos = todos.filter(e => e.id !== todoId);
      setTodos(filteredTodos);
    },
    toggleTodo: todoId => {
      const filteredTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(filteredTodos);
    },
    editTodo: (todoId, newTask) => {
      const filteredTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(filteredTodos);
    }
  }
}