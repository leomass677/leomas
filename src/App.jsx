import "./App.css";
import GlobalRouter from "./Pages/GlobalRouter";

function App() {
  return (
    <>
      <div className="text-9xl text-green-950 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-inter">
        Hello World
      </div>
      <GlobalRouter />
    </>
  );
}

export default App;
