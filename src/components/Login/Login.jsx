import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../../actions/formLoginActions";
import { login } from "../../features/login/LoginSlice";
import {
  formLoginReducer,
  initialState,
} from "../../reducers/formLoginReducer";
import s from "./Login.module.css";

const Login = () => {
  const [loginState, loginDispatch] = useReducer(
    formLoginReducer,
    initialState
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    loginDispatch({
      type: SET_USER,
      payload: value,
      field: name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginState));
    navigate("/todos");
  };

  return (
    <div className={s.fullscreen_container}>
      <div className={s.login_container}>
        <h1>Bienvenidos</h1>
        <form onSubmit={handleSubmit} className={s.login_form}>
          <div className={s.input_group}>
            <label>Usuario</label>
            <input type="text" name="user" onChange={handleChange}></input>
          </div>
          <div className={s.input_group}>
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <button>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
