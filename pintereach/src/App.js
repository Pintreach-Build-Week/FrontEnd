import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import ArticleList from "./components/ArticleList";
import ArticleCard from './components/ArticleCard';
import LandingPage from './components/LandingPage';
import AddArticleForm from './components/AddArticleForm';


function App() {
  return (
    <div>
    <NavBar/>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/login" component={LogIn} />
    <Route path="/home" component={Home} />
    <PrivateRoute path="/article-list" component={ArticleList}/>
    <PrivateRoute path="/article-card" component={ArticleCard}/>
    <PrivateRoute path="/add-article" component={AddArticleForm}/>
    </div>
  )
}

export default App;
