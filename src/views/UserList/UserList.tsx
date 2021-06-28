import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/User/User";
import { IState } from "../../interfaces/IDefault";

import "../../sass/_user-list.scss";

const UserList = () => {
  const users = useSelector((state: IState) => state.users);
  return (
    <section>
      <h2>User list</h2>
      <div className="header-table">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
          <li>Actions</li>
        </ul>
      </div>
      <ul className="user-list">
        {users.users &&
          users.users.length > 0 &&
          users.users.map((user, i) => (
            <li key={i}>
              <User
                name={user.name}
                email={user.email}
                phone={user.phone}
                country={user.country}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default UserList;
