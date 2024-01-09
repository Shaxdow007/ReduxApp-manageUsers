import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";

const App = () => {
  return (
    <div className="container my-5">
      <h1>CRUD REACTJS WITH REDUX</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={UserList} />
          <Route path="/add-user" element={AddUser} />
          <Route path="/update-user/:id" element={UpdateUser} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
