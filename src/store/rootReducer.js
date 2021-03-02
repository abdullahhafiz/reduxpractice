import { combineReducers } from "redux";
import formDataShow from "../pages/formDataReducer";
import incrementReducer from "./increment/reducer";

const rootReducer = combineReducers({ increment: incrementReducer, formData: formDataShow });
export default rootReducer;