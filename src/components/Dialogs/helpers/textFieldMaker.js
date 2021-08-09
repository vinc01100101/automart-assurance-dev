import {TextField, MenuItem} from "@material-ui/core";

export default function textFieldMaker(
    textFieldProps,
    error,
    helperText,
    handleChange,
    size = "medium"
) {
    const {label, value, id, isMultilined, isSelect, menuData, placeholder} =
        textFieldProps;

    return (
        <TextField
            size={size}
            key={id}
            fullWidth
            error={error}
            helperText={helperText}
            multiline={isMultilined}
            select={isSelect}
            rows={4}
            label={label}
            value={value}
            id={`input-${id}`}
            variant="outlined"
            onChange={(e) => handleChange(id, e.target.value)}
            inputProps={{name: id, placeholder}}
            InputLabelProps={{
                style: {width: "90%", top: -10},
            }}
        >
            {isSelect &&
                menuData.map((x, i) => {
                    return (
                        <MenuItem key={i} value={x}>
                            {x}
                        </MenuItem>
                    );
                })}
        </TextField>
    );
}
