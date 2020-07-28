import axiosWithAuth from "../utils/AxiosWithAuth";

// export const SIGN_IN = "SIGN_IN";
export const FETCHING_SIGN_IN_START = "FETCHING_SIGN_IN_START";
export const FETCHING_SIGN_IN_SUCCESS = "FETCHING_SIGN_IN_SUCCESS"
export const FETCHING_SIGN_IN_FAIL = "FETCHING_SIGN_IN_FAIL"


export const signIn = (credentials) => dispatch => {
    console.log("signIn", credentials);
    dispatch({ type: FETCHING_SIGN_IN_START})
    axiosWithAuth()
    .post("/login", credentials )
    .then(res => {
        console.log("res from signIn", res.data)
        dispatch({ type: FETCHING_SIGN_IN_SUCCESS, payload: res.data })
    })
    .catch( err => { 
        console.log(err);
        dispatch({ type: FETCHING_SIGN_IN_FAIL, payload: err})
    })
};