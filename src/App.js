import { Card3 } from "./components/Card3";
import { Card2 } from "./components/Card2";
import { Navbar } from "./components/Navbar";
import { Communication } from "./components/Communication";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card2 />
      <Card3 />
      <Communication />
    </div>
  );
}

export default App;
