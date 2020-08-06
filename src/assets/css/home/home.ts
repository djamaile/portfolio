import { makeStyles, createStyles } from "@material-ui/core/styles";

const nameStyles = makeStyles(() =>
  createStyles({
    name: {
      textAlign: "center",
      fontSize: 70,
    },
  })
);

const introductionStyles = makeStyles(() =>
  createStyles({
    introduction: {
      textAlign: "center",
    },
  })
);

const socialStyles = makeStyles(() =>
  createStyles({
    icon: {
      fontSize: 30,
      marginTop: 10,
      marginRight: 10,
      color: "black",
    },
    container: {
      textAlign: "center",
    },
  })
);

export { nameStyles, introductionStyles, socialStyles };
