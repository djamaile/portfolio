import React from 'react';
import { projectStyles } from '../css';
import useThemeContext from '@theme/hooks/useThemeContext';
import { TechStacks } from '.';

export const Project = ({
  img,
  title,
  description,
  codeLink,
  liveLink,
  techstack,
}) => {
  const classes = projectStyles();
  const { isDarkTheme } = useThemeContext();
  const linkColor = isDarkTheme ? 'white' : '#18191a';

  return (
    <section className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={img} className={classes.img} alt="dummy img" />
      </div>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>{title}</span>
        </div>
        <span className={classes.description}>{description}</span>
        <div className={classes.linkContainer}>
          {codeLink ? (
            <a
              style={{
                marginRight: '.7rem',
                marginLeft: '-.7rem',
                padding: '.5rem .7rem',
                color: linkColor,
              }}
              href={codeLink}
              target="_blank"
            >
              Code
            </a>
          ) : (
            <></>
          )}
          {liveLink ? (
            <a
              style={{
                marginRight: '.7rem',
                marginLeft: '-.7rem',
                padding: '.5rem .7rem',
                color: linkColor,
              }}
              href={liveLink}
              target="_blank"
            >
              Live
            </a>
          ) : (
            <></>
          )}
        </div>
        <TechStacks stack={techstack} />
      </div>
    </section>
  );
};