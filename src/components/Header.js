import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <Link to="/">Position implementation</Link>
        <Link to="/flexbox">Flexbox implementation</Link>
        <Link to="/canvas">Canvas implementation</Link>
      </>
    );
  }
}
export default Header;
