const reducer = (state = 0, action) => {
  //debugger;
  if (action.type === "deposit") { 
    return state + action.playload;
  } else if (action.type === "withdraw") {
    return state - action.playload;
  } else {
    return state;
  }
};


export default reducer;