import React, { Component } from "react";
// import ProjectItem from "./component/projectItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopMenuPanel from "./TopMenuPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "Pipelines"
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <TopMenuPanel name={this.state.currentView} />
      </React.Fragment>
    );
  }
}

export default App;
