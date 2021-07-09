/**
 * the "Benefits from getting offer from Automart" section of the body
 */

import {Typography} from "@material-ui/core";
import useStyles from "./styles";
//href links
import {AUTOMART, MOTOMART} from "../../hrefLinks";

//svg pieces
import {benefits0, benefits1, benefits2} from "@/svgStore/svgCall";
//put inside array for reference
const referenceIndex = [benefits0, benefits1, benefits2];

benefits.title = "Benefits of getting it from Assurance.Ph";

export default function benefits() {
    const classes = useStyles();
    const makeComponents = (labels) =>
        labels.map((label, i) => {
            return (
                <div className={classes.child} key={i}>
                    <div className={classes.iconContainer}>
                        {referenceIndex[i]}
                    </div>
                    <Typography variant="body1" component="p">
                        {label}
                    </Typography>
                </div>
            );
        });

    return (
        <div className={classes.root}>
            {makeComponents([
                "Quick and simple process",
                "We will fully assist you in the event of a claim",
                <>
                    We are part of a trusted brand -{" "}
                    <a href={AUTOMART} target="_blank">
                        Automart.Ph
                    </a>{" "}
                    and{" "}
                    <a href={MOTOMART} target="_blank">
                        Motomart.Ph
                    </a>
                </>,
            ])}
        </div>
    );
}
