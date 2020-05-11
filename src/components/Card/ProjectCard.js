import React from 'react';
import { 
  CardMedia, 
  Divider, 
  Card, 
  CardHeader, 
  CardActions, 
  CardContent, 
  Typography, 
  Button, 
  makeStyles 
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 12,
    height: "100%",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  button: {
    color: 'secondary',
    variant: 'outlined'
  }
}));

const ProjectCard = props => {
  const styles = useStyles();
  const { title, subtitle, description, imageUrl, projectUrl } = props;
  return (
    <Card className={styles.root}>
      <CardHeader
        title={title}
        subheader={subtitle}
      />
      
      <CardMedia style={{ height: "300px" }} image={imageUrl} />
      <CardContent>
        <Typography variant='body2' noWrap="True">
          {description}
        </Typography>
      </CardContent>
      <Divider dark variant="middle" />
      <CardActions>
        <Button color='primary' size='small' href={projectUrl} target="_blank">CHECK IT OUT!!</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
