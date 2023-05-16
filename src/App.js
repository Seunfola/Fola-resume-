import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
// import Works from "./components/Works/Works.jsx";
import Values from "./components/Values/Values";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Recommendation from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Navbar />
      <Intro />
      <Values />
      <Services />
      <Experience />
      {/* <Works /> */}
      <Portfolio />
      <Recommendation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
