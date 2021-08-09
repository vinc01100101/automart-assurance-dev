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
    contactInformation: "",
    driverName: "",
    driverAddress: "",
    driverContactNumber: "",
    yearModel: "",
    make: "",
    claim_plateNumber: "",
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
    gq_type: "",
    gq_brand: "",
    gq_model: "",
    gq_year: "",
    gq_plateNunmber: "",
    gq_typeOfInsurance: 0,
    gq_comprehensiveWithCtpl: false,
    gq_useBidDeposit: false,
    //gq dropdowns
    gq_dd_type: [],
    gq_dd_brand: [],
    gq_dd_model: [],
    gq_dd_year: [],
    gq_dd_vtpl_bi: [],
    gq_dd_vtpl_pd: [],
    gq_dd_autoPersonalAccident: [],
    //policy details computations (L=Limit, P=Premium)
    l_ownDamageTheft: 0,
    p_ownDamageTheft: 0,
    l_actsOfNature: 0,
    p_actsOfNature: 0,
    l_vtpl_bodilyInjury: 200000,
    p_vtpl_bodilyInjury: 0,
    l_vtpl_propertyDamage: 200000,
    p_vtpl_propertyDamage: 0,
    l_autoPersonalAccident: 0,
    p_autoPersonalAccident: 0,
    totalTax: 0,
    totalPremium: 0,

    //vehicle value
    vehicleValue: 0,
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
