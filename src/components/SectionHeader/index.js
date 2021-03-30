import { Typography, Button, Container, Hidden } from "@material-ui/core";
import useStyles from "./styles";

//redux
import { useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";

const sectionHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModal("getMyQuote"));
  };
  return (
    <div className={classes.root}>
      <div className={classes.semiRoot}>
        <div className={classes.blackBackground} />
        <img className={classes.imgBackground} src="images/headerImage.webp" />

        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h3" className={classes.headerText}>
            Sell or Trade-in Cars With Zero Headaches
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            Get my QUOTE
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default sectionHeader;
