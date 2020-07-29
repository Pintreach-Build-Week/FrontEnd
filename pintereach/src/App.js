import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import AddArticleForm from './components/AddArticleForm';
import LogIn from './components/LogIn';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <NavBar />
      <LogIn />
      <Footer />
    </Container>

  )
}
const Container = styled.div`
    margin: 0px;
`

export default App;
