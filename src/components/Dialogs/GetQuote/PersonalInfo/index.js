import {useSelector, useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";
import textFieldMaker from "../../helpers/textFieldMaker";

export default function PersonalInfo() {
    //states from redux
    const {name, contactNumber, email, errorArray} = useSelector(
        (state) => state.dialogReducer
    );

    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const dataArray = [
        {
            label: "Name",
            value: name,
            id: "name",
        },
        {
            label: "Contact Number",
            value: contactNumber,
            id: "contactNumber",
        },
        {
            label: "Email",
            value: email,
            id: "email",
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
