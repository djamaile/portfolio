import React, { ReactElement } from "react";
import { Experience } from "../../types/resume";
import { resumeStyles } from "../../assets/css/detail/blog";
import Techstacks from "./TechStack";

interface ExpProps {
  exp: Array<Experience>;
}

const Exp: React.FC<ExpProps> = ({ exp }): ReactElement => {
  const classes = resumeStyles();
  return (
    <>
      {exp.map((we) => {
        return (
          <section>
            <div className={classes.container}>
              <div className={classes.content}>
                <div className={classes.fullWidth}>
                  <div className={classes.imgContainer}>
                    <img
                      alt={we.company}
                      src={we.img}
                      className={classes.img}
                    />
                  </div>
                  <div className={classes.companyContainer}>
                    <h3 className={classes.jobTitle}>{we.jobTitle}</h3>
                    <span className={classes.company}>{we.company}</span>
                    <div className={classes.flex}>
                      <h4 className={classes.date}>
                        <span>{we.date} •</span>
                      </h4>
                      <h4 className={classes.date}>
                        <span> {we.workLength}</span>
                      </h4>
                    </div>
                    <div style={{ display: "block", fontSize: 10 }}>
                      <span>{we.location}</span>
                    </div>
                  </div>
                </div>
                <div className={classes.city}>
                  <span className={classes.information}>
                    {we.tasks.map((task) => {
                      return (
                        <>
                          • {task} <br />
                        </>
                      );
                    })}
                  </span>
                  <Techstacks stack={we.techstack} />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Exp;
