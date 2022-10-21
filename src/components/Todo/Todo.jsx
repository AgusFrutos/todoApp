import React, { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import { initialState, todoReducer } from "../../reducers/todoReducer";
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REMOVE_TODOS,
  SAVE_TODO,
} from "../../actions/todoActions";

import s from "./Todo.module.css";
import { logout } from "../../features/login/LoginSlice";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

    const {user} = useSelector((state) => state.login)
    const dispatchLogin = useDispatch() 

  const { idTodos } = useParams();

  const handleTodo = (text) => {
    if (text.length === 0) return;
    const newTodo = {
      id: new Date().getTime(),
      title: text,
      edit: false,
      complete: false,
    };

    dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  };

  const editTodo = (id) => {
    dispatch({
      type: EDIT_TODO,
      payload: id,
    });
  };

  const saveTodo = (id, newTitle) => {
    dispatch({
      type: SAVE_TODO,
      payload: id,
      newTitle: newTitle,
    });
  };

  const removeTodos = () => {
    dispatch({
      type: REMOVE_TODOS,
    });
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])  

  return (
    <div className={s.todo_container}>
      <p>Bienvenido {user}</p>
      <button onClick={()=>dispatchLogin(logout())}>salir</button>
      <TodoForm handleTodo={handleTodo} removeTodos={removeTodos} />
      <TodoList
        idTodos={idTodos}
        tasks={state.tasks}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        editTodo={editTodo}
        saveTodo={saveTodo}
      />
    </div>
  );
};

export default Todo;
