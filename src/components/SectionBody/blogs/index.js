/**
 * the "Customer Testimonials" section of the body
 */

import {
    Typography,
    IconButton,
    Card,
    CardMedia,
    CardContent,
    Button,
} from "@material-ui/core";
import {useState} from "react";

//svg icons
import {arrowright, arrowleft} from "@/svgStore/svgCall";

//sibling files
import blogsData from "./data";
import {moveLeft, moveRight} from "./slideFunction";
import useStyles from "./styles";

testimonials.title = "Blogs";

export default function testimonials() {
    const classes = useStyles();

    const defaultState = {
        div1: {
            data: 0,
            position: "left",
        },
        div2: {
            data: 1,
            position: "middle",
        },
        div3: {
            data: 2,
            position: "right",
        },
        areButtonsDisabled: false,
    };
    const [state, setState] = useState(() => defaultState);

    const makeContent = () => {
        //div1 div2 div3 states
        return [1, 2, 3].map((x, i) => (
            <Card
                elevation={3}
                key={i}
                className={`${classes.card} ${
                    classes[state[`div${x}`].position]
                }`}
            >
                <CardMedia
                    className={classes.img}
                    image={blogsData[state[`div${x}`].data].src}
                    component="img"
                    title={blogsData[state[`div${x}`].data].title}
                />
                <CardContent className={classes.textContainer}>
                    <Typography
                        variant="h6"
                        color="primary"
                        className={classes.title}
                    >
                        {blogsData[state[`div${x}`].data].title}
                    </Typography>
                    <Typography variant="body1">
                        {blogsData[state[`div${x}`].data].summary}
                    </Typography>
                    <Typography variant="body2" className={classes.date}>
                        – {blogsData[state[`div${x}`].data].date}
                    </Typography>
                    <div>
                        <Button
                            variant="outlined"
                            className={classes.fullStoryButton}
                        >
                            Full Story
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ));
    };
    return (
        <div className={classes.root}>
            {makeContent()}
            <IconButton
                className={`arrow ${classes.arrowLeft}`}
                disabled={state.areButtonsDisabled}
                onClick={() => moveRight(setState)}
            >
                {arrowleft}
            </IconButton>
            <IconButton
                className={`arrow ${classes.arrowRight}`}
                disabled={state.areButtonsDisabled}
                onClick={() => moveLeft(setState)}
            >
                {arrowright}
            </IconButton>
        </div>
    );
}
