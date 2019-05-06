import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import WorkIcon from "@material-ui/icons/Work";
import { getJobsAsync } from "../api-client";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class PipelineTreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      data: []
    };
  }

  componentDidMount = () => {
    getJobsAsync()
      .then(data => {
        this.setState({
          data: data
        });
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">Nested List Items</ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText inset primary="Sent mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText inset primary="Drafts" />
        </ListItem>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText inset primary="Inbox" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Starred" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

PipelineTreeView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PipelineTreeView);
