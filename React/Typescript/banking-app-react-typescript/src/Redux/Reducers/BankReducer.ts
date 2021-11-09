import { Action } from "../Actions";
import { ActionTypes } from "../ActionTypes";

const initialState = 1;

export const BankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.DEPOSIT:
      return state + action.payload;

    case ActionTypes.WITHDRAW:
      return state - action.payload;

    case ActionTypes.CLOSE_ACCOUNT:
      return (state = 0);

    default:
      return state;
  }
};
