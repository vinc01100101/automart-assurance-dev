/**
 * the "Just follow these 3 easy steps" section of the body
 */

import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@material-ui/core";

//sibling files
import useStyles from "./styles";
import data from "./data";

//redux
import {useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";

import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASEPATH;

steps.title = "Getting car insurance now is as easy as 1-2-3";

export default function steps() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const makeCards = (entry, i) => {
        return (
            <Card
                key={i}
                className={`${classes.root} ${i == 0 && classes.introStep}`}
                elevation={3}
            >
                <div className={classes.setFlex}>
                    <div className={classes.logoContainer}>
                        <Image
                            src={`${basePath}/svg/not-in-sprite/logo-step${i}.svg`}
                            alt={entry.title}
                            width={entry.size[0]}
                            height={entry.size[1]}
                            layout="fixed"
                        />
                    </div>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="div"
                            className={classes.title}
                            style={{color: i == 0 && "white"}}
                        >
                            {entry.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            style={{color: i == 0 && "white"}}
                        >
                            {entry.content}
                        </Typography>
                        <CardActions className={classes.cardActions}>
                            {entry.button && (
                                <Button
                                    className={`${classes.button} ${classes.whiteButton}`}
                                    variant="contained"
                                    color="inherit"
                                    onClick={() =>
                                        dispatch(
                                            onChange({
                                                key: "dialogGetQuoteIsOpen",
                                                value: true,
                                            })
                                        )
                                    }
                                >
                                    {entry.button}
                                </Button>
                            )}
                        </CardActions>
                    </CardContent>
                </div>
            </Card>
        );
    };

    return <>{data.map(makeCards)}</>;
}
