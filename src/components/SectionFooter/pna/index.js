/**
 * the "Partners & Affiliates" section of the body
 */

import { Grid, Divider, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Image from "next/image";

const pnaObj = {
  Partners: {
    bdo: [50, 35, "BDO"],
    eastWest: [50, 35, "EastWest Bank"],
    securityBank: [50, 35, "Security Bank"],
    orix: [29, 35, "Orix"],
    unionBank: [50, 35, "UnionBank"],
    avis: [50, 15, "Avis"],
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
const { publicRuntimeConfig } = getConfig();

export default function pna() {
  let basePath = publicRuntimeConfig.basePath
    ? publicRuntimeConfig.basePath
    : "/";

  const classes = useStyles();

  const makeGridItems = (groupName) => {
    return Object.entries(pnaObj[groupName]).map((entry, i) => (
      <Grid
        key={i}
        xs={6}
        sm={4}
        lg
        item
        className={classes.gridItem}
        container
        direction="column"
      >
        <div className={classes.imgContainer}>
          <Image
            // priority //<--throws Error: EPERM: operation not permitted, unlink
            layout="fixed"
            width={entry[1][0]}
            height={entry[1][1]}
            quality={100}
            src={`${basePath}images/${groupName}/${entry[0]}.webp`}
            alt={entry[0]}
          />
        </div>
        <Typography variant="body1" component="div" className={classes.label}>
          {entry[1][2]}
        </Typography>
      </Grid>
    ));
  };

  const makeSection = (groupName) => {
    return (
      <>
        <Typography variant="h6" component="div" className={classes.title}>
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
