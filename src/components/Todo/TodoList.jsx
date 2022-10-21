import React from "react";
import TodoDetail from "./TodoDetail";

const TodoList = ({
  tasks,
  idTodos,
  deleteTodo,
  completeTodo,
  editTodo,
  saveTodo,
}) => {
  const filteredTodos = tasks.filter((todo) => {
    switch (idTodos) {
      case "completed": {
        return todo.complete;
      }
      case "uncompleted": {
        return !todo.complete;
      }

      default:
        return todo;
    }
  });

  return (
    <>
      {filteredTodos.map((todo) => (
        <TodoDetail
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
