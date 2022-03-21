import React from "react";
import { Link } from "react-router-dom";

const StreamList = () => {
  return (
    <>
      <div>StreamList</div>
      <Link to="/streams/create">Create a Stream</Link>
    </>
  );
};

export default StreamList;
