import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  List, ListItem, ListItemText, Drawer, Divider, AppBar, Toolbar, Typography, Badge
} from "@material-ui/core";
import { connect } from "react-redux";

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
  toolbar: theme.mixins.toolbar,
  nestedListItem: {
    paddingLeft: theme.spacing.unit * 4,
  },
  badge: {
    top: "50%",
    right: theme.spacing.unit * -0.5
  }
});

const Header = (props) => {
  const { classes, pathname } = props;
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Game of life
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={classes.drawer}>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={NavLink} to="/" selected={pathname === "/"} >
            <ListItemText>Position implementation</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/flexbox" selected={pathname === "/flexbox"}>
            <ListItemText>Flexbox implementation</ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/canvas" selected={pathname === "/canvas"}>
            <ListItemText>Canvas implementation</ListItemText>
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText>Statistics:</ListItemText>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.generationNo} showZero={true} max={9999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Generation no</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.alivedCells} max={999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Alived cells</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.cellsAmount} max={9999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Cells amount</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={props.velocity} showZero={true} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Velocity</ListItemText>
            </Badge>
          </ListItem>
          <ListItem className={classes.nestedListItem} >
            <Badge badgeContent={(props.velocity / props.alivedCells).toFixed(3)} showZero={true} max={9999} color="primary" classes={{ badge: classes.badge }}>
              <ListItemText>Normalized velocity</ListItemText>
            </Badge>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

const mapStateToProps = state => ({
  generationNo: state.generationNo,
  alivedCells: state.alivedCells,
  cellsAmount: state.cellsAmount,
  velocity: state.velocity,
})
export default connect(mapStateToProps, null)(withStyles(styles)(Header));
