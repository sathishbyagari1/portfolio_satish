import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import ProjectSection from "./components/ProjectSection";
import ProjectPage from "./components/ProjectPage";
import EductionSection from "./components/EducationSection";
import TechnologyStack from "./components/TechnologyStack";
import Title from "./components/Title";
import AddProject from "./components/AddProject";
import AddEducation from "./components/AddEducation.js";
import AllProjects from "./components/AllProjects";
import ScrollToTop from "./components/ScrollToTop.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./components/Context.js";
import HomePage from "./components/Homepage.js";

function App() {
  return (
    <Provider>
      <React.StrictMode>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}>
              <Title
                name=" Kalyan Papani"
                leadText="Iam a Student at Pace University"
              />
              <EductionSection />
              <TechnologyStack />
              <ProjectSection />
              <AboutMe />
            </Route>
            <Route exact path="/contact" component={Contact}>
              <Contact />
            </Route>
            <Route exact path="/add-education" component={AddEducation}>
              <AddEducation />
            </Route>
            <Route exact path="/project/add" component={AddProject} />
            <Route exact path="/allprojects" component={AllProjects} />

            <Route exact path="/project/:id" component={ProjectPage} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  );
}

export default App;
