import {ACTIONS} from "./constants";

export const onChange = (payload) => ({
    type: ACTIONS.ONCHANGE,
    payload,
});

//chained actions for dropdown list
export const fetchYear = () => async (dispatch) => {
    const currentYear = new Date().getFullYear();
    const yearSet = [];

    for (let i = 0; i <= 10; i++) {
        yearSet.unshift(currentYear - i);
    }
    dispatch(onChange({key: "gq_dd_year", value: yearSet}));
};

export const fetchBrands = () => async (dispatch) => {
    //TODO: api call for fetching brands should be here

    const brandSet = ["Ford"];
    dispatch(onChange({key: "gq_dd_brand", value: brandSet}));
};

export const fetchModels = () => async (dispatch) => {
    //TODO: api call for fetching brands should be here

    const modelSet = ["Everest"];
    dispatch(onChange({key: "gq_dd_model", value: modelSet}));
};
