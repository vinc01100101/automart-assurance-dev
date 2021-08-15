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

benefits.title = "Benefits of Getting Vehicle Insurance from Assurance.Ph";

export default function benefits() {
    const classes = useStyles();
    const makeComponents = (labels) =>
        labels.map((label, i) => {
            return (
                <div className={classes.child} key={i}>
                    <div className={classes.iconContainer}>
                        {referenceIndex[i]}
                    </div>
                    <Typography
                        variant="h6"
                        component="p"
                        style={{fontWeight: "bold"}}
                    >
                        {label.title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {label.content}
                    </Typography>
                </div>
            );
        });

    return (
        <div className={classes.root}>
            {makeComponents([
                {
                    title: "Quick Online Policy Issuance",
                    content: "Get insured via email, in minutes!",
                },
                {
                    title: "Fast, Simple Claim Processing",
                    content:
                        "If you get into an accident, we’ll be with you every step of the way to claim and get your vehicle fixed, the right way!",
                },
                {
                    title: "Pay by installment",
                    content: "Just ask your insurance adviser for details.",
                },
            ])}
        </div>
    );
}
