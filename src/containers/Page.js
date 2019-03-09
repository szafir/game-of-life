import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import PanelFlexbox from "../components/Flexbox/Panel";
import PanelPosition from "../components/Position/Panel";
import PanelCanvas from "../components/Canvas/Panel";
import withPanelState from "./withPanelState";

import Header from "../components/Header";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  panelContainer: {
    marginTop: theme.spacing.unit * 8,
    flexGrow: 1,
    display: "flex"
  }
});

class Page extends Component {
  constructor(refs) {
    super(refs);
    // this.pageRef = React.createRef();
  }
  render() {
    const { classes } = this.props;
    // console.log(this.pageRef);
    return (
      <>
        <Header pathname={this.props.location.pathname} />
        <div className={classes.panelContainer}>
          <Route exact path="/" component={withPanelState(PanelPosition)}/>
          <Route path="/flexbox" component={withPanelState(PanelFlexbox)} />
          <Route path="/canvas" component={withPanelState(PanelCanvas)} />
        </div>
      </>
    );
  }
}
export default withStyles(styles)(withRouter(Page));
