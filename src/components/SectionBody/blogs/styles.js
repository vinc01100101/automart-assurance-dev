import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        position: "relative",
        display: "flex",
        width: "100%",
        // height: "570px",
        // [theme.breakpoints.up("sm")]: {
        //     height: "570px",
        // },
        // [theme.breakpoints.up("md")]: {
        //     height: "570px",
        // },
        // [theme.breakpoints.up("lg")]: {
        //     height: "570px",
        // },
        // [theme.breakpoints.up("xl")]: {
        //     height: "570px",
        // },

        "& .arrow": {
            position: "absolute",
            top: "35%",
            border: "hidden",
            borderRadius: "50%",
            padding: "0px",
            transform: "translateY(247px)",
            [theme.breakpoints.down("sm")]: {
                width: 40,
            },
        },
    },

    arrowLeft: {
        left: "-20px",
        [theme.breakpoints.down("sm")]: {
            left: 0,
        },
    },
    arrowRight: {
        right: "-20px",
        [theme.breakpoints.down("sm")]: {
            right: 0,
        },
    },
    title: {
        fontWeight: "bold",
    },
    date: {
        margin: "20px 0px",
    },
    img: {
        width: "100%",
        border: "hidden",
        borderRadius: "10px",
    },
    card: {
        position: "absolute",
        left: "0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        // height: "100%",
        padding: "20px 40px",
        border: "hidden",
        borderRadius: "20px",
        transition: "all",
    },
    fullStoryButton: {
        width: 200,
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flex: "1",
        color: "#636363",
        [theme.breakpoints.up("md")]: {
            padding: "20px",
        },
    },
    //animations
    middle: {
        transform: "translateX(0%)",
        transitionTimingFunction: "ease-out",
        transitionDuration: "1s",
        opacity: 1,
    },
    left: {
        transform: "translateX(-100%)",
        transitionTimingFunction: "ease-in",
        transitionDuration: "0.5s",
        opacity: 0,
    },
    right: {
        transform: "translateX(100%)",
        transitionTimingFunction: "ease-in",
        transitionDuration: "0.5s",
        opacity: 0,
    },
}));
