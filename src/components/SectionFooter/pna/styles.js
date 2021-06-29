import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        // marginTop: "50px",
    },
    gridItem: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    imgContainer: {
        width: 50,
        height: 35,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    divider: {
        margin: "30px 0px",
        background: "white",
    },
    title: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
    },
    label: {
        marginTop: 5,
        textAlign: "center",
    },
}));
