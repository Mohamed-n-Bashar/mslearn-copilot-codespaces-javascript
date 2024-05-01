/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Mohamed Nabil Bashar",
  title: "Mobile App Developer",
  email: "Mohamednbashar@gmail.com",
  gitHub: "https://github.com/Mohamed-n-Bashar",
  instagram: "https://www.instagram.com/mo.n.bashar/?funlid=rf400IJR4L21OOZB",
  linkedIn: "https://www.linkedin.com/in/mohamed-bashar-806046248",
  medium: "",
  twitter: "https://twitter.com/Mohamed36147260",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
