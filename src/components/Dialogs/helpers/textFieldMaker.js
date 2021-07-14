import {TextField} from "@material-ui/core";

export default function textFieldMaker(
    textFieldProps,
    error,
    helperText,
    handleChange
) {
    const {label, value, id, isMultilined, placeholder} = textFieldProps;

    return (
        <TextField
            key={id}
            fullWidth
            error={error}
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
}
