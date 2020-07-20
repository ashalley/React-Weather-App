import React, { Component } from "react";
import classes from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <h2>Hello!</h2>
        <p>Here is my weather app.</p>
        <p>Let me know if you have any questions.</p>
      </div>
    );
  }
}

export default Home;
