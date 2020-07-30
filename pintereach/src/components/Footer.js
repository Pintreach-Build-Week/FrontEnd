import React from 'react';
import styled from 'styled-components';

const Footer = () =>{


    return(
        <Footerdiv>
            <div id="left">
                <h3 id="bottomLogo">Pintereach</h3>
            </div>
            <div id="right">
                &copy;2020 Pintereach
            </div>
        </Footerdiv>
    )

}
const Footerdiv = styled.div`
    background-color:#756C83;
    color:white;
    height:30vh;
    display:flex;
    margin-top:10%;
    justify-content:space-evenly;

    #left{
        font-family:'Bebas Neue';
        font-size:1.5rem;
        padding-right:20%;
        border-right:1px dashed #fbfbfb;

    }
    #right{
        margin-top:4%;
    }
    
`
export default Footer;