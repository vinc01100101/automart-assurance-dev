//material ui
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Grid,
  Link,
  SvgIcon,
} from "@material-ui/core";
//appbar link icons
import { mdiFaceAgent, mdiFrequentlyAskedQuestions } from "@mdi/js";
//mui icons
import { Menu as MenuIcon } from "@material-ui/icons";
//sibling files
import useStyles from "./styles";
//svg piece
import { sellmycar } from "@/svgStore/svgCall";
//href strings
import { FAQS, CONTACTUS } from "@/components/hrefLinks";

export default function appBar({ toggleDrawer }) {
  const classes = useStyles();

  //references
  const textLinks = [
    [FAQS, "FAQs", mdiFrequentlyAskedQuestions],
    [CONTACTUS, "Contact Us", mdiFaceAgent],
  ];

  const makeList = () => {
    return textLinks.map((textLink, i) => (
      <Link
        key={i}
        href={textLink[0]}
        className={classes.gridLink}
        variant="h6"
      >
        <SvgIcon>
          <path d={textLink[2]} />
        </SvgIcon>
        {textLink[1]}
      </Link>
    ));
  };

  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Grid container wrap="nowrap">
            <Grid item xs={1} className={classes.gridMenu}>
              <IconButton
                aria-label="Menu Button"
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={10}
              sm={4}
              container
              className={classes.gridTitle}
              alignItems="center"
            >
              <a aria-label="Home" href="#">
                {sellmycar}
              </a>
            </Grid>

            <Hidden xsDown>
              <Grid
                item
                sm={8}
                container
                wrap="nowrap"
                justify="flex-end"
                alignItems="center"
              >
                {makeList()}
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* ----another Toolbar to make items behind the AppBar component visible---- */}
      <Toolbar />
    </>
  );
}
