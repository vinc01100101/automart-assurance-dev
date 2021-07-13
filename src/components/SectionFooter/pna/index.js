/**
 * the "Partners & Affiliates" section of the body
 */

import {Grid, Divider, Typography} from "@material-ui/core";
import useStyles from "./styles";
import Image from "next/image";
//links
import {
    BDO,
    EASTWESTBANK,
    SECURITYBANK,
    UNIONBANK,
    TFS,
} from "@/components/hrefLinks";

const pnaObj = {
    Partners: {
        bdo: [50, 35, "BDO", BDO],
        eastWest: [50, 35, "EastWest Bank", EASTWESTBANK],
        securityBank: [50, 35, "Security Bank", SECURITYBANK],
        orix: [29, 35, "Orix"],
        unionBank: [50, 35, "UnionBank", UNIONBANK],
        avis: [50, 15, "Avis"],
        tfs: [50, 15, "Toyota Financial Services", TFS],
    },
    Affiliates: {
        dost: [50, 35, "DOST"],
        dti: [50, 35, "DTI"],
        techMaker: [35, 35, "Techmaker"],
        upScale: [50, 35, "UPscale"],
        ideaSpace: [50, 35, "IdeaSpace"],
    },
};

import getConfig from "next/config";
const {publicRuntimeConfig} = getConfig();

export default function pna() {
    let basePath = publicRuntimeConfig.basePath
        ? publicRuntimeConfig.basePath
        : "/";

    const classes = useStyles();

    const hrefChecker = (href, Component) => {
        return href ? (
            <a href={href} target="_blank" className={classes.imgContainer}>
                <Component />
            </a>
        ) : (
            <Component />
        );
    };

    const makeGridItems = (groupName) => {
        return Object.entries(pnaObj[groupName]).map((entry, i) => (
            <Grid
                key={i}
                xs={6}
                sm={3}
                lg
                item
                className={classes.gridItem}
                container
                direction="column"
            >
                <div className={classes.imgContainer}>
                    {/**
                     * hrefChecker(href,Component)
                     * @params href {String}
                     * @params Component {Functional Component}
                     */}
                    {hrefChecker(entry[1][3], () => (
                        <Image
                            // priority //<--throws Error: EPERM: operation not permitted, unlink
                            layout="fixed"
                            width={entry[1][0]}
                            height={entry[1][1]}
                            quality={100}
                            src={`${basePath}/images/${groupName}/${entry[0]}.webp`}
                            alt={entry[0]}
                        />
                    ))}
                </div>
                <Typography
                    variant="body2"
                    component="div"
                    className={classes.label}
                >
                    {entry[1][2]}
                </Typography>
            </Grid>
        ));
    };

    const makeSection = (groupName) => {
        return (
            <>
                <Typography
                    variant="h6"
                    component="div"
                    className={classes.title}
                >
                    {`Our ${groupName}`}
                </Typography>
                <Grid container spacing={3}>
                    {makeGridItems(groupName)}
                </Grid>
            </>
        );
    };
    return (
        <div className={classes.root}>
            {makeSection("Partners")}
            <Divider className={classes.divider} />
            {makeSection("Affiliates")}
        </div>
    );
}
