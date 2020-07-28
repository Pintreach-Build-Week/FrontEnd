import React from "react";
import { Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route 
            {...rest}
            render={props => {
                if(localStorage.getItem("token")){
                    return <Component {...props}/>
                } else {
                    console.log("redirecting!");
                    return <Redirect to="/login" />  //redirect back to log in page since info did not vrf
                }

            }}
        />
    )
};

export default PrivateRoute;