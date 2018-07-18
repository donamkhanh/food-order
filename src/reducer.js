import { combineReducers } from "redux";
import food from "./reducers/menu";

export default combineReducers({ food: food });