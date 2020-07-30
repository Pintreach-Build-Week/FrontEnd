import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';

// import AddArticleForm from './components/AddArticleForm';

import { Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ArticleList from "./components/ArticleList";


function App() {
  return (
    <div>
    <NavBar/>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={LogIn} />
    <PrivateRoute path="/article-list" component={ArticleList}/>
    
    </div>
  )
}

export default App;
