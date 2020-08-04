import React from 'react';
import styled from 'styled-components';
import './css/landingpage.css';


const NavBar = () => {

    return (
        <NavContainer> 
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Pintereach | A go-to spot for your research topics! </title>
            <link rel="stylesheet" type="text/css" href="css/landingpage.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Girassol&family=Grand+Hotel&family=Lobster&family=Montserrat&family=Oswald:wght@300&display=swap"
                rel="stylesheet"
            />
            <section id="header">
                <section id="logosection">
                    <a href="https://pintereach.netlify.app">
                        <h1 id="logo">Pintereach</h1>
                    </a>
                    <h6 id="slogan">A go-to spot for your research topics!</h6>
                </section>
                <nav id="mainnav">
                    <a href="contact/">Contact</a>
                    <a href="/home" className="special">
                        Login
      </a>
                </nav>
            </section>
        </NavContainer>
    );

}

const NavContainer = styled.div`
    background-color: #B9E1DC;

    
    `
export default NavBar;