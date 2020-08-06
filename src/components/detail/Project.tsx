import React, { ReactElement } from "react";
import Chip from "@material-ui/core/Chip";
import { projectStyles } from "../../assets/css/detail/project";
import { projects } from "../../utils/data";

interface Props {
  stack: Array<string>;
}

const TechStacks: React.FC<Props> = ({ stack }): ReactElement => {
  return (
    <>
      {stack.map((tech) => {
        return (
          <Chip label={tech} color="secondary" style={{ marginRight: 5 }} />
        );
      })}
    </>
  );
};

const Project: React.FC = (): ReactElement => {
  const classes = projectStyles();
  return (
    <>
      {projects.map((project) => {
        return (
          <section className={classes.container}>
            <div className={classes.imgContainer}>
              <img src={project.img} className={classes.img} alt="dummy img" />
            </div>
            <div className={classes.content}>
              <div className={classes.titleContainer}>
                <span className={classes.title}>{project.title}</span>
              </div>
              <span className={classes.description}>{project.description}</span>
              <div className={classes.linkContainer}>
                <a className={classes.link} href={project.codeLink}>
                  Code
                </a>
                <a className={classes.link} href={project.liveLink}>
                  Live
                </a>
              </div>
              <TechStacks stack={project.techstack} />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Project;
