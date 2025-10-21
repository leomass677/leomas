import "./App.css";
import Button from "./Component/button";
import Greatings from "./Component/Greatings";
import GlobalRouter from "./Pages/GlobalRouter";
import Navbar from "./Pages/Navbar";
import Cycle from "./Component/Cycle";
import AnimatedButton from "./Component/AnimatedButton";

function App() {
  return (
    <>
      <div className="text-5xl text-green-950 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-inter">
        Hello World
      </div>
      <GlobalRouter />
    </>
  );
}

export default App;
