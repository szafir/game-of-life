import React, { Component } from "react";
import { Route } from "react-router-dom";

import PanelFlexbox from "../components/Flexbox/Panel";
import PanelPosition from "../components/Position/Panel";
import PanelCanvas from "../components/Canvas/Panel";

import Toolbar from "../components/Toolbar";
import Header from "../components/Header";

import withPanelState from "./withPanelState";

class Page extends Component {
  render() {
    return (
      <>
        <Header />
        <div style={{
          marginTop: 100,
          flexShrink: 0
        }}>
          <Route exact path="/" component={withPanelState(PanelPosition)} />
          <Route path="/flexbox" component={withPanelState(PanelFlexbox)} />
          <Route path="/canvas" component={withPanelState(PanelCanvas)} />
          <Toolbar />
        </div>
      </>
    );
  }
}
export default Page;
