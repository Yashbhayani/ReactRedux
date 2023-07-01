import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./State/index";

export const Shop = () => {
  const dispath = useDispatch();
  const action = bindActionCreators(actionCreators, dispath);
  return (
    <div className="container-fluid">
      <h2>Deposit and Withdraw money</h2>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={() => {
          action.WithdrawMoney(100);
        }}
      >
        {/* <button type="button" className="btn btn-primary mx-2" onClick={() => {dispath(actionCreators.WithdrawMoney(100))}}> */}
        -
      </button>
      Add to cart
      {/* <button
        type="button"
        className="btn btn-warning mx-2"
        onClick={() => {
          dispath(actionCreators.depositMoney(100));
        }}
      > */}
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={() => {
          action.depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};
