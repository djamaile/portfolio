import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { resumeStyles } from "../../assets/css/detail/blog";
import { experience, education } from "../../utils/data";
import Exp from "./Experience";
import Edc from "./Education";

const Resume: React.FC = (): ReactElement => {
  const classes = resumeStyles();
  return (
    <>
      <Typography className={classes.title} component="span" color="primary">
        Experience
      </Typography>
      <Exp exp={experience} />
      <Typography className={classes.title} component="span" color="primary">
        Education
      </Typography>
      <Edc edc={education} />
    </>
  );
};

export default Resume;
