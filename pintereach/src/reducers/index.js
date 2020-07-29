import { combineReducers } from "redux";
import { logInReducer } from "../reducers/logInReducer";
import { signUpReducer} from "../reducers/signUpReducer";


export const appReducer = combineReducers({
    logInReducer,
    signUpReducer
})