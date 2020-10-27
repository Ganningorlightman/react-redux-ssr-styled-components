import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers.js";
import thunk from "redux-thunk";

export default function create(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}