import React, { Component } from "react";
import { DiReact, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import Title from "./Title";
export default class Skills extends Component {
  state = {
    skills: [
      {
        icon: <DiReact />,
        title: "React.js",
        info: "Proficient at building React.js single page apps with Redux."
      },
      {
        icon: <DiJavascript1 />,
        title: "JavaScript",
        info:
          "Proficient at implementing JavaScript and executing DOM manipulations."
      },
      {
        icon: <DiCss3 />,
        title: "CSS",
        info:
          "Proficient at CSS styling, CSS component libraries like Bootstrap, Materialize and preprocessing with Sass."
      },
      {
        icon: <DiHtml5 />,
        title: "HTML5",
        info: "Proficient at building websites structured with HTML5."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Skills" />
        <div className="services-center">
          {this.state.skills.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
