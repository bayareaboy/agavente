import { combineReducers } from "redux";
// import alert from "./alert";
import auth from "./auth";
import question from "./question";
import { iptsteps } from "./iptsteps";

export default combineReducers({ auth, iptsteps, question });
