import {useSelector, useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";
import textFieldMaker from "../../helpers/textFieldMaker";

export default function VehicleInfo() {
    //states from redux
    const {year, make, model, trim, acquisitionCost, errorArray} = useSelector(
        (state) => state.dialogReducer
    );

    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const dataArray = [
        {
            label: "Year",
            value: year,
            id: "year",
        },
        {
            label: "Make",
            value: make,
            id: "make",
        },
        {
            label: "Model",
            value: model,
            id: "model",
        },
        {
            label: "Trim",
            value: trim,
            id: "trim",
        },
        {
            label: "Acquisition Cost",
            value: acquisitionCost,
            id: "acquisitionCost",
        },
    ];

    return (
        <>
            {dataArray.map((x) => {
                const error = errorArray.filter((y) => y.id === x.id)[0];
                const helperText = error ? error.helperText : "";

                return textFieldMaker(x, !!error, helperText, handleChange);
            })}
        </>
    );
}
