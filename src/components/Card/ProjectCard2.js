import React from 'react';
// import ReactDOM from "react-dom";
// import JssProvider from "react-jss/lib/JssProvider";
// import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const muiBaseTheme = createMuiTheme();

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%"
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold"
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit
            }
          }
        }
      }
    }
  }
};

const ProjectCard2 = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className="App">
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia
            image= {"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
              }
            />
            <CardContent>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              >
                Nature Around Us
              </Typography>
              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
                We are going to learn different kinds of species in nature that
                live together to form amazing environment.
              </Typography>
              <Divider dark />
            </CardContent>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

export default ProjectCard2;