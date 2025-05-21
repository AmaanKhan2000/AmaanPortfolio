import React from "react";

import Home from "../screens/home";
import Contacts from "../screens/contacts";
import About from "../screens/about";
import Projects from "../screens/projects";
import { Navbar } from "../components/Navbar";

export default function Screens() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Navbar />
    </>
  );
}
