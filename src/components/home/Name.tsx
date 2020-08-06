import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { nameStyles } from "../../assets/css/home/home";

const Name: React.FC = (): ReactElement => {
  const classes = nameStyles();

  return (
    <Typography
      variant="h1"
      component="h2"
      gutterBottom
      className={classes.name}>
      Djamaile Rahamat
    </Typography>
  );
};

export default Name;
