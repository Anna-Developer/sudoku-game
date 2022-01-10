import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    main: reducer,
})
const store = createStore(reducers);

window.store = store;
export default store