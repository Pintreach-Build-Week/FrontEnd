import React from 'react';
import styled from 'styled-components';


const Contact = () =>{

    return(
        <ContactDiv>
            <h1>Contact Us</h1>
        <p id="github">Github</p>
        <p className="info"><a href="http://www.github.com/brittanymclaughlin">Brittany McLaughlin</a> - React 1</p>
        <p className="info"><a href="https://github.com/Ali-Dervisoglu">Ali Dervisoglu</a> - React 2</p>
        <p className="info"><a href="https://github.com/Evelyn312">Evelyn Nguyen</a> - React 2</p>
        <p className="info"><a href="https://github.com/PL9627">Paul Lee</a> - Backend</p>
        <p className="info"><a href="https://github.com/ron-hughes">Ron Hughes</a> - Backend</p>
        <p className="info"><a href="https://github.com/ebisLab">Ebi Baiden</a> - Project Lead</p>
        </ContactDiv>
    )
};
const ContactDiv = styled.div`
    background-color:#ffffff;
    margin:3% auto;
    text-align:center;

    h1{
        font-family:'Lobster';
        font-size:5rem;
        color:#756C83;
    }
    #github{
        background-color:#F38181;
        color:#fbfbfb;
        margin:0 auto;
        width:20vw;
        font-size:1.5rem;
        font-weight:bold;
    }
    .info{
        font-size:1rem;

        a{
            text-decoration:none;
            font-color:#756C83;
        }
    }
`
export default Contact;