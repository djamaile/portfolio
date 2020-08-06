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

const resumeStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 700,
      fontSize: "2rem",
      marginBottom: 15,
    },
    container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      margin: 15,
    },
    content: {
      flexDirection: "column",
      display: "flex",
      width: "100%",
    },
    fullWidth: {
      width: "100%",
    },
    imgContainer: {
      height: 56,
      width: 56,
      float: "left",
      position: "relative",
    },
    img: {
      width: "auto",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxSizing: "border-box",
      backgroundClip: "content-box",
      border: "4px solid transparent",
      borderRadius: "6px",
    },
    companyContainer: {
      flex: "1 0",
      width: "auto",
      marginLeft: "80px",
      overflow: "hidden",
      marginBottom: 8,
    },
    jobTitle: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 0,
      marginTop: 0,
    },
    company: {
      display: "inline",
      fontSize: 13,
    },
    flex: {
      display: "flex",
    },
    date: {
      fontSize: 10,
      marginTop: 0,
      marginBottom: 0,
    },
    city: {
      marginLeft: 80,
      fontSize: 10,
    },
    information: {
      color: "black",
      fontSize: 11,
    },
  })
);

export { articleStyles, resumeStyles };
