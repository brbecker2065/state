import React, { Component } from "react";
import HomePage from "./pages/home/index.js";
import LandingPage from "./pages/landing/index.js";
import "./App.css";

class App extends Component {
  //render() {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
  }
  RouterLinks = () => {
    return (
      <div>
        <label>
          <input
            type="radio"
            name="pageChanger"
            value="Home"
            onClick={this.updatePage}
          />
          Home
        </label>
        <label>
          <input
            type="radio"
            name="pageChanger"
            value="Landing"
            onClick={this.updatePage}
          />
          Landing
        </label>
      </div>
    );
  };

  updatePage = event => {
    event.preventDefault();
    this.setState({ page: event.target.value });
  };

  render() {
    switch (this.state.page) {
      case "Home":
        return (
          <div>
            {this.RouterLinks()}
            <HomePage />
          </div>
        );
      case "Landing":
        return (
          <div>
            <LandingPage />
          </div>
        );
    }
    //return <HomePage />;
    //return <LandingPage />;
  }
}
export default App;
