import React, { useState } from "react";

const TodoEditForm = ({ todo, saveTodo }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="editText"
        value={newTitle}
        placeholder={todo.title}
        onChange={handleChange}
      ></input>
      <button disabled={newTitle.length === 0} onClick={() => saveTodo(todo.id, newTitle)}>Save</button>
    </form>
  );
};

export default TodoEditForm;
