import _Dialog from "@qniverse/core/_Dialog";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@material-ui/core";
import {onChange} from "@/redux/dialogs/creators";
import {TextField} from "@material-ui/core";
import useStyles from "./styles";

export default function GetCTPL() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        dialogClaimIsOpen,
        insured,
        homeAddress,
        homeContactNumber,
        officeAddress,
        officeContactNumber,
        driverName,
        driverAddress,
        driverContactNumber,
        yearModel,
        make,
        claim_plateNumber,
        motorNumber,
        claim_chasisNumber,
        registeredOwnerName,
        dateOfAccidentOrLoss,
        time,
        place,
        describePartsDamagedAndExtent,
        whereCarMayBeSeenNow,
        nameAndAddressOfInvolved,
        nameOfHisInsuranceCompany,
        additionalData,
        errorArray,
    } = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        console.log(value);
        dispatch(onChange({key, value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    const makeTextField = (label, value, id, isMultilined) => {
        const error = errorArray.filter((x) => x.id === id)[0];
        const helperText = error ? error.helperText : "";

        return (
            <TextField
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
                inputProps={{name: id}}
            />
        );
    };

    const textFieldsArray1 = [
        {
            label: "Insured",
            value: insured,
            id: "insured",
        },
        {
            label: "Home Address",
            value: homeAddress,
            id: "homeAddress",
            isMultilined: true,
        },
        {
            label: "Contact Number(Home)",
            value: homeContactNumber,
            id: "homeContactNumber",
        },
        {
            label: "Office Address",
            value: officeAddress,
            id: "officeAddress",
            isMultilined: true,
        },
        {
            label: "Contact Number(Office)",
            value: officeContactNumber,
            id: "officeContactNumber",
        },
        {
            label: "Driver Name",
            value: driverName,
            id: "driverName",
        },
        {
            label: "Driver Address",
            value: driverAddress,
            id: "driverAddress",
            isMultilined: true,
        },
        {
            label: "Contact Number(Driver)",
            value: driverContactNumber,
            id: "driverContactNumber",
        },
    ];

    const textFieldsArray2 = [
        {
            label: "Year Model",
            value: yearModel,
            id: "yearModel",
        },
        {
            label: "Make",
            value: make,
            id: "make",
        },
        {
            label: "Plate Number",
            value: claim_plateNumber,
            id: "claim_plateNumber",
        },
        {
            label: "Motor Number",
            value: motorNumber,
            id: "motorNumber",
        },
        {
            label: "Chasis Number",
            value: claim_chasisNumber,
            id: "claim_chasisNumber",
        },
    ];

    const textFieldsArray3 = [
        {
            label: "Registered Owner Name",
            value: registeredOwnerName,
            id: "registeredOwnerName",
        },
        {
            label: "Date of Accident or Loss",
            value: dateOfAccidentOrLoss,
            id: "dateOfAccidentOrLoss",
        },
        {
            label: "Time",
            value: time,
            id: "time",
        },
        {
            label: "Place",
            value: place,
            id: "place",
        },
        {
            label: "Describe Parts Damaged and Extent",
            value: describePartsDamagedAndExtent,
            id: "describePartsDamagedAndExtent",
            isMultilined: true,
        },
        {
            label: "Where car may be seen now",
            value: whereCarMayBeSeenNow,
            id: "whereCarMayBeSeenNow",
        },
    ];

    const textFieldsArray4 = [
        {
            label: "Name and Address of any Third Party involved",
            value: nameAndAddressOfInvolved,
            id: "nameAndAddressOfInvolved",
            isMultilined: true,
        },
        {
            label: "Name of his/her insurance company",
            value: nameOfHisInsuranceCompany,
            id: "nameOfHisInsuranceCompany",
        },
        {
            label: "Additional data (e.g. name of any witnesses, injured persons, etc.)",
            value: additionalData,
            id: "additionalData",
            isMultilined: true,
        },
    ];

    const content = () => {
        return (
            <>
                <form
                    className={classes.formLayout}
                    action="/api/appointment"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                >
                    {textFieldsArray.map((x) =>
                        makeTextField(x.label, x.value, x.id, x.isMultilined)
                    )}
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
            content={content()}
            Actions={() => (
                <>
                    <Button
                        onClick={(e) =>
                            dispatch(
                                onChange({
                                    key: "dialogClaimIsOpen",
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
                                    key: "dialogClaimIsOpen",
                                    value: false,
                                })
                            );
                        }}
                    >
                        Submit
                    </Button>
                </>
            )}
            open={dialogClaimIsOpen}
        />
    );
}
