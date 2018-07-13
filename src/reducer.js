import { combineReducers } from "redux";
import menus from "./reducers/menus";

export default combineReducers({ menus: menus });