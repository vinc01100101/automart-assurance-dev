/**
 * the "Benefits from getting offer from Automart" section of the body
 */

import {Typography} from "@material-ui/core";
import useStyles from "./styles";

import Image from "next/image";
//svg pieces
import {benefits0, benefits1, benefits2} from "@/svgStore/svgCall";
//put inside array for reference
const referenceIndex = [benefits0, benefits1, benefits2];

aon.title = "Acts of Nature Insurance - Why do I need it?";
const textEntries = [
    "Nature is unpredictable",
    "The Philippines is vulnerable to the natural disasters",
    "Don’t lose everything to earthquake, flood or volcanic eruption!",
];
const basePath = process.env.NEXT_PUBLIC_BASEPATH;
export default function aon() {
    const classes = useStyles();
    const makeComponents = (texts) =>
        texts.map((text, i) => {
            return (
                <div className={classes.child} key={i}>
                    {/* <div className={classes.iconContainer}> */}
                    <div className={classes.iconContainer}>
                        <Image
                            src={`${basePath}/images/Aon/${i}.png`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <Typography variant="body1" component="p">
                        {text}
                    </Typography>
                </div>
            );
        });

    return <div className={classes.root}>{makeComponents(textEntries)}</div>;
}
