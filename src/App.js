import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import About from "./components/About";




function App() {
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Contact/>
      <div className="h-[250px]"></div>
    </div>
  );
}

export default App;
