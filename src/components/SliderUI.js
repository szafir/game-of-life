import React, { Component } from "react";
import SliderMUI from "@material-ui/lab/Slider";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  label: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: "left"
  }
});

class SliderUI extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.setState({ value: this.props.populationSpeed });
  }

  handleChange = (event, value) => {
    // console.log(value);
    this.setState({
      value
    });
    this.props.onChange(value);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Typography id={this.props.label} className={classes.label}>
          {this.props.label}
        </Typography>
        <SliderMUI
          classes={{ container: classes.slider }}
          value={this.state.value}
          onChange={this.handleChange}
          min={1}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SliderUI);
