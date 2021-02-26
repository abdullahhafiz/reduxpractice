import { combineReducers } from "redux";
import incrementReducer from "./increment/reducer";

const rootReducer = combineReducers({increment: incrementReducer});
export default rootReducer;