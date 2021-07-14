import {useSelector, useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";
import textFieldMaker from "../../helpers/TextFieldMaker";

export default function CarDetails() {
    //states from redux
    const {
        gq_dd_brand,
        gq_brand,
        gq_dd_model,
        gq_model,
        gq_dd_year,
        gq_year,
        errorArray,
    } = useSelector((state) => state.dialogReducer);

    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const dataArray = [
        {
            label: "Brand",
            value: gq_brand,
            id: "gq_brand",
            isSelect: true,
            menuData: gq_dd_brand,
        },
        {
            label: "Model",
            value: gq_model,
            id: "gq_model",
            isSelect: true,
            menuData: gq_dd_model,
        },
        {
            label: "Year",
            value: gq_year,
            id: "gq_year",
            isSelect: true,
            menuData: gq_dd_year,
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
