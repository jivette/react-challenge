import { UserStore } from "./User";

export interface ILoading {
  loader: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface StateAlert {
  isOpen: boolean;
  type: string;
  message: string;
  icon: string;
}

export interface IState {
  loader: ILoading;
  alert: StateAlert;
  users: UserStore;
}
