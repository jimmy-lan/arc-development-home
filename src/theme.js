import { createMuiTheme } from "@material-ui/core";

const polyPurple = "#4e42d9";
const polyOrange = "#ffba60";

export default createMuiTheme({
  palette: {
    common: {
      purple: polyPurple,
      orange: polyOrange,
    },
    primary: {
      main: polyPurple,
    },
    secondary: {
      main: polyOrange,
    },
  },
});
