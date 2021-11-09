import React from "react";
import logo from "./bank.gif";
import "./App.css";
import { rootState } from "./Redux/Reducers/index";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "./Redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: rootState) => state.bank);
  const { WithdrawMoney, DepositMoney, CloseAccount } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Savings Balance : ₹{state}</p>
        <button onClick={() => {DepositMoney(1000)}}>Deposit</button>
        <button onClick={() => {WithdrawMoney(500)}}>Withdraw</button>
        <button onClick={() => {CloseAccount()}}>Close Account</button>
      </header>
    </div>
  );
}

export default App;
