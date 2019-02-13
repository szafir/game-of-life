import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Drawer, Divider, AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import { connect } from "react-redux";

const drawerWidth = 220;

const styles = theme => ({
  // header: {
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  //   backgraound: "red",
  //   display: "flex",
  //   justifyContent: "space-evenly"
  // },d
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
    top: "50%",
    right: theme.spacing.unit * -0.5
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
              <Badge badgeContent={this.props.generationNo} showZero={true} max={9999} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Generation no</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={this.props.alivedCells} max={999} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Alived cells</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={this.props.cellsAmount} max={9999} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Cells amount</ListItemText>
              </Badge>
            </ListItem>
            <ListItem className={classes.nestedListItem} >
              <Badge badgeContent={this.props.velocity} showZero={true} color="primary" classes={{ badge: classes.badge }}>
                <ListItemText>Velocity</ListItemText>
              </Badge>
            </ListItem>
          </List>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  generationNo: state.generationNo,
  alivedCells: state.alivedCells,
  cellsAmount: state.cellsAmount,
  velocity: state.velocity,
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
// export default withStyles(styles)(Header);
