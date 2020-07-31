import {
    UPDATE_ART_START,
    UPDATE_ART_SUCCESS,
    UPDATE_ART_FAIL,
    REMOVE_ART_START,
    REMOVE_ART_SUCCESS,
    REMOVE_ART_FAIL
} from "../actions";

export const initialState = {
    title: "",
    author: "",
    url: "",
    categories: "",
    notes: "",
    isUpdating: false,
    isUpdated: false,
    isRemoving: false,
    isRemoved: false
};

export const articleCardReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch(action.type){
        case UPDATE_ART_START:
            return {
                ...state,
                isUpdating: true
            };
        case UPDATE_ART_SUCCESS:
            return {
                ...state,
                isUpdated: true,
                isUpdating: false   
            }
        case UPDATE_ART_FAIL:
            return {
                ...state,
            } 
        case REMOVE_ART_START:
            return {
                ...state,
                isRemoving: true
            }  
        case REMOVE_ART_SUCCESS:
            return {
                ...state,
                isRemoving: false,
                isRemoved: true
            }
         case REMOVE_ART_FAIL:
            return {
                ...state,
            }       
        default:
            return state;
    }
}
