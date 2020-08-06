import { createMuiTheme } from "@material-ui/core";
import palette from "./palette";

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      label: {
        color: "black",
        fontWeight: 600,
      },
    },
  },
  palette,
});

export default theme;
