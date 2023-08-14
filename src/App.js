import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Footer from "./components/Footer";

const cardData = [
  {
    imageUrl: require("./assets/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "1000px",
    left: "40px"
  },
]
function App() {
  
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      {cardData.map((card, index) => (
        <Products
          key={index}
          imageUrl={card.imageUrl}
          iframeUrl={card.iframeUrl}
          top={card.top}
          left={card.left}
        />
      ))}
      <Contact />
      <Footer/>
      <div className="h-[20px]"></div>
    </div>
  );
}

export default App;
