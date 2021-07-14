import {useSelector, useDispatch} from "react-redux";
import {onChange} from "@/redux/dialogs/creators";

export default function CarDetails() {
    //states from redux
    const {gq_dd_brand, gq_dd_model, gq_dd_year} = useSelector(
        (state) => state.dialogReducer
    );

    const dispatch = useDispatch();

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };
}
