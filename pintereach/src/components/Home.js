import React from "react";
import LogIn from './LogIn';
import SignUserUp from './SignUp';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px;
`

const Home = () => {
    return(
        <Container>  
            <LogIn />
            <SignUserUp/>
            <Footer />
        </Container>
    )
}





export default Home;