import {ACTIONS} from "./constants";

const defaultState = {
    //dialog isOpen?
    dialogCtplIsOpen: false,
    dialogClaimIsOpen: false,
    //text inputs
    completeName: "",
    address: "",
    mvFileNumber: "",
    plateNumber: "",
    engineNumber: "",
    chasisNumber: "",
    CRImageFile: [],
    //list of errored textInputs [{id,helperText}]
    errorArray: [],
    //claims
    insured: "",
    homeAddress: "",
    homeContactNumber: "",
    officeAddress: "",
    officeContactNumber: "",
    driverName: "",
    driverAddress: "",
    driverContactNumber: "",
    yearModel: "",
    make: "",
    claim_plateNumber: "",
    motorNumber: "",
    claim_chasisNumber: "",
    registeredOwnerName: "",
    dateOfAccidentOrLoss: "",
    time: "",
    place: "",
    describePartsDamagedAndExtent: "",
    whereCarMayBeSeenNow: "",
    nameAndAddressOfInvolved: "",
    nameOfHisInsuranceCompany: "",
    additionalData: "",
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
