import React from "react";
import "./css/landingpage.css";
import SampleArticles from './SampleArticles';

let LandingPage = () => {
    
    return (
        <div>
            <div id="container">
                <section id="contentMain">
                    <section id="topcontent">
                        <img src="images/mobile-phone-1419275_1280.jpg" id="topimage" alt="Pintereach"/>
                        <h2>Love to read?</h2>
                        <p>
                            Pintereach allows you to keep all the articles you want to read in one
                            easy place.
        </p>
                    </section>
                    <section id="middlecontent">
                        <img
                            src="images/computer.png"
                            alt="Try Pintereach today!"
                            id="computer"
                        />
                        <p>
                            If you love reading articles but don't have the time to reach them as
                            you find them, Pintereach is the place for you. Pintereach allows you
                            to pin all of the articles you want to read for later with the ability
                            to sort by category and by importance.
          <br />
                            <br />
                            <br />
                            <a href="/home" id="signup">
                                Sign Up Today!
          </a>
                        </p>
                    </section>
                    <section id="bottomcontent">
                        
                            <SampleArticles />
                           
        
                        
                    </section>
                </section>
            </div>
            <footer>
                <nav id="bottomNav">
                    <a href="/">Home</a> |
      <a href="https://pintereachbrittany.netlify.app/about/">About</a> |
      <a href="/home">Login</a> |
      <a href="https://pintereachbrittany.netlify.app/contact/">Contact</a>
                </nav>
                <section id="copyright"> © 2020 Pintereach</section>
            </footer>
        </div>
    );
}

export default LandingPage;