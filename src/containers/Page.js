import React, { Component } from "react";
import { Route } from "react-router-dom";
import PanelFlexbox from "../components/Flexbox/Panel";
import PanelPosition from "../components/Position/Panel";
import PanelCanvas from "../components/Canvas/Panel";
import Toolbar from "../components/Toolbar";

class Page extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PanelPosition} />
        <Route path="/flexbox" component={PanelFlexbox} />
        <Route path="/canvas" component={PanelCanvas} />
        <Toolbar />
      </div>
    );
  }
}
export default Page;
