import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserAction } from "../Config/actions";

const UserList = () => {
  // get the data from the reducer (initialState):
  const users = useSelector((data) => data.users);
  // dispatcher :
  const dispatch = useDispatch();
  // hadelDeleteUser
  const handelDeleteUser = (id) => {
    dispatch(deleteUserAction(id));
  };
  return (
    <>
      <h1>CRUD REACTJS WITH REDUX</h1>
      <div className="my-4 d-flex justify-content-end">
        <Link to="/add-user">
          <button className="btn btn-primary">Add User</button>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-borderless table-primary align-middle  text-center">
          <thead className="table-light">
            <tr>
              <th>#ID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-danger">
                  There Is No Users!
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index} className="table-primary">
                  <td scope="row">{user.id}</td>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update-user/${user.id}`}>
                      <button className="btn btn-secondary">Update</button>
                    </Link>
                    <button
                      onClick={() => handelDeleteUser(user.id)}
                      className="ms-4 btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot className="table-light">
            <tr>
              <td colSpan={4} className="text-end">
                Number Of Our Users : <b>{users.length}</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default UserList;
