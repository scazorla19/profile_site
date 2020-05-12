import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import IndexPage from "views/pages/IndexPage";
import ProjectsPage from "views/pages/ProjectsPage";
import ProfilePage from "views/pages/ProfilePage";
import ContactPage from "views/pages/ContactPage";
import ComingSoonPage from "views/pages/ComingSoonPage";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/index" 
        render={props => <IndexPage {...props} />} 
      />
      <Route
        path="/projects"
        render={props => <ProjectsPage {...props} />}
      />
      <Route
        path="/profile"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/contact-me"
        render={props => <ContactPage {...props} />}
      />
            <Route
        path="/coming-soon"
        render={props => <ComingSoonPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
