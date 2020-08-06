import React, { ReactElement } from "react";
import { Education } from "../../types/resume";
import { resumeStyles } from "../../assets/css/detail/blog";

interface EdcProps {
  edc: Array<Education>;
}

const Edc: React.FC<EdcProps> = ({ edc }): ReactElement => {
  const classes = resumeStyles();
  return (
    <>
      {edc.map((ed) => {
        return (
          <section>
            <div className={classes.container}>
              <div className={classes.content}>
                <div className={classes.fullWidth}>
                  <div className={classes.imgContainer}>
                    <img alt={ed.school} src={ed.img} className={classes.img} />
                  </div>
                  <div className={classes.companyContainer}>
                    <h3 className={classes.jobTitle}>{ed.school}</h3>
                    <span className={classes.company}>{ed.study}</span>
                    <div className={classes.flex}>
                      <h4 className={classes.date}>
                        <span>{ed.date}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Edc;
