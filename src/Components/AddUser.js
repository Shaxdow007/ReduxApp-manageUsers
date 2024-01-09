import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../Config/actions";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  // get the number of the users (for the idUser):
  const count = useSelector((data) => data.users.length);
  // state that will hold the change of the inputs :
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  // dispatcher :
  const dispatch = useDispatch();
  // go back to index (path="/") :
  const navigate = useNavigate();
  // handelOnChange :
  const handelChangeFullName = (e) => {
    setFullName(e.target.value);
  };
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  // handelSubmit :
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUserAction({
        id: count + 1,
        fullName: fullName,
        email: email,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h3 className="mb-3">Add User :</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter FullName"
            value={fullName}
            onChange={handelChangeFullName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handelChangeEmail}
          />
        </div>
        <button onClick={handelSubmit} className="btn btn-primary">
          Submit
        </button>
        <Link className="ms-4 btn btn-secondary" to="/">
          Go Back
        </Link>
      </form>
    </>
  );
};

export default AddUser;
