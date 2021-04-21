//material ui
import {
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

//redux
import {
  setInput,
  fetchModelsData,
  fetchTrimsData,
} from "@/redux/modals/creators";
import { useSelector, useDispatch } from "react-redux";

export default function makeInputComponents() {
  const dispatch = useDispatch();
  const { showError } = useSelector((state) => state.modals);

  //input formats (string? number? email? etc..)
  const numberReg = /^\d*$/;
  const stringReg = /^[a-z]*((?<=\S)\s{0,1}[a-z]*)*$/i; //multiple words, space separated
  const emailReg = /^(\w+\.?)*?@?([a-z]*)?\.?([a-z]{0,3})?$/i;
  const alphaNumericReg = /^[a-z0-9]*$/i;
  const defaultFormatReg = /.*/;

  //reference [inputFormat, characterLength]
  const regs = {
    year: [numberReg, 4],
    plateNumber: [alphaNumericReg, 7],
    conductionSticker: [alphaNumericReg, 6],
    odometer: [numberReg, 7],
    firstName: [stringReg, 20],
    lastName: [stringReg, 20],
    mobileNumber: [numberReg, 14],
    email: [emailReg, 40],
    address: [defaultFormatReg, 150],
  };

  //controlled inputs
  const handleChange = (key, value) => {
    //remove odometer comma's
    const testValue = key === "odometer" ? value.replace(/,/g, "") : value;

    const keyName = regs[key];
    const regFormat = keyName ? keyName[0] : defaultFormatReg;
    const regLength = RegExp(`^.{0,${keyName ? keyName[1] : 30}}$`);

    let returnValue = testValue;

    const testAndDispatch = () => {
      //if format and length is correct, allow the input
      regFormat.test(testValue) &&
        regLength.test(testValue) &&
        dispatch(setInput({ key, value: returnValue }));
    };

    //guard clause
    if (testValue == "") return testAndDispatch();

    //bring back odometer's comma delimiter
    if (key === "odometer") returnValue = parseInt(testValue).toLocaleString();

    //prefetch models and trims
    if (key === "brand") {
      dispatch(setInput({ key: "model", value: "" }));
      dispatch(setInput({ key: "trim", value: "" }));
      dispatch(fetchModelsData(value));
    }
    if (key === "model") {
      dispatch(setInput({ key: "trim", value: "" }));
      dispatch(fetchTrimsData(value));
    }
    //dispatch
    return testAndDispatch();
  };

  //component makers
  const makeSelect = (label, value, id, data) => {
    const temp = id == "model" || id == "trim";
    return (
      <FormControl
        variant="outlined"
        error={showError && value === "" && !temp}
      >
        <InputLabel id={`label-${id}`}>{`${label}${
          !temp ? " *" : ""
        }`}</InputLabel>
        <Select
          label={`${label}${!temp ? " *" : ""}`}
          value={value}
          id={`input-${id}`}
          labelId={`label-${id}`}
          onChange={(e) => handleChange(id, e.target.value)}
        >
          {data.map((x, i) => (
            <MenuItem key={i} value={x.id} divider>
              {x.label == "" ? "NONE" : x.label}
            </MenuItem>
          ))}
        </Select>
        {showError && value === "" && !temp && (
          <FormHelperText>This field is required</FormHelperText>
        )}
      </FormControl>
    );
  };

  const makeTextField = (label, value, id, pairValue) => {
    let err = false,
      helperText = "";
    if (showError && value == "") {
      if (id == "plateNumber" || id == "conductionSticker") {
        helperText =
          pairValue == ""
            ? "Either plate number or conduction sticker must be provided"
            : "";
        err = pairValue == "";
      } else {
        helperText = "This field is required";
        err = true;
      }
    }
    return (
      <TextField
        error={err}
        helperText={helperText}
        label={label + " *"}
        value={value}
        id={`input-${id}`}
        InputProps={{
          endAdornment: id === "odometer" && (
            <InputAdornment>km</InputAdornment>
          ),
        }}
        variant="outlined"
        onChange={(e) => handleChange(id, e.target.value)}
      />
    );
  };

  return { makeSelect, makeTextField };
}
