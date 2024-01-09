import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserAction } from "../Config/actions";

const UpdateUser = () => {
  // get the id :
  const { id } = useParams();
  // get the user that have the same id as id from router-dom (useParams : ID):
  const user = useSelector((data) =>
    data.users.find((us) => us.id === parseInt(id))
  );
  // state that will hold the change of the inputs :
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
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
      updateUserAction({
        id: id,
        fullName: fullName,
        email: email,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h3 className="mb-3">Update User :</h3>
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
      </form>
    </>
  );
};

export default UpdateUser;
