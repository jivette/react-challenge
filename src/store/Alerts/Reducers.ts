import { StateAlert } from "../../interfaces/IDefault";
import { OPEN_ALERT, CLOSE_ALERT, CLEAR } from "./Types";

export const initialState: StateAlert = {
  isOpen: false,
  type: "",
  message: "",
  icon: "",
};

export const AlertReducer = (
  state = initialState,
  action: { type: string; payload: StateAlert }
) => {
  switch (action.type) {
    case OPEN_ALERT:
      return {
        isOpen: action.payload.isOpen,
        type: action.payload.type,
        message: action.payload.message,
        icon: action.payload.icon,
      };

    case CLOSE_ALERT:
      return initialState;

    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
