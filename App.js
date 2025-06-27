import React, { useState } from "react";
import "./sunnyside.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <img src="images/logo.svg" alt="Sunnyside logo" />
          <ul className={`navlink${navOpen ? " show" : ""}`} id="navlink">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div
            className="hamburger"
            id="hamburger"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <h1>WE ARE CREATIVES</h1>
        <img className="arrow" src="images/icon-arrow-down.svg" alt="Arrow Down" />
      </header>
      <section>
        <div className="first">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast.
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <strong><a href="#learn-more">Learn more</a></strong>
        </div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fouth">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we’ll build and extend your brand in digital places.
          </p>
          <strong><a href="#learn-more">Learn more</a></strong>
        </div>
        <div className="fifth">
          <div className="fifth-child">
            <h2>Graphic design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that underscores your brand message and
              captures potential clients’ attention.
            </p>
          </div>
        </div>
        <div className="sixth">
          <div className="sixth-child">
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning, high-quality photos that improve your
              business image.
            </p>
          </div>
        </div>
      </section>
      <main>
        <h2>Client testimonials</h2>
        <div className="flexbox">
          <div className="emilly">
            <img src="images/image-emily.jpg" alt="Emily" />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were
              always hit.
            </p>
            <h2>Emily R.</h2>
            <p className="p2">Marketing Director</p>
          </div>
          <div className="thomas">
            <img src="images/image-thomas.jpg" alt="Thomas" />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying
              and enjoyable experience.
            </p>
            <h2>Thomas S.</h2>
            <p className="p2">Chief Operating Officer</p>
          </div>
          <div className="jennie">
            <img src="images/image-jennie.jpg" alt="Jennie" />
            <p>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly
              recommended!
            </p>
            <h2>Jennie F.</h2>
            <p className="p2">Business Owner</p>
          </div>
        </div>
      </main>
      <article>
        <div className="article1"></div>
        <div className="article2"></div>
        <div className="article3"></div>
        <div className="article4"></div>
      </article>
      <footer>
        <h1>sunnyside</h1>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
        <div className="icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </footer>
    </>
  );
}

export default App;