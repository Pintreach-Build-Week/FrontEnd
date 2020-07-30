import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import AddArticleForm from './components/AddArticleForm';
import LogIn from './components/LogIn';
import SignUserUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <NavBar />
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

export default App;
