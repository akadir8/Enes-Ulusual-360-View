import React from "react";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { Communication } from "./components/Communication";

const cardData = [
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "100px",
    left: "40px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "100px",
    left: "340px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "100px",
    left: "640px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "100px",
    left: "940px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "100px",
    left: "1240px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "310px",
    left: "40px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "310px",
    left: "340px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "310px",
    left: "640px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "310px",
    left: "940px"
  },
  {
    imageUrl: require("./components/görüntü.jpg"),
    iframeUrl: "https://kuula.co/share/collection/7FCcS?logo=1&info=0&logosize=143&fs=1&vr=0&gyro=0&initload=0&autorotate=0.27&autop=250&autopalt=1&thumbs=4&alpha=0.79&inst=0&keys=0",
    top: "310px",
    left: "1240px"
  },
];

function App() {
  return (
    <div className="flex">
      <Navbar />
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          iframeUrl={card.iframeUrl}
          top={card.top}
          left={card.left}
        />
      ))}
      <Communication />
    </div>
  );
}

export default App;
