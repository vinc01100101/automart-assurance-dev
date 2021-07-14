import {ACTIONS} from "./constants";

const defaultState = {
    //dialog isOpen?
    dialogGetQuoteIsOpen: false,
    dialogCtplIsOpen: false,
    dialogClaimIsOpen: false,
    //text inputs for ctpl
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
    //get quote
    gq_brand: "",
    gq_model: "",
    gq_year: "",
    gq_plateNunmber: "",
    gq_typeOfInsurance: "",
    gq_comprehensiveWithCtpl: false,
    gq_useBidDeposit: false,
    //gq dropdowns
    gq_dd_brand: [],
    gq_dd_model: [],
    gq_dd_year: [],
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
