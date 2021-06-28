import { IAction } from "../../interfaces/IDefault";
import { SET_LOADER, CLEAR } from "./Types";

export const initialState = {
  loading: false,
};

export const LoaderReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        loading: action.payload.loader,
      };

    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
