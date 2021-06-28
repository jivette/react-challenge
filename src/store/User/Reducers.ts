import { IAction } from "../../interfaces/IDefault";
import { UserStore } from "../../interfaces/User";
import { SET_USERS, SET_USER, UPDATE_USER, DELETE_USER  } from './Types'

export const initialState: UserStore = {
  users: []
};

export const UserReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.payload,
      };

    case SET_USER:
      return {
        users: [...state.users, {...action.payload }],
      };
    case UPDATE_USER:
      return {
        users: action.payload,
      };
    case DELETE_USER:
      const users = state.users.filter((user) => user.email !== action.payload.email)
      return {
        users: users,
      };
      default:
      return state;
  }
};
