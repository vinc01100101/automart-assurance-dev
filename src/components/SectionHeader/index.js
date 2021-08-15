import {Typography, Button, Container} from "@material-ui/core";
import useStyles from "./styles";

//redux
import {useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";

import Image from "next/image";
// import headerImage from "../../images/headerImage.png";

const basePath = process.env.NEXT_PUBLIC_BASEPATH;

export default function sectionHeader() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(onChange({key: "dialogGetQuoteIsOpen", value: true}));
    };

    return (
        <div className={classes.root}>
            <div className={classes.semiRoot}>
                <div className={classes.blackBackground} />
                {/* <img
                    className={classes.imgBackground}
                    src={`${basePath}/images/headerImage.webp`}
                    srcSet={`${basePath}/images/headerImage_4000.webp 4000w, ${basePath}/images/headerImage_2000.webp 2000w, ${basePath}/images/headerImage_1000.webp 1000w`}
                    sizes="100vw"
                    alt="A cover image."
                /> */}
                <Image
                    className={classes.imgBackground}
                    src={`${basePath}/images/headerImage.png`}
                    alt="Picture of the author"
                    // layout="responsive"
                    // width={1240}
                    // height={600}
                    // sizes="(max-height: 500px) 1000px, 2000px"
                    layout="fill"
                    objectFit="cover"
                />
                <Container maxWidth="sm" className={classes.container}>
                    <Typography
                        variant="h2"
                        component="h1"
                        className={classes.headerText}
                    >
                        Affordable car insurance for your peace of mind
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
