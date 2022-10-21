import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REMOVE_TODOS,
  SAVE_TODO,
} from "../actions/todoActions";

export const initialState = {
  tasks: localStorage.getItem('tasks') 
  ? JSON.parse(localStorage.getItem('tasks'))
  : []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        tasks: [...state.tasks, action.payload],
      };
    }
    case DELETE_TODO: {
      const filteredTodos = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        tasks: filteredTodos,
      };
    }
    case COMPLETE_TODO: {
      const completeTodo = state.tasks.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
      return {
        tasks: completeTodo,
      };
    }
    case REMOVE_TODOS: {
      return {
        tasks: [],
      };
    }
    case EDIT_TODO: {
      const editedTodo = state.tasks.map((todo) =>
        todo.id === action.payload ? { ...todo, edit: !todo.edit } : todo
      );
      return {
        tasks: editedTodo,
      };
    }
    case SAVE_TODO: {
      const savedTodo = state.tasks.map((todo) =>
        todo.id === action.payload
          ? { ...todo, title: action.newTitle, edit: false }
          : todo
      );
      return {
        tasks: savedTodo,
      };
    }

    default:
      return state;
  }
};
