import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export default rootReducer;
