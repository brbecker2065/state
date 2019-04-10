import React, { Component } from "react";
import MyHeader from "../../components/header";
import "./styles.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="Landing-page">
        <div className="header">hi </div>
        <div className="main">
          <div className="main-left">left</div>
          <div className="main-right">right</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
