import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  gridTitle: {
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  gridLink: {
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecoration: "none !important",
    margin: "16px 20px",
    whiteSpace: "nowrap",

    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },

    "& > svg": {
      marginRight: 7,
    },
  },
}));
