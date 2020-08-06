import React, { ReactElement } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { articleStyles } from "../../assets/css/detail/blog";
import { useDevTo } from "../../hooks/useDevTo";

const Blog: React.FC = (): ReactElement => {
  const { articles, error, loading } = useDevTo("djamaile");
  const classes = articleStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  if (error) {
    return <span>Can&apos;t load in blog...</span>;
  }
  if (loading) {
    return <span>Loading blog...</span>;
  }

  return (
    <>
      {articles.map((article) => {
        return (
          <div key={article.id} className={classes.container}>
            <Typography className={classes.title} component="span">
              <Link
                href={article.canonical_url}
                onClick={preventDefault}
                color="inherit">
                {article.title}
              </Link>
            </Typography>
            <br />
            <span className={classes.date}>
              {article.readable_publish_date}
            </span>
            <br />
            <span>{article.description}</span>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
