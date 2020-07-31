import React from 'react';
import styled from 'styled-components';


const NavBar = (props) =>{

return(
    <NavContainer>
        <div id="logo">
            <h1 >Pintereach</h1>
        </div>
    </NavContainer>
);

    
}

const NavContainer = styled.div`
    background-color: #B9E1DC;
    margin-top:-22px;

    #logo{
        padding: 2%;
        
    }
    `

export default NavBar;