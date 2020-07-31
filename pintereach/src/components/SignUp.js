import React, { useState} from "react";
import { connect } from "react-redux";
import { signUp } from "../actions";
import styled from 'styled-components';

const SignUserUp = ({signUp, isLoading, isSignedUp}) => {
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
    console.log('loading ', isLoading);
    if (isLoading) {
        return <h2>Loading...</h2>;
    };

    if (isSignedUp){
        return <h2>All Signed Up, Please Log In To See And Add Articles</h2>
    }
    return(
        <SignDiv>
            <div id="note">
            <h2>Do not have an account yet?</h2>
            <h3>Sign Up For Pintereach</h3>
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
        </SignDiv>
    );
}
const SignDiv = styled.div`
    padding:20px;
    font-size:1.2rem;
    text-align:center;

    #note{
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
    console.log('state ', state);
    return {
        isLoading: state.signUpReducer.isLoading,
        isSignedUp: state.signUpReducer.isSignedUp
    }
}

const mapDispatchToProps = { signUp };

export default connect (mapStateToProps, mapDispatchToProps)(SignUserUp);