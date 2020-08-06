import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { introductionStyles } from "../../assets/css/home/home";

const Introduction: React.FC = (): ReactElement => {
  const classes = introductionStyles();
  return (
    <>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.introduction}>
        I like full-stack development.
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.introduction}>
        Also, I am interested in the cloud, microservices and graphs.
      </Typography>
    </>
  );
};

export default Introduction;
