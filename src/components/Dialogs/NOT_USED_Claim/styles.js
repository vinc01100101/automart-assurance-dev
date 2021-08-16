import {makeStyles} from "@material-ui/styles";

export default makeStyles((theme) => ({
    formLayout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        "& > div": {
            margin: "10px 0",
        },
        "& span": {
            whiteSpace: "nowrap",
        },
    },
}));
