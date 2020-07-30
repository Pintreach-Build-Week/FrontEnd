import axiosWithAuth from "../utils/AxiosWithAuth";
// import axios from "axios";

// export const SIGN_IN = "SIGN_IN";
export const FETCHING_SIGN_IN_START = "FETCHING_SIGN_IN_START";
export const FETCHING_SIGN_IN_SUCCESS = "FETCHING_SIGN_IN_SUCCESS";
export const FETCHING_SIGN_IN_FAIL = "FETCHING_SIGN_IN_FAIL";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";


export const signIn = (credentials, history) => dispatch => {
    console.log("signIn", credentials);
    dispatch({ type: FETCHING_SIGN_IN_START})
    axiosWithAuth()
    .post("/login", credentials )
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
    console.log("signUp", userInfo);
    dispatch({ type: SIGN_UP_START})
    axiosWithAuth()
    .post("/register", userInfo )
    .then(res => {
        console.log("res from signIn", res.data)
        dispatch({ type: SIGN_UP_SUCCESS, payload: res.data })
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: SIGN_UP_FAIL, payload: err})
    })
};