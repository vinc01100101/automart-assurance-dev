import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
        },
    },
    child: {
        margin: "20px 20px 42px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#F0F5EF",
        width: "136px",
        height: "136px",
        border: "hidden",
        borderRadius: "50%",
        marginBottom: "12px",
    },
}));
