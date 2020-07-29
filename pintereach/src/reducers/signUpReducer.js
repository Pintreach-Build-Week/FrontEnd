import {
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from "../actions";

const initialState = { 
    userInfo: {
        username: "",
        password: ""
    },
    isSignedUp: false
}

export const signUpReducer = ( state = initialState, action) => {
    console.log("action from signUpReducer", action);
    switch(action.type){
        case SIGN_UP_START:
            return {
                ...state,
                isSignedUp: true,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isSignedUp: false
            };
        case SIGN_UP_FAIL: 
            return {
                ...state,
                isSignedUp: false
            };
        default:
            return state;
    }
}