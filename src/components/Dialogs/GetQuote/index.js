import _Dialog from "@qniverse/core/_Dialog";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button} from "@material-ui/core";
import {onChange} from "@/redux/dialogs/creators";
import useStyles from "./styles";
import dynamic from "next/dynamic";

const makeDynamic = (componentName) => {
    return dynamic(() => import(`./${componentName}`));
};

const pages = [
    {
        Component: makeDynamic("VehicleInfo"),
        title: "Vehicle Information",
    },
    {
        Component: makeDynamic("PersonalInfo"),
        title: "Personal Information",
    },
];

export default function GetQuote() {
    const classes = useStyles();
    const [activeScreen, setActiveScreen] = useState(0);
    const dispatch = useDispatch();
    const {dialogGetQuoteIsOpen} = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const handleNext = () => {
        if (activeScreen < pages.length - 1) {
            setActiveScreen((prevScreen) => prevScreen + 1);
        } else {
            //submit event
            dispatch(
                onChange({
                    key: "dialogGetQuoteIsOpen",
                    value: false,
                })
            );
        }
    };

    const handleBack = () => {
        if (activeScreen > 0) {
            setActiveScreen((prevScreen) => prevScreen - 1);
        } else {
            dispatch(
                onChange({
                    key: "dialogGetQuoteIsOpen",
                    value: false,
                })
            );
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const {Component, title} = pages[activeScreen];
    const Content = () => {
        return (
            <>
                <div className={classes.formLayout}>
                    <Component />
                </div>
            </>
        );
    };

    return (
        <_Dialog
            title={title}
            content={Content()}
            Actions={() => (
                <>
                    <Button onClick={handleBack}>
                        {activeScreen > 0 ? "Back" : "Cancel"}
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                        {activeScreen < pages.length - 1 ? "Next" : "Submit"}
                    </Button>
                </>
            )}
            open={dialogGetQuoteIsOpen}
        />
    );
}
