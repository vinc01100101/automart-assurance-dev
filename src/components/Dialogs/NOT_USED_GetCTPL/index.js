import _Dialog from "@qniverse/core/_Dialog";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {onChange} from "@/redux/dialogs/creators";
import useStyles from "./styles";
import textFieldMaker from "../helpers/textFieldMaker";

export default function GetCTPL() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        dialogCtplIsOpen,
        completeName,
        address,
        mvFileNumber,
        plateNumber,
        engineNumber,
        chasisNumber,
        errorArray,
    } = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const textFieldsArray = [
        {
            label: "Full name of the registered owner",
            value: completeName,
            id: "completeName",
        },
        {
            label: "Address",
            value: address,
            id: "address",
            isMultilined: true,
        },
        {
            label: "MV File Number",
            value: mvFileNumber,
            id: "mvFileNumber",
        },
        {
            label: "Plate Number",
            value: plateNumber,
            id: "plateNumber",
        },
        {
            label: "Engine Number",
            value: engineNumber,
            id: "engineNumber",
        },
        {
            label: "Chasis Number",
            value: chasisNumber,
            id: "chasisNumber",
        },
    ];

    const Content = () => {
        return (
            <>
                <form
                    className={classes.formLayout}
                    action="/api/appointment"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    {textFieldsArray.map((x) => {
                        const error = errorArray.filter(
                            (y) => y.id === x.id
                        )[0];
                        const helperText = error ? error.helperText : "";

                        return textFieldMaker(
                            x,
                            !!error,
                            helperText,
                            handleChange
                        );
                    })}
                    Upload a clear picture of your Certificate of Registration
                    <div>
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            onChange={(e) => console.log(e)}
                        />
                    </div>
                    <input type="submit" id="submitterButton" hidden />
                </form>
            </>
        );
    };
    return (
        <_Dialog
            title="Get your CTPL"
            content={Content()}
            Actions={() => (
                <>
                    <Button
                        onClick={(e) =>
                            dispatch(
                                onChange({
                                    key: "dialogCtplIsOpen",
                                    value: false,
                                })
                            )
                        }
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={(e) => {
                            const formSubmitButton =
                                document.querySelector("#submitterButton");
                            formSubmitButton.click();

                            dispatch(
                                onChange({
                                    key: "dialogCtplIsOpen",
                                    value: false,
                                })
                            );
                        }}
                    >
                        Submit
                    </Button>
                </>
            )}
            open={dialogCtplIsOpen}
        />
    );
}
