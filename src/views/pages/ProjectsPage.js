import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProjectPageHeader from "components/Headers/ProjectPageHeader";
import ProjectCard from 'components/Card/ProjectCard';
import { Grid, makeStyles } from '@material-ui/core';
import projectList from 'components/Card/project-list';


const useStyles = makeStyles(() => (
  {
    root: {
      marginTop: '100px'
    }
  }
));

const Content = () => {
  const createProjectCard = project => {
    return (
      <Grid item xs={12} sm={10} md={6} lg={4} >
        <ProjectCard {...project} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {projectList.map(project => createProjectCard(project))}
    </Grid>
  );
};


const ProjectsPage = () => {
  const styles = useStyles();

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("projects");
    return function cleanup() {
      document.body.classList.remove("projects");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProjectPageHeader />

      <Grid className={styles.root} container direction="column">
        <Grid item container>            
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            {Content()}
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>     
    </>
  );
}

export default ProjectsPage;
