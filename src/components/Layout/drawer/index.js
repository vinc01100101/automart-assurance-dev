//material ui
import {
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    Link,
} from "@material-ui/core";
//sibling files
import useStyles from "./styles";
//SVG icon pieces
import {
    facebook,
    instagram,
    linkedin,
    youtube,
    sellmycar,
} from "@/svgStore/svgCall";
//href strings
import {
    AUTOMART,
    MOTOMART,
    FAQS,
    CONTACTUS,
    FACEBOOK,
    INSTAGRAM,
    YOUTUBE,
    LINKEDIN,
} from "@/components/hrefLinks";
//drawer component
export default function drawer({isDrawerOpen, toggleDrawer}) {
    const classes = useStyles();

    //references
    const textLinks = [
        [AUTOMART, "Buy a Car"],
        [MOTOMART, "Buy a Motorcycle"],
        [FAQS, "FAQs"],
        [CONTACTUS, "Contact Us"],
    ];

    const logoLinks = [
        [FACEBOOK, facebook, "Facebook"],
        [INSTAGRAM, instagram, "Instagram"],
        [YOUTUBE, youtube, "YouTube"],
        [LINKEDIN, linkedin, "Linked In"],
    ];

    const makeList = () => {
        return textLinks.map((textLink, i) => (
            <Link
                key={i}
                href={textLink[0]}
                target={
                    textLink[1] == "FAQs" || textLink[1] == "Contact Us"
                        ? ""
                        : "_blank"
                }
                onClick={toggleDrawer(false)}
            >
                <ListItem button>
                    <ListItemText
                        primary={textLink[1]}
                        primaryTypographyProps={{variant: "h6"}}
                    />
                </ListItem>
            </Link>
        ));
    };

    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={isDrawerOpen}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                disableBackdropTransition
                disableDiscovery
                disableSwipeToOpen
                transitionDuration={{enter: 400, exit: 400}}
            >
                <div className={classes.drawerContainer}>
                    <List>
                        {sellmycar}
                        <ListItem>
                            <Typography className={classes.callUs}>
                                <a href="tel:+63963 188 2087">
                                    Call us: +63963 188 2087
                                </a>
                            </Typography>
                        </ListItem>
                        {makeList()}
                    </List>

                    {/*---- justifyContent: "space-between" ----*/}

                    <List>
                        <ListItem>
                            {logoLinks.map((logoLink, i) => (
                                <Link
                                    key={i}
                                    href={logoLink[0]}
                                    target="_blank"
                                >
                                    <IconButton aria-label={logoLink[2]}>
                                        {logoLink[1]}
                                    </IconButton>
                                </Link>
                            ))}
                        </ListItem>
                        <ListItem>
                            <Typography className={classes.copyRight}>
                                © Copyright 2020, Automart.PH
                                <br />
                                All rights reserved
                            </Typography>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </>
    );
}
