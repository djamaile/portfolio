import { makeStyles, createStyles } from "@material-ui/core/styles";

const articleStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: 35,
      fontWeight: 800,
      color: "#7fdbda",
    },
    date: {
      fontSize: 15,
      color: "#9a9a9a",
    },
    container: {
      margin: 20,
    },
  })
);

export { articleStyles };
