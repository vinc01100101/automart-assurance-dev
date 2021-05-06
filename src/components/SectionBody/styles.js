import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  introFlexSetter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "left",
    },
  },
  introImage: {
    clipPath: `circle(50%)`,
    paddingRight: "30px",
  },
  introImageWrapper: {
    position: "relative",
    flexShrink: 0,
    width: "300px",
    height: "300px",
    marginBottom: "30px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "0px",
      marginRight: "30px",
    },
  },
  introTitle: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px !important",
    },
  },
  title: {
    margin: "20px 30px 20px 30px",
  },
  child: {
    marginBottom: "98px",
    width: "100%",
    paddingTop: 70,
    marginTop: -70,
  },
  //for curved light green background of "Just follow these 3 easy steps" section.
  stepsBackground: {
    width: "120%",
    background: "#F0F5EF",
    padding: "68px 10% 158px 10%",
    border: "hidden",
    borderBottomRightRadius: "50% 140px",
    borderBottomLeftRadius: "50% 140px",
    borderTopRightRadius: "50% 140px",
    borderTopLeftRadius: "50% 140px",
  },
  //for bordered light green bg of "You can call or chat with us!"
  callOrChatBackground: {
    background: "#F0F5EF",
    borderColor: [theme.palette.secondary.main],
    border: "2px solid",
    borderRadius: "10px",
    boxShadow: `0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);`,
  },
}));
