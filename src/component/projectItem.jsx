import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return <React.Fragment>{this.props.projectItem.name}</React.Fragment>;
  }
}

export default ProjectItem;
