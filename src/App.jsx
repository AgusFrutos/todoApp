import { Provider } from "react-redux";
import Login from "./components/Login/Login";
import Todo from "./components/Todo/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/todos" element={<Todo />} />
            <Route path="/todos/:idTodos" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
