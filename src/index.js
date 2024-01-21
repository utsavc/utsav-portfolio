import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css"
import About from "./Components/About";
import Startup from "./Components/Startup";
import Contact from "./Components/Contact";
import TechStack from "./Components/TechStack";
import Projects from "./Components/Projects";
import MyDetails from "./Components/MyDetails";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  {/* <App/> */}
  <About/>
  <Startup/>
  {/* <MyDetails/> */}
  <Projects/>
  <TechStack/>
  <Contact/>
  </>
);