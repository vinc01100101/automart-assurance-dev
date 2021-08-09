//COMPONENTS
import intro from "./intro";
import aon from "./aon";
import video from "./video";
import steps from "./steps";
import guidelines from "./guidelines";
import benefits from "./benefits";
import blogs from "./blogs"; //waiting for testi data
import faqs from "./faqs";
import callorchat from "./callorchat";

import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASEPATH;

//reference
const componentReferenceArray = [
    intro,
    aon,
    video,
    steps,
    guidelines,
    benefits,
    blogs,
    faqs,
    callorchat,
];
//styles
import useStyles from "./styles";
//material ui
import {Container, Typography} from "@material-ui/core";

export default function body() {
    const classes = useStyles();

    return (
        // body component
        <div className={classes.root}>
            {/* body's children components */}
            {componentReferenceArray.map((Component, i) => {
                return (
                    // conditional classes.stepsBackground for light green background
                    <div
                        key={i}
                        id={`bodySection-${i}`}
                        className={`${classes.child} ${
                            i == 3 ? classes.stepsBackground : ""
                        }`}
                    >
                        {/* maxWidth = "sm" for steps = 3, blogs = 6 and callorchat = componentReferenceArray.length-1 */}
                        <Container
                            maxWidth={
                                i === 3 ||
                                i === 6 ||
                                i === componentReferenceArray.length - 1
                                    ? "sm"
                                    : "md"
                            }
                            // maxWidth={
                            //     i === componentReferenceArray.length - 1
                            //         ? "sm"
                            //         : "md"
                            // }
                            className={i === 0 ? classes.introFlexSetter : ""}
                        >
                            {/* circular header image */}
                            {i == 0 && (
                                <div className={classes.introImageWrapper}>
                                    <Image
                                        className={classes.introImage}
                                        src={`${basePath}/images/introImage.jpg`}
                                        alt="A girl reporting car damage."
                                        layout="fill"
                                        objectFit="cover"
                                        // width={500}
                                        // height={383}
                                        sizes="50vw"
                                    />
                                </div>
                            )}
                            <div
                                style={{flex: 1}}
                                className={`${
                                    i == componentReferenceArray.length - 1
                                        ? classes.callOrChatBackground
                                        : ""
                                }`}
                            >
                                <Typography
                                    className={`${classes.title}${
                                        i == 0 ? classes.introTitle : ""
                                    }`}
                                    variant="h4"
                                    component="div"
                                >
                                    {Component.title}
                                </Typography>
                                <Component />
                            </div>
                        </Container>
                    </div>
                );
            })}
        </div>
    );
}
