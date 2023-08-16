import React from "react";
import { Grid } from "@mui/material";
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
      <div className="box-content p-20">
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Products
              imageUrl={card.imageUrl}
              iframeUrl={card.iframeUrl}
              top={card.top}
              left={card.left}
            />
          </Grid>
        ))}
      </Grid>
      </div>
      <Contact />
      <Footer/>
      <div className="h-[20px]"></div>
    </div>
  );
}

export default App;
