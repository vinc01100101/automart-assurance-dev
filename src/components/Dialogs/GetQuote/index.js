import _Dialog from "@qniverse/core/_Dialog";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button} from "@material-ui/core";
import {onChange} from "@/redux/dialogs/creators";
import {TextField, Typography} from "@material-ui/core";
import useStyles from "./styles";

export default function GetQuote() {
    const classes = useStyles();
    const [activeScreen, setActiveScreen] = useState(0);
    const dispatch = useDispatch();
    const {
        dialogGetQuoteIsOpen,
        gq_brand,
        gq_model,
        gq_year,
        gq_plateNunmber,
        gq_typeOfInsurance,
        gq_comprehensiveWithCtpl,
        gq_useBidDeposit,
        errorArray,
    } = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const handleNext = (e) => {
        if (activeScreen < textFiledsArraySet.length - 1) {
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

    const handleBack = (e) => {
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
    const makeTextField = (
        label,
        value,
        id,
        isMultilined,
        placeholder = ""
    ) => {
        const error = errorArray.filter((x) => x.id === id)[0];
        const helperText = error ? error.helperText : "";

        return (
            <TextField
                className={classes.textField}
                key={id}
                fullWidth
                error={!!error}
                helperText={helperText}
                multiline={isMultilined}
                rows={4}
                label={label + " *"}
                value={value}
                id={`input-${id}`}
                variant="outlined"
                onChange={(e) => handleChange(id, e.target.value)}
                inputProps={{name: id, placeholder}}
                InputLabelProps={{
                    style: {width: "90%", top: -10},
                }}
            />
        );
    };

    const Content = () => {
        return (
            <>
                <div className={classes.formLayout}>
                    {textFiledsArraySet[activeScreen].map((x) =>
                        makeTextField(
                            x.label,
                            x.value,
                            x.id,
                            x.isMultilined,
                            x.placeholder
                        )
                    )}
                </div>
            </>
        );
    };
    const title = (
        <>
            <Typography variant="h6" component="span">{`Car Accident Report (${
                activeScreen + 1
            }/4)`}</Typography>
            <br />
            <Typography variant="body1" component="span">
                NOTE: This form is not a substitute of the Police Report
            </Typography>
        </>
    );
    return (
        <_Dialog
            title={title}
            Content={Content}
            Actions={() => (
                <>
                    <Button onClick={handleBack}>
                        {activeScreen > 0 ? "Back" : "Cancel"}
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                        {activeScreen < textFiledsArraySet.length - 1
                            ? "Next"
                            : "Submit"}
                    </Button>
                </>
            )}
            open={dialogClaimIsOpen}
        />
    );
}
