import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopMenuPanel from "./TopAppBar";
import PipelineTreeView from "./PipelineTreeView";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "Pipeline"
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <TopMenuPanel name={this.state.currentView} />
        <PipelineTreeView />
      </React.Fragment>
    );
  }
}

export default App;
