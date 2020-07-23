import React, {useState} from "react";

const LogIn = () => {
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

    const signIn = e =>{
        e.preventDefault();
        console.log("SignIn", credentials)
    }

    return(
        <form onSubmit={signIn}>
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
    )

}

export default LogIn