import React from 'react';
import logo from './logo.svg';
import './App.css';

const header = () => {
    
  }

function App() {
  return (
    <>
    <header>
      <div className="container">
        <div className="nav">
          <div className="nav1"></div>
          <div className="nav2">
            <div className="menu"><a href="#about">About Me</a></div>
            <div className="menu"><a href="#">Music</a></div>
            <div className="menu">
              <a href="./template/portifolio.html">Projects</a>
            </div>
            <div className="menu"><a href="#contact">Contact Me</a></div>
          </div>
        </div>
      </div>
      </header>


      <footer>
        <div className="container">
            <div className="footerContainer">
              <div className="footerLogo">
                <img src="./assets/images/gifs/logo2.png" alt="Logo" />
              </div>
              <div className="footerNav">
                <p><a href="#about">About me</a></p>
                <p><a href="#">Music</a></p>
                <p><a href="./template/portifolio.html">Projects</a></p>
                <p><a href="#contact">Contact me</a></p>
              </div>
              <div className="footerSocial">
                <p><a href="https://www.instagram.com/lagrandephrase"><i className="fab fa-instagram"></i></a></p>
                <p><a href="https://www.linkedin.com/waseemnaseeven"><i className="fab fa-linkedin"></i></a></p>
                <p><a href="https://www.github.com/waseemnaseeven"><i className="fab fa-github"></i></a></p>
                <p><a href="patreon ou buyme a coffee"><i className="patreonorcoffee"></i></a></p>
                <p><a href="soundclound"><i className="soundcloud"></i></a></p>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}

export default App;
