import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import { googleAuthReducer } from "./googleAuth";

export default combineReducers({ form, googleAuth: googleAuthReducer });
