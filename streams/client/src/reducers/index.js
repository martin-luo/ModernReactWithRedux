import { combineReducers } from "redux";

import { googleAuthReducer } from "./googleAuth";

export default combineReducers({ googleAuth: googleAuthReducer });
