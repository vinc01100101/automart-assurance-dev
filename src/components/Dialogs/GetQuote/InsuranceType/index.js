import {
    Typography,
    Stepper,
    Step,
    StepButton,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Divider,
    TextField,
} from "@material-ui/core";

//redux
import {useSelector, useDispatch} from "react-redux";
import {onChange, computeFromVehicleValue} from "@/redux/dialogs/creators";
import {formatPrice} from "../../helpers/formatters";

const choices = [
    // "No Insurance",
    "Compulsory",
    "Comprehensive",
    "Comprehensive w/ AoN",
];
export default function InsuranceType() {
    const dispatch = useDispatch();
    const {
        gq_comprehensiveWithCtpl,
        gq_typeOfInsurance,
        vehicleValue,
        gq_type,
        totalPremium,
    } = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };
    return (
        <>
            <Typography variant="h6">One Year Premium:</Typography>

            <Typography variant="h5">{formatPrice(totalPremium)}</Typography>
            <Typography variant="body1">(inclusive of taxes)</Typography>
            <Stepper nonLinear activeStep={gq_typeOfInsurance}>
                {choices.map((label, i) => {
                    return (
                        <Step key={i} completed={gq_typeOfInsurance == i}>
                            <StepButton
                                color="inherit"
                                onClick={(e) => {
                                    handleChange("gq_typeOfInsurance", i);
                                    dispatch(
                                        computeFromVehicleValue({
                                            vehicleValue: vehicleValue,
                                            vehicleType: gq_type,
                                            insuranceType: i,
                                            comprehensiveWithCtpl:
                                                gq_comprehensiveWithCtpl,
                                        })
                                    );
                                }}
                            >
                                {label}
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
            <Typography variant="h6">{choices[gq_typeOfInsurance]}</Typography>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={gq_comprehensiveWithCtpl}
                            onChange={(e) => {
                                handleChange(
                                    "gq_comprehensiveWithCtpl",
                                    e.target.checked
                                );
                                dispatch(
                                    computeFromVehicleValue({
                                        vehicleValue: vehicleValue,
                                        vehicleType: gq_type,
                                        insuranceType: gq_typeOfInsurance,
                                        comprehensiveWithCtpl: e.target.checked,
                                    })
                                );
                            }}
                        />
                    }
                    label="Buy Comprehensive with CTPL"
                    disabled={gq_typeOfInsurance < 1}
                />
                {/* <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Please use my bid deposit to pay for my Insurance Premium"
                /> */}
            </FormGroup>
            <Typography variant="caption">
                Note: You may also opt to pay via bank transfer or Gcash.
            </Typography>
            <Divider flexItem />
            <Typography variant="caption">
                Comprehensive provided by Liberty Insurance. CTPL provided by
                Paramount Life & General Insurance.
            </Typography>
            <TextField
                label="TEST VALUE"
                value={vehicleValue}
                onChange={(e) => {
                    dispatch(
                        computeFromVehicleValue({
                            vehicleValue: e.target.value,
                            vehicleType: gq_type,
                            insuranceType: gq_typeOfInsurance,
                            comprehensiveWithCtpl: gq_comprehensiveWithCtpl,
                        })
                    );
                    // dispatch(
                    //     onChange({key: "vehicleValue", value: e.target.value})
                    // );
                    handleChange("vehicleValue", e.target.value);
                }}
            />
        </>
    );
}
