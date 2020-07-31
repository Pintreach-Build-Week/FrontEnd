import React from "react";
import "./css/landingpage.css";

let LandingPage = () => {

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Pintereach | A go-to spot for your research topics! </title>
            <link rel="stylesheet" type="text/css" href="css/landingpage.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Girassol&family=Grand+Hotel&family=Lobster&family=Montserrat&family=Oswald:wght@300&display=swap"
                rel="stylesheet"
            />
            <section id="header">
                <section id="logosection">
                    <a href="https://pintereachbrittany.netlify.app">
                        <h1 id="logo">Pintereach</h1>
                    </a>
                    <h6 id="slogan">A go-to spot for your research topics!</h6>
                </section>
                <nav id="mainnav">
                    <a href="about/">About</a>
                    <a href="/home" className="special">
                        Login
      </a>
                </nav>
            </section>
            <div id="container">
                <section id="contentMain">
                    <section id="topcontent">
                        <img src="images/mobile-phone-1419275_1280.jpg" id="topimage" />
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
                        <p>
                            Pintereach is available for your computer and your mobile devices so
                            you can read whenever you have the time.
        </p>
                        <img
                            src="images/mobile-devices-2017978_1280.png"
                            alt="Take Pintereach wherever you go!"
                            id="mobile"
                        />
                    </section>
                </section>
            </div>
            <footer>
                <nav id="bottomNav">
                    <a href="https://pintereachbrittany.netlify.app/">Home</a> |
      <a href="https://pintereachbrittany.netlify.app/about/">About</a> |
      <a href="https://dreamy-elion-bd38b0.netlify.app/">Login</a> |
      <a href="https://pintereachbrittany.netlify.app/contact/">Contact</a>
                </nav>
                <section id="copyright"> © 2020 Pintereach</section>
            </footer>
        </div>
    );
}

export default LandingPage;