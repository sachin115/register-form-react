import { createTheme } from "@material-ui/core";

const customTheme = createTheme({
  palette: {
    action: {
      disabledBackground: "#7facdf",
      disabledOpacity: "0.5 !important",
      disabled: "#FFFFFF",
    },
  },
});

export default customTheme;
