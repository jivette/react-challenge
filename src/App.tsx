import React from "react";

import { Switch, Route, NavLink } from "react-router-dom";

import UserForm from "./views/UserForm/UserForm";
import UserList from "./views/UserList/UserList";

import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "./interfaces/IDefault";
import Modal from "./components/Modal/Modal";
import { setUsers } from "./store/User/Actions";
import { USERS } from "./Constant";

function App() {
  const alert = useSelector((state: IState) => state.alert);
  const dispatch = useDispatch();
  dispatch(setUsers(USERS));

  return (
    <div className="app layout">
      <aside>
        <header>
          <div className="logo" />
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>
                User List
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Users</h1>
        </header>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/users" component={UserForm} />
        </Switch>
        {alert.isOpen ? <Modal content={alert} /> : null}
      </main>
    </div>
  );
}

export default React.memo(App);
