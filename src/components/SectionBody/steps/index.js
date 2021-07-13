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

import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();

steps.title = "";

export default function steps() {
    let basePath = publicRuntimeConfig.basePath
        ? publicRuntimeConfig.basePath
        : "/";

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
                            src={`${basePath}images/ClaimAndRegistration/${i}.webp`}
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
                            {entry.button &&
                                //   idk why conditional statement doesn't work on color props,
                                //   so i'll do this instead
                                (i == 0 ? (
                                    <Button
                                        className={`${classes.button} ${classes.whiteButton}`}
                                        variant="contained"
                                        onClick={() =>
                                            dispatch(
                                                onChange({
                                                    key: "dialogCtplIsOpen",
                                                    value: true,
                                                })
                                            )
                                        }
                                    >
                                        {entry.button}
                                    </Button>
                                ) : (
                                    <Button
                                        className={classes.button}
                                        variant="contained"
                                        // onClick={() =>
                                        //     dispatch(
                                        //         onChange({
                                        //             key: "dialogCtplIsOpen",
                                        //             value: true,
                                        //         })
                                        //     )
                                        // }
                                    >
                                        {entry.button}
                                    </Button>
                                ))}
                        </CardActions>
                    </CardContent>
                </div>
            </Card>
        );
    };

    return <>{data.map(makeCards)}</>;
}
