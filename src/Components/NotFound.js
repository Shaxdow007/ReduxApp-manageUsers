import React from "react";
import NoteFound from "../assets/404.png";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="my-5 text-center d-flex justify-content-between align-items-center gap-4">
        <img src={NoteFound} class="w-50 rounded" alt="notFound404" />
        <div>
          <h2 className="display-3 text-danger">This Page Not Found 404! </h2>
          <p className="display-6">Try To Go Back Home Page!</p>
          <Link to="/">
            <button className="btn btn-primary">Go Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
