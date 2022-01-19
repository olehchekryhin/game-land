import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import authReducer from "./auth/auth.reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const authPersistConfig = {
    key: 'auth',
    storage: storage,
};

const userPersistConfig = {
    key: 'user',
    storage: storage,
};

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
});

export default rootReducer;
