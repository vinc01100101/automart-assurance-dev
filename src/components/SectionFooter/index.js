//material ui
import {IconButton, Link, Divider} from "@material-ui/core";
//svg icon pieces
import {
    facebook,
    instagram,
    youtube,
    linkedin,
    assurance,
} from "@/svgStore/svgCall";
//href strings
import {
    LOGIN,
    FAQS,
    TERMS,
    PRIVACY,
    CONTACTUS,
    FACEBOOK,
    INSTAGRAM,
    YOUTUBE,
    LINKEDIN,
} from "@/components/hrefLinks";
//sibling files
import useStyles from "./styles";
//references
const textLinks = [
    [LOGIN, "Login or Signup"],
    [FAQS, "FAQs"],
    [TERMS, "Terms and Condition"],
    [PRIVACY, "Privacy Policy"],
    [CONTACTUS, "Contact Us"],
];
const logoLinks = [
    [FACEBOOK, facebook, "Facebook"],
    [INSTAGRAM, instagram, "Instagram"],
    [YOUTUBE, youtube, "YouTube"],
    [LINKEDIN, linkedin, "Linked In"],
];
//partners and affiliates
import Pna from "./pna";

export default function sectionFooter() {
    const classes = useStyles();

    const makeLinks = (links) => {
        //get the type
        const type = typeof links[0][1];
        //divide the textLinks into two
        const group1 = [];
        const group2 = [];

        links.map((entry, i) => {
            const group = type == "string" && i > 2 ? group2 : group1;
            group.push(
                <li key={i}>
                    <Link
                        href={entry[0]}
                        target={
                            entry[1] == "FAQs" || entry[1] == "Contact Us"
                                ? ""
                                : "_blank"
                        }
                        key={i}
                        variant="body1"
                    >
                        {type == "string" ? (
                            entry[1]
                        ) : (
                            <IconButton aria-label={entry[2]}>
                                {entry[1]}
                            </IconButton>
                        )}
                    </Link>
                </li>
            );
        });

        return (
            <>
                <ul className={type === "object" ? classes.social : null}>
                    {group1}
                </ul>
                {group2.length > 0 && <ul>{group2}</ul>}
            </>
        );
    };
    return (
        <div className={classes.root}>
            <div className={classes.semiRoot}>
                <div className={classes.flexibleContainer}>
                    <div className={classes.marginBottom}>{assurance}</div>
                    {makeLinks(textLinks)}
                    <div
                        className={`${classes.marginTop} ${classes.marginBottom}`}
                    >
                        {makeLinks(logoLinks)}
                    </div>
                </div>
                <Divider className={classes.divider} />
                <Pna />
                <Divider className={classes.divider} />
                <ul className={classes.copyright}>
                    <li>?? Copyright 2020, Automart.PH</li>
                    <li>All rights reserved</li>
                </ul>
            </div>
        </div>
    );
}
