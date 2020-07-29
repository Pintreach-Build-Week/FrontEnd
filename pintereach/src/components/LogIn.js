import React, {useState} from "react";
import { connect } from "react-redux";
import { signIn } from "../actions"

const LogIn = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        console.log("SignIn", credentials)
        props.signIn(credentials);
    }

    return(
        <div>
            <h2>Already have an account? Log Into Pintereach</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="User Name"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign In</button>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = { signIn };


export default connect (mapStateToProps, mapDispatchToProps)(LogIn);