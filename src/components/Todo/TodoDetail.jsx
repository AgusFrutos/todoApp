import React, { useState } from "react";

import s from "./Todo.module.css";
import TodoEditForm from "./TodoEditForm";

const TodoDetail = ({ todo, deleteTodo, completeTodo, editTodo, saveTodo }) => {
  return (
    <div className={s.todoDetail_container}>
      {todo.edit ? (
        <TodoEditForm todo={todo} saveTodo={saveTodo} />
      ) : (
        <h3 className={todo.complete ? s.h3done : null}>{todo.title}</h3>
      )}
      <div>
        <button onClick={() => deleteTodo(todo.id)}>Borrar</button>
        <button onClick={() => completeTodo(todo.id)}>
          {todo.complete ? "Completado" : "Completar"}
        </button>
        <button disabled={todo.edit} onClick={() => editTodo(todo.id)}>
          Editar
        </button>
      </div>
    </div>
  );
};

export default TodoDetail;
