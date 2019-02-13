import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Drawer, Divider, AppBar, Toolbar, Typography, Badge } from "@material-ui/core";


const drawerWidth = 220;

const styles = theme => ({
  // header: {
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  //   backgraound: "red",
  //   display: "flex",
  //   justifyContent: "space-evenly"
  // },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
  },
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
    top: "50%"
  }
});


class Header extends Component {


  render() {
    const { classes } = this.props;
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
            <ListItem button component={Link} to="/">
              <ListItemText>Position implementation</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/flexbox">
              <ListItemText>Flexbox implementation</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/canvas">
              <ListItemText>Canvas implementation</ListItemText>
            </ListItem>

            <Divider />
            <ListItem >
              <ListItemText>Statistics:</ListItemText>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Generation no</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Alived cells</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Cells amount</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Velocity</ListItemText>
              </Badge>
            </ListItem>
          </List>
        </Drawer>
      </>
    );
  }
}
export default withStyles(styles)(Header);
