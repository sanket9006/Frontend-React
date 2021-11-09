import { Dispatch } from "react";
import { Action } from "../Actions";
import { ActionTypes } from "../ActionTypes";

export const DepositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.DEPOSIT,
      payload: amount,
    });
  };
};

export const WithdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WITHDRAW,
      payload: amount,
    });
  };
};

export const CloseAccount = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CLOSE_ACCOUNT,
    });
  };
};
