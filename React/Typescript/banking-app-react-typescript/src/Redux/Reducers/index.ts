import { combineReducers } from "redux";
import { BankReducer } from "./BankReducer";

export const reducer = combineReducers({ bank: BankReducer });

export type rootState = ReturnType<typeof reducer>;
