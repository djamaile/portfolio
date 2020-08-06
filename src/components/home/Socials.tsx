import React, { ReactElement } from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames/bind";
import { socialStyles } from "../../assets/css/home/home";

const socialDetails = [
  {
    classname: "fab fa-linkedin fa-fw",
    link: "https://www.linkedin.com/in/djamaile/",
  },
  {
    classname: "fab fa-github fa-fw",
    link: "https://github.com/djamaile",
  },
  {
    classname: "fab fa-youtube fa-fw",
    link: "https://www.linkedin.com/in/djamaile/",
  },
  {
    classname: "fab fa-dev fa-fw",
    link: "https://dev.to/djamaile",
  },
];

const Socials: React.FC = (): ReactElement => {
  const classes = socialStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      if (node.parentNode !== undefined) {
        node.parentNode.removeChilde(node);
      }
    };
  }, []);

  return (
    <div className={classes.container}>
      {socialDetails.map((cn) => {
        return (
          <a href={cn.link} target="_blank" rel="noopener noreferrer">
            <Icon
              key={cn.classname}
              className={classNames(cn.classname, classes.icon)}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
