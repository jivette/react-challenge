import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { IState } from "../../interfaces/IDefault";
import "../../sass/components.scss";
import { openAlert } from "../../store/Alerts/Actions";
import { setUser } from "../../store/User/Actions";

interface IProps {
  setUser: Function;
  openAlert: Function;
}
const UserForm = ({ setUser, openAlert }: IProps) => {
  const users = useSelector((state: IState) => state.users);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    fields: {
      name: "",
      email: "",
      phone: "",
      country: "",
    },
  });

  const changeHandler = (name: string, value: string) => {
    setForm({
      ...form,
      fields: {
        ...form.fields,
        [name]: value,
      },
    });
  };

  const handleSubmit = () => {
    const existUser = users.users.find(
      (user) => user.email === form.fields.email
    );
    if (!existUser) {
      dispatch(setUser(form.fields));
      dispatch(
        openAlert({
          isOpen: true,
          type: "success",
          message: "User successfully saved.",
          icon: "check",
        })
      );
    } else {
      dispatch(
        openAlert({
          isOpen: true,
          type: "error",
          message: "User already exists.",
          icon: "close",
        })
      );
    }
  };

  const alert = () =>
    dispatch(
      openAlert({
        isOpen: true,
        type: "success",
        message: "User successfully saved.",
        icon: "check",
      })
    );

  return (
    <div className="centered">
      <h2>Add new user</h2>
      <div>
        <label htmlFor="" className="label">
          Name
        </label>
        <input
          placeholder="Name"
          name="name"
          type="text"
          value={form.fields.name}
          onChange={(event) => changeHandler("name", event.target.value)}
        />
        <label htmlFor="" className="label">
          Email
        </label>
        <input
          placeholder="Email"
          name="Email"
          type="text"
          value={form.fields.email}
          onChange={(event) => changeHandler("email", event.target.value)}
        />
        <label htmlFor="" className="label">
          Phone
        </label>
        <input
          placeholder="Phone"
          name="price"
          type="text"
          value={form.fields.phone}
          onChange={(event) => changeHandler("phone", event.target.value)}
        />
        <label htmlFor="" className="label">
          País
        </label>
        <input
          placeholder="Country"
          name="Country"
          type="text"
          value={form.fields.country}
          onChange={(event) => changeHandler("country", event.target.value)}
        />
        <input
          className="button"
          type="button"
          value="Aceptar"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setUser,
  openAlert,
};
export default connect(null, mapDispatchToProps)(UserForm);
