import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const theme = {
  overrides: {
    // Style sheet name ⚛️
    MuiMenuItem: {
      root: {
        whiteSpace: "normal",
      },
    },
    MuiSelect: {
      selectMenu: {
        whiteSpace: "pre-wrap",
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: "none !important",
        "&::before": {
          top: 0,
        },
      },
    },
    MuiCollapse: {
      container: {
        boxShadow: `0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);`,
      },
    },
  },
  palette: {
    primary: {
      light: "#545678",
      main: "#2A2D4C",
      dark: "#020224",
      contrastText: "#fff",
      background: "rgba(255,147,44,.6)",
    },
    secondary: {
      light: "#9fd497",
      main: "#6FA269",
      // main: "#2D6227", //WCAD color contrast passing ratio
      dark: "#42743d",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `'Source Sans Pro', sans-serif`,
    body1: {
      fontSize: "16px",
      [breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },
    h5: {
      [breakpoints.up("md")]: {
        fontWeight: "bold",
      },
    },
  },
};

export { theme };
