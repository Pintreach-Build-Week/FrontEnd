import { 
    FETCHING_SIGN_IN_START,
    FETCHING_SIGN_IN_SUCCESS,
    FETCHING_SIGN_IN_FAIL

} from "../actions";


const initialState = {
    isFetching: false,
    credentials: {
        username: "",
        password: ""
    },
    articles: {}



};

export const logInReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch(action.type){
        case FETCHING_SIGN_IN_START:
            return {
                ...state,
                isFetching: true,
                // credentials: {
                //     username: action.payload.username, 
                //     password: action.payload.password
                // }
            };
        case FETCHING_SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                article: action.payload
            }
        case FETCHING_SIGN_IN_FAIL:
            return {
                ...state,
                isFetching: false
            }  

        default:
            return state;
    }
}