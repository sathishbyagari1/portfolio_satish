import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_EDUCATION":
        this.setState({
          educations: [newObject, ...this.state.educations],
        });
        break;
      default:
        break;
    }
  };

  state = {
    handler: this.handler,
    educations: [
      {
        id: 1,
        qualification: "Masters In Information Systems",
        institutions: "Pace University, Newyork",
        cgpa: "currently 3.3/4",
        year_of_passing: "expected 2026",
      },
      {
        id: 2,
        qualification: "Bachelors in information techonology",
        institutions: "MVSR Engineering college, Hyderabad",
        cgpa: "7/10",
        year_of_passing: "2018-2022",
      },
      {
        id: 3,
        qualification: "Intermediate (TSBIE Board)",
        institutions: "Sri Chaitnaya Junior College, Hyderabad",
        cgpa: "920/1000",
        year_of_passing: "2016-2018",
      },
      {
        id: 4,
        qualification: "Grade-10 (SSC Board)",
        institutions: "MSR High School, Suryapet",
        cgpa: "7.5/10",
        year_of_passing: "2016",
      },
    ],
    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "JavaScrip",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 4,
        name: "ReactJS",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 5,
        name: "MySQL",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "Java",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Bootstrap",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 9,
        name: "cprogramming",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 10,
        name: "flask",
        imageUrl:
          "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 11,
        name: "MongoDB",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 12,
        name: "OracleSQL",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 13,
        name: "NodeJS",
        imageUrl:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        starsTotal: 3,
        starsActive: 1,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Project-1",
        disc: "I bulit a webpage",
        imageUrl:
          "https://www.agileit.com/wp-content/uploads/2018/11/Community-Programming.png",
      },
      {
        id: 2,
        title: "Project-2",
        disc: "sales prediction using Machine Learning ",
        imageUrl:
          "https://i.pinimg.com/564x/a0/d6/ad/a0d6ad0d04b8619f12aa1f2f7d2c0c5a.jpg",
      },
      {
        id: 3,
        title: "Project-3",
        disc: "Smart parking using Licence plate recognition",
        imageUrl:
          "https://i.pinimg.com/564x/18/cd/fe/18cdfe01db18f8fe2988a1b679afb42a.jpg",
      },
      {
        id: 4,
        title: "Project-4",
        disc: "I build products. Just like this website",
        imageUrl:
          "https://www.agileit.com/wp-content/uploads/2018/11/Community-Programming.png",
      },
    ],
  };

  async componentDidMount() {
    const [responseEducations, responseSkills, responseProjects] =
      await Promise.all([
        axios.get("http://127.0.0.1:8080/api/educations"),
        axios.get("http://127.0.0.1:8080/api/skills"),
        axios.get("http://127.0.0.1:8080/api/projects"),
      ]);
    const newState = {};
    if (
      responseEducations.data.isSuccessful &&
      responseEducations.data.results.length !== 0
    ) {
      newState.educations = responseEducations.data.results;
    }
    if (
      responseSkills.data.isSuccessful &&
      responseSkills.data.results.length !== 0
    ) {
      newState.skills = responseSkills.data.results;
    }
    if (
      responseProjects.data.isSuccessful &&
      responseProjects.data.results.length !== 0
    ) {
      newState.projects = responseProjects.data.results;
    }
    this.setState(newState);
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
