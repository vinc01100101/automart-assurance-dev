/**
 * the "About Assurance PH" section of the body
 */

import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "10px",
        border: "hidden",
        borderRadius: "10px",
    },
    videoContainer: {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        paddingTop: "56.25%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
    },
    responsiveIframe: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
    },
}));

video.title = "About Assurance PH";

export default function video() {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3}>
            <div className={classes.videoContainer}>
                <iframe
                    className={classes.responsiveIframe}
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAssurancePhilippines%2Fvideos%2F270937701496985%2F&show_text=false&width=560&t=0"
                    style={{border: "none", overflow: "hidden"}}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
        </Paper>
    );
}
