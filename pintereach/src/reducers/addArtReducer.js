import {
    ADD_ART_START,
    ADD_ART_SUCCESS,
    ADD_ART_FAIL

} from "../actions";

const initialState = {
    title: '',
    url: '',
    categories: {
        tech: false,
        diy: false,
        beauty: false,
        gardening: false,
        automotive: false,
        sports: false,
        medical: false,
        creative: false,
        relationships: false,
        news: false,
        crime: false,
        politics: false
    },
    author: '',
    notes: '',
    userId: '',
    isAdding: false
};

export const addArtReducer = (state = initialState, action) => {
    console.log('action ', action);
    switch (action.type) {
        case ADD_ART_START:
            return {
                ...state,
                isAdding: true,
            };
        case ADD_ART_SUCCESS:
            return {
                ...state,
                isAdding: false,
                article: action.payload
            }
        case ADD_ART_FAIL:
            return {
                ...state,
            }

        default:
            return state;
    }
}