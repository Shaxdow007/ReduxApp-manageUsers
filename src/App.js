import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <div className="container my-5">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
