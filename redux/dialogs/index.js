import {ACTIONS} from "./constants";

const defaultState = {
    //dialog isOpen?
    dialogGetQuoteIsOpen: false,

    //getQuote states
    //vehicle info
    year: "",
    make: "",
    model: "",
    trim: "",
    acquisitionCost: "",
    //personal info
    name: "",
    contactNumber: "",
    email: "",
    //array of errors of fields
    errorArray: [],
};

export default function dialogReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONS.ONCHANGE:
            return {...state, [action.payload.key]: action.payload.value};
            break;
        default:
            return {...state};
    }
}
