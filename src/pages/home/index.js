import React, { Component } from "react";
import "./styles.css";
//import "./App.css";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="row-left">i am the header</div>
          <div className="row-right">right</div>
        </header>
        <main>i am in the main</main>
        <footer>i am in the footer</footer>
      </div>
    );
  }
}

export default HomePage;
