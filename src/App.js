import React, { Component } from "react";
import "./App.css";
import Visualizer from "./components/visualizer";
import Player from "./components/player";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Visualizer />
        <Player />
      </div>
    );
  }
}

export default App;
