import {
    UPDATE_ART_START,
    UPDATE_ART_SUCCESS,
    UPDATE_ART_FAIL,
    REMOVE_ART_START,
    REMOVE_ART_SUCCESS,
    REMOVE_ART_FAIL
} from "../actions";

const initialState = {
    title: "",
    author: "",
    url: "",
    categories: "",
    notes: "notes go here"

};

export const articleCardReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch(action.type){
        case UPDATE_ART_START:
            return {
                ...state,
            };
        case UPDATE_ART_SUCCESS:
            return {
                ...state,
            }
        case UPDATE_ART_FAIL:
            return {
                ...state,
            } 
        case REMOVE_ART_START:
            return {
                ...state,
            }  
        case REMOVE_ART_SUCCESS:
            return {
                ...state,
            }
         case REMOVE_ART_FAIL:
            return {
                ...state,
            }       
        default:
            return state;
    }
}
