import React, { Component } from "react";
import { Route } from "react-router-dom";
import PanelFlexbox from "../components/Flexbox/Panel";
import PanelPosition from "../components/Position/Panel";
import PanelCanvas from "../components/Canvas/Panel";
import Toolbar from "../components/Toolbar";
import Header from "../components/Header";
import { connect } from "react-redux";
import withPanelState from "./withPanelState";

import mPage from "./Page.module.scss";

class Page extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={withPanelState(PanelPosition)} />
        <Route path="/flexbox" component={PanelFlexbox} />
        <Route path="/canvas" component={PanelCanvas} />
        <Toolbar />
      </>
    );
  }
}
const mapStateToProps = state => ({
  cells: state.cells,
  fieldWidth: state.fieldWidth,
  fieldHeight: state.fieldHeight
});

const mapDispatchToProps = dispatch => ({

});

export default Page;
// export default connect(mapStateToProps, mapDispatchToProps)(Page);