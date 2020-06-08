import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import { googleAuthReducer } from "./googleAuth";
import { streamReducer } from "./streamReducer";

export default combineReducers({
  form,
  streams: streamReducer,
  googleAuth: googleAuthReducer,
});
