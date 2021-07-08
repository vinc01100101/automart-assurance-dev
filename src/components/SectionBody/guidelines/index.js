/**
 * the "Sell My Car FAQ's" section of the body
 */

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Divider,
    Hidden,
} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";
import {useState} from "react";

//sibling files
import data from "./data";
import useStyles from "./styles";

faqs.title = "Guidelines in settlement of motor car claims";

export default function faqs() {
    const classes = useStyles();
    //for controlled accordion____
    // const [expanded, setExpanded] = useState(() => false);

    const [expanded, setExpanded] = useState(() => []);
    const handleChange = (id) => {
        //for controlled accordion____
        // setExpanded((currState) => {
        //   return currState === id ? false : id;
        // });

        setExpanded((currState) => {
            const index = currState.indexOf(id);
            return index === -1
                ? [...currState, id]
                : currState.filter((x) => x != id);
        });
    };

    const makeAccordions = () => {
        return data.map((accordion, i) => {
            return (
                <Accordion
                    key={i}
                    className={classes.accordion}
                    // expanded={expanded === `acco${i}`}
                    onChange={() => handleChange(`acco${i}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls={`acco${i}-content`}
                        id={`acco${i}-header`}
                        className={
                            expanded.indexOf(`acco${i}`) >= 0
                                ? classes.activeAccordion
                                : classes.summary
                        }
                    >
                        <Typography
                            className={classes.title}
                            variant="h6"
                            component="div"
                        >
                            {accordion.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.content}>
                        {(function () {
                            /**
                             * note that this is an IIFE (Immediately Invoked Function Expression)
                             * doing this to separate content into two groups that divides when
                             * screen size is medium and up: [theme.breakpoints.up("md")]
                             */

                            const group1 = [];
                            const group2 = [];
                            let switchGroup = false;
                            accordion.content.map((qna, i) => {
                                //set switchGroup to true only once when encountered: {qna.break = true}
                                switchGroup = switchGroup || qna.break;
                                //if switchGroup is true, start pushing to group2, else keep pushing to group1
                                const group = switchGroup ? group2 : group1;

                                group.push(
                                    <div key={i} className={classes.eachQna}>
                                        {qna.q && (
                                            <Typography
                                                variant="body1"
                                                className={classes.q}
                                            >
                                                {qna.q}
                                            </Typography>
                                        )}
                                        <Typography
                                            variant="body1"
                                            className={classes.a}
                                            component="div"
                                        >
                                            {qna.a}
                                        </Typography>
                                    </div>
                                );
                            });
                            //and then return the groups
                            return (
                                <>
                                    <div>{group1}</div>
                                    {group2.length > 0 && (
                                        <>
                                            <Hidden mdDown>
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                />
                                            </Hidden>
                                            <div style={{paddingLeft: 10}}>
                                                {group2}
                                            </div>
                                        </>
                                    )}
                                </>
                            );
                        })()}
                    </AccordionDetails>
                </Accordion>
            );
        });
    };
    return <>{makeAccordions()}</>;
}
