import React from 'react';
import styled from 'styled-components';
import './css/landingpage.css';

const Footer = () =>{


    return(
        <Footerdiv>
            
                <h3 id="bottomLogo">Pintereach</h3>
                <nav id="bottomNav">
                    <a href="/">Home</a> |
      <a href="/home"> Login</a> |
      <a href="/contact"> Contact</a>
                </nav>
                <section id="copyright"> © 2020 Pintereach</section>
           
        </Footerdiv> 
    )

}
const Footerdiv = styled.div`
    background-color:#756C83;
    color:white;
    margin:0 auto;
    height:25%;
    padding-top:5%;
    padding-bottom:5%;
    text-align:center;

    #bottomLogo{
        font-family:'Bebas Neue';
        font-size:1.5rem;

    }
    #bottomNav{
        a{
            text-decoration:none;
            color:#fbfbfb;
        }
    }
    
    
`
export default Footer;