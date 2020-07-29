import React, { useState} from "react";
import { connect } from "react-redux";
import { signUp } from "../actions"

const SignUserUp = ({signUp}) => {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
    const handleChange = e => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }
    const onSignUp = e => {
        e.preventDefault();
        console.log("SignUp", userInfo)
        signUp(userInfo);
    }
    return(
        <div>
            <h2>Do not have an account yet? Sign Up For Pintereach</h2>
            <form onSubmit={onSignUp}>
            <label htmlFor="username">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                    value={userInfo.username}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="password">
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={handleChange}
                />
            </label>
            <button>Sign Up Now</button>
        </form>
        </div>
    );
}
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = { signUp };

export default connect (mapStateToProps, mapDispatchToProps)(SignUserUp);