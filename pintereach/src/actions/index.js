import axiosWithAuth from "../utils/AxiosWithAuth";
// import axios from "axios";

// export const SIGN_IN = "SIGN_IN";
export const FETCHING_SIGN_IN_START = "FETCHING_SIGN_IN_START";
export const FETCHING_SIGN_IN_SUCCESS = "FETCHING_SIGN_IN_SUCCESS";
export const FETCHING_SIGN_IN_FAIL = "FETCHING_SIGN_IN_FAIL";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const UPDATE_ART_START = "UPDATE_ART_START";
export const UPDATE_ART_SUCCESS = "UPDATE_ART_SUCCESS";
export const UPDATE_ART_FAIL = "UPDATE_ART_FAIL";
export const REMOVE_ART_START = "REMOVE_ART_START";
export const REMOVE_ART_SUCCESS = "REMOVE_ART_SUCCESS";
export const REMOVE_ART_FAIL = "REMOVE_ART_FAIL";

const id = 1; //mock id


export const signIn = (credentials, history) => dispatch => {
    console.log("signIn", credentials);
    dispatch({ type: FETCHING_SIGN_IN_START})
    axiosWithAuth()
    .post("/api/auth/login", credentials )
    .then(res => {
        console.log("res from signIn", res.data);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: FETCHING_SIGN_IN_SUCCESS, payload: res.data });
        history.push("/article-list");
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: FETCHING_SIGN_IN_FAIL, payload: err})
    })
};

export const signUp = (userInfo) => dispatch => {
    
    console.log("/api/auth/register", userInfo);
    dispatch({ type: SIGN_UP_START})
    axiosWithAuth()
    .post("/api/auth/register", userInfo )
    .then(res => {
        console.log("res from signIn", res.data)
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data })
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: SIGN_UP_FAIL, payload: err})
    })
};

export const submitEditArt = (updateArtInfo,history) => dispatch => {
    // console.log("submitEditArt",updateArtInfo )
    dispatch({ type: UPDATE_ART_START})
    axiosWithAuth()
    .put(`/articles/${id}`, updateArtInfo )  //put in id dynamically
    .then(res => {
        console.log("res from submitUpdateArt", res)
        dispatch({ type: UPDATE_ART_SUCCESS, payload: res.data })
        history.push("/article-list")
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: UPDATE_ART_FAIL, payload: err})
    })
    
}

<<<<<<< Updated upstream
export const removeArt = (history) => dispatch => {
    console.log("removeArt" )
    dispatch({ type: REMOVE_ART_START})
=======
export const removeArt = (articleId,history) => dispatch => {
    dispatch({ type: REMOVE_ART_START })
    axiosWithAuth()
        .delete(`/articles/${articleId}`)
        .then(res => {
            console.log("res from deleteArt", res.data)
            dispatch({ type: REMOVE_ART_SUCCESS, payload: res.data })
            history.push("/article-list")
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: REMOVE_ART_FAIL, payload: err })
        })
}

export const addArt = (article, history) => dispatch => {
    console.log("addArt");
    dispatch({ type: ADD_ART_START })
>>>>>>> Stashed changes
    axiosWithAuth()
    .delete(`/articles/${id}` )
    .then(res => {
        console.log("res from deleteArt", res.data)
        dispatch({ type: REMOVE_ART_SUCCESS, payload: res.data })
        history.push("/article-list")
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: REMOVE_ART_FAIL, payload: err})
    })
}