import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Todo.module.css";

const TodoForm = ({ handleTodo, removeTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleTodo(text);
    setText("");
  };

  return (
    <div className={s.todoForm_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Añadir Tareas"
        ></input>
        <button>+</button>
        <button onClick={removeTodos}>Borrar Tareas</button>
        <label>Filtrar:</label>
        <Link to="/todos">Todos</Link>
        <Link to="/todos/completed">Completos</Link>
        <Link to="/todos/uncompleted">Incompletos</Link>
      </form>
    </div>
  );
};

export default TodoForm;
