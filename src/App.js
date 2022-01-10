import { Routes, Route } from "react-router";
import "./App.scss";
import GameOver from "./components/GameOver";
import MainHOK from "./components/main/MainHOK.jsx";
import Menu from "./components/Menu";
import Rules from "./components/Rules";
import Win from "./components/Win";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route path="/main" element={<MainHOK />} />
          <Route path="/win" element={<Win />} />
          <Route path="/gameOver" element={<GameOver />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// yarn add react-router-dom redux react-redux gh-pages node-sass@4.14
