import React, { ReactElement } from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames/bind";
import { socialStyles } from "../../assets/css/home/home";

const classnames = [
  "fab fa-linkedin fa-fw",
  "fab fa-github fa-fw",
  "fab fa-youtube fa-fw",
  "fab fa-dev fa-fw",
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
      {classnames.map((cn) => {
        return <Icon key={cn} className={classNames(cn, classes.icon)} />;
      })}
    </div>
  );
};

export default Socials;
