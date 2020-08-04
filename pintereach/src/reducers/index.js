import { combineReducers } from "redux";
import { logInReducer } from "../reducers/logInReducer";
import { signUpReducer} from "../reducers/signUpReducer";
import { articleCardReducer } from "../reducers/articleCardReducer";
import { addArtReducer } from "../reducers/addArtReducer";

export const appReducer = combineReducers({
    logInReducer,
    signUpReducer,
    articleCardReducer,
    addArtReducer
})