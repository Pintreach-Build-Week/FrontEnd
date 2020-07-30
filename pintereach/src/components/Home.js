import React from "react";
import LogIn from './LogIn';
import SignUserUp from './SignUp';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px;
    #flexthem{
      display:flex;
      justify-content:space-between;
      width:95vw;
      margin:0 auto;
      #leftside{
        width:50vw;
      }
      #rightside{
        width:50vw;
      }
    }
`

const Home = () => {
    return(
        <Container>  
            <div id="flexthem">
                <div id="leftside">
                    <LogIn />
                </div>
                <div id="rightside">
                    <SignUserUp/>
                </div>
            </div>
            <Footer />
        </Container>
    )
}





export default Home;