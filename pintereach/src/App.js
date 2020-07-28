import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import styled from 'styled-components';
import AddArticleForm from './components/AddArticleForm';

function App() {
  return (
    <Container>
      <NavBar />
      
    </Container>
  );
}
const Container = styled.div`
    margin: 0px;
`

export default App;
