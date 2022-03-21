import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

const UserHeader = ({ userId, users, fetchUser }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchUser(userId), []);

  const user = users.find((user) => user.id === userId);
  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <div className="header">
      <div>{user.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
