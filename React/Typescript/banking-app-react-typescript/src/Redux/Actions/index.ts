import { ActionTypes } from "../ActionTypes";

interface withdraw {
  type: ActionTypes.WITHDRAW;
  payload: number;
}

interface deposit {
  type: ActionTypes.DEPOSIT;
  payload: number;
}

interface close_account {
  type: ActionTypes.CLOSE_ACCOUNT;
}

export type Action = withdraw | close_account | deposit;
