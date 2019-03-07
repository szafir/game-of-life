import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  List, ListItem, ListItemText, Drawer, Divider, AppBar, Toolbar, Typography, Badge
} from "@material-ui/core";
import { connect } from "react-redux";
import Slider from "./SliderUI";
import * as actionTypes from "../actions/actionTypes";
import ToolbarCustom from "./Toolbar";

const drawerWidth = 220;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 1000
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: {
    height: theme.spacing.unit * 8,
  },
  nestedListItem: {
    paddingLeft: theme.spacing.unit * 4,
  },
  badge: {
    top: "50%",
    right: theme.spacing.unit * -0.5
  },
  sliderContainer: {
    padding: theme.spacing.unit * 2
  }
});

const Header = (props) => {
  const changeSpeed = (value) => {
    props.changeSpeed({
      speed: value
    })
  }
  const { classes, pathname } = props;
  return (
    <>
      <AppBar position="fixed" color="default" >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap>
            Game of life
          </Typography>
          <ToolbarCustom />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={classes.drawer}>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={NavLink} to="/" selected={pathname === "/"} >
            <ListItemText>Position implementation</ListItemText>
          </ListItem>
          {/* <ListItem button component={NavLink} to="/flexbox" selected={pathname === "/flexbox"}>
            <ListItemText>Flexbox implementation</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/canvas" selected={pathname === "/canvas"}>
            <ListItemText>Canvas implementation</ListItemText>
          </ListItem> */}
          <Divider />
          <ListItem >
            <ListItemText>Statistics:</ListItemText>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.generationNo} showZero={true} max={9999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Generation</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.alivedCells} max={9999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Population</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={`${props.velocity}/s`} showZero={true} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Generation velociy</ListItemText>
            </Badge>
          </ListItem>
        </List>
        <Slider label={`Speed`} onChange={changeSpeed}/>
      </Drawer>
    </>
  );
};

const mapStateToProps = state => ({
  generationNo: state.cell.generationNo,
  alivedCells: state.cell.alivedCells,
  cellsAmount: state.cell.cellsAmount,
  velocity: state.cell.velocity,
});

const mapDispatchToProps = dispatch => ({
  changeSpeed: (payload) => dispatch({ type: actionTypes.CHANGE_SPEED, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
