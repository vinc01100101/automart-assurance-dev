import {Typography, Button, Container, Hidden} from "@material-ui/core";
import useStyles from "./styles";

//redux
import {useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";

import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();

export default function sectionHeader() {
    let basePath = publicRuntimeConfig.basePath
        ? publicRuntimeConfig.basePath
        : "";

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        // dispatch(onChange({key: "dialogCtplIsOpen", value: true}));
    };

    return (
        <div className={classes.root}>
            <div className={classes.semiRoot}>
                <div className={classes.blackBackground} />
                <img
                    className={classes.imgBackground}
                    src={`${basePath}images/headerImage.webp`}
                    srcSet={`${basePath}images/headerImage_4000.webp 4000w, ${basePath}images/headerImage_2000.webp 2000w, ${basePath}images/headerImage_1000.webp 1000w`}
                    sizes="100vw"
                    alt="A cover image."
                />
                <Container maxWidth="sm" className={classes.container}>
                    <Typography
                        variant="h2"
                        component="h1"
                        className={classes.headerText}
                    >
                        Peace of Mind Is Just a Click Away.
                    </Typography>
                    <Button
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
}
