import React from "react";
import Page from "./containers/Page";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  app: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  }
})

const App = props => {
  return (
    <div className={props.classes.app}>
      <Page />
    </div>
  )
}
export default withStyles(styles)(App);
