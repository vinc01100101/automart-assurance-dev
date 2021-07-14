import _Dialog from "@qniverse/core/_Dialog";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button} from "@material-ui/core";
import {onChange} from "@/redux/dialogs/creators";
import {Typography} from "@material-ui/core";
import useStyles from "./styles";
import textFieldMaker from "../helpers/TextFieldMaker";

export default function Claim() {
    const [activeScreen, setActiveScreen] = useState(() => 0);
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
            label: "Additional data",
            value: additionalData,
            id: "additionalData",
            isMultilined: true,
            placeholder: "(e.g. name of any witnesses, injured persons, etc.)",
        },
    ];

    const textFiledsArraySet = [
        textFieldsArray1,
        textFieldsArray2,
        textFieldsArray3,
        textFieldsArray4,
    ];

    const classes = useStyles();
    const dispatch = useDispatch();

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
                    key: "dialogClaimIsOpen",
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
                    key: "dialogClaimIsOpen",
                    value: false,
                })
            );
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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
    const Content = () => (
        <div className={classes.formLayout}>
            {textFiledsArraySet[activeScreen].map((x) => {
                const error = errorArray.filter((y) => y.id === x.id)[0];
                const helperText = error ? error.helperText : "";

                return textFieldMaker(x, !!error, helperText, handleChange);
            })}
        </div>
    );
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
                        {activeScreen < textFiledsArraySet.length - 1
                            ? "Next"
                            : "Submit"}
                    </Button>
                </>
            )}
            open={dialogClaimIsOpen}
        ></_Dialog>
    );
}
