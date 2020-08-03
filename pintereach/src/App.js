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
import Footer from './components/Footer';
import Contact from './components/Contact';


function App() {
  return (
    <div>
    <NavBar/>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/login" component={LogIn} />
    <Route path="/home" component={Home} />
    <Route path="/contact" component={Contact} />
    <PrivateRoute path="/article-list" component={ArticleList}/>
    <PrivateRoute path="/article-card/:articleId" component={ArticleCard}/>
    <PrivateRoute path="/add-article" component={AddArticleForm}/>
    <Footer />
    </div>
  )
}

export default App;
