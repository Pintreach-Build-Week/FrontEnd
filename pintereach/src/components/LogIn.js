import React, {useState} from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import styled from 'styled-components';

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
        <LogDiv>
            <div id="sticky">
            <h2>Already have an account?</h2>
            <h3> Log Into Pintereach</h3>
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
        </LogDiv>
    )

}
const LogDiv = styled.div`
    padding:20px;
    font-size:1.2rem;
    text-align:center;

    #sticky{
        background-color:#fbfbfb;
        border-radius:2px;
        padding:2%;
        height:40vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        h2{
            font-size:2rem;
            margin-bottom:0%;
            
        }
        h3{
            margin-top:1%;
        }
        form{
            display:flex;
            flex-direction:column;
            align-items:center;

            label{
                margin-bottom:2%;
            }
            button{
                background-color:#756C83;
                color:white;
            }
        }
    
    
    }

`
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = { signIn };


export default connect (mapStateToProps, mapDispatchToProps)(LogIn);