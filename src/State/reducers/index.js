import { combineReducers } from "redux";
import amountReduce from "./amountReduce";

const reducers = combineReducers({
    amount : amountReduce
})

export default reducers;