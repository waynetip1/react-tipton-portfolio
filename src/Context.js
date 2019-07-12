import React, { Component } from "react";
import items from "./data";
import { FaRestroom } from "react-icons/fa";
const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
  // get data
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  render() {
    return (
      <ProjectContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}
const ProjectConsumer = ProjectContext.Consumer;
export { ProjectProvider, ProjectConsumer, ProjectContext };
