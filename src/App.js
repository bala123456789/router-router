import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./component4/TodoList"
import store from './component4/store';
import { Provider } from 'react-redux';
import NavBar from "./task";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/component4/TodoList" element={<Provider store={store}>
      <TodoList />
    </Provider>} />
      </Routes>
    </>
  );
};

export default App;
