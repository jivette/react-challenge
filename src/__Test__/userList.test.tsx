import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserList from "../views/UserList/UserList";
import { Provider } from "react-redux";
import configureStore from "../store";
const store = configureStore();

describe("Render UserList", () => {
  const { getByText } = render(
    <Provider store={store}>
      <UserList />
    </Provider>
  );

  it("Render Headers Table", () => {
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Phone")).toBeInTheDocument();
    expect(getByText("Country")).toBeInTheDocument();
  });
});
