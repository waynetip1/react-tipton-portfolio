import React, { Component } from "react";
import { ProjectContext } from "../Context";
export default class FeaturedProjects extends Component {
  static contextType = ProjectContext;
  render() {
    const { featuredRooms: rooms } = this.context;
    console.log(rooms);
    return <div>Hello from featuredprojects.js</div>;
  }
}
