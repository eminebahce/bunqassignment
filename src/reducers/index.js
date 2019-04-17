import {combineReducers} from "redux";
import auth from './auth';
import login from './login';
import signup from './signup';
import OperationsReducer from './OperationsReducer';

export default combineReducers({
    auth,
    login,
    signup,
    OperationsReducer
});