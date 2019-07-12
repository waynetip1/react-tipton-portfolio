import React, { Component } from "react";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {};
  render() {
    return (
      <ProjectContext.Provider value="Hello">
        {this.props.childern}
      </ProjectContext.Provider>
    );
  }
}
const ProjectConsumer = ProjectContext.Consumer;
export { ProjectProvider, ProjectConsumer, ProjectContext };
