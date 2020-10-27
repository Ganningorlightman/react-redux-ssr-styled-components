import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import account from "../screens/account/reducer";

export default combineReducers({
    routing: routerReducer,
    account,
});
