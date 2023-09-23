import { legacy_createStore, applyMiddleware } from "redux";
import chocolateReducer from './reducer';
import thunk from "redux-thunk";

const store = legacy_createStore(chocolateReducer, applyMiddleware(thunk));
export default store;