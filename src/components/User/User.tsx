import React from "react";
import { useDispatch } from "react-redux";
import { IUser } from "../../interfaces/User";

import "../../sass/User.scss";
import { deleteUser } from "../../store/User/Actions";

const User = ({ name, email, phone, country }: IUser) => {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <span>{name}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{country}</span>
      <span>
        <button
          className="delete"
          onClick={() => dispatch(deleteUser({ name, email, phone, country }))}
        >
          X
        </button>
      </span>
    </div>
  );
};

export default User;
