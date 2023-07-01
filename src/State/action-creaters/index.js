export const depositMoney = (amount) => {
debugger;
  return (dispatch) => {
    dispatch({ type: 'deposit', playload: amount });
  };
};

export const WithdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({ type: 'withdraw', playload: amount });
  };
};
