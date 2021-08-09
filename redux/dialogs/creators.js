import {ACTIONS} from "./constants";

export const onChange = (payload) => ({
    type: ACTIONS.ONCHANGE,
    payload,
});

//chained actions for dropdown list

export const fetchType = () => async (dispatch) => {
    //TODO: api call for fetching brands should be here

    const typeSet = ["Car/SUV", "Motorcycle"];
    dispatch(onChange({key: "gq_dd_type", value: typeSet}));
};

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

export const fetcVtplLimits = () => async (dispatch) => {
    const vtplSet = [50, 75, 100, 150, 200, 250, 300, 400].map((x) => x * 1000);

    dispatch(onChange({key: "gq_dd_vtpl_bi", value: vtplSet}));
    dispatch(onChange({key: "gq_dd_vtpl_pd", value: vtplSet}));
};

const VTPL_map = {
    "Car/SUV": [
        [50000, 195, 975],
        [75000, 225, 1035],
        [100000, 270, 1095],
        [150000, 345, 1170],
        [200000, 420, 1245],
        [250000, 510, 1320],
        [300000, 585, 1395],
        [400000, 675, 1515],
        [500000, 780, 1635],
        [750000, 915, 1920],
        [1000000, 1050, 2235],
    ],
    Motorcycle: [
        [50000, 75, 450],
        [75000, 90, 510],
        [100000, 105, 555],
        [150000, 120, 645],
        [200000, 135, 720],
        [250000, 150, 795],
    ],
    "Light Truck": [
        [50000, 225, 1050],
        [75000, 285, 1110],
        [100000, 345, 1170],
        [150000, 420, 1245],
        [200000, 510, 1320],
        [250000, 585, 1395],
        [300000, 660, 1485],
        [400000, 750, 1575],
        [500000, 855, 1680],
        [750000, 945, 2100],
        [1000000, 1050, 2535],
    ],
    "Large Truck": [
        [50000, 345, 1200],
        [75000, 405, 1245],
        [100000, 465, 1290],
        [150000, 555, 1335],
        [200000, 660, 1395],
        [250000, 750, 1455],
        [300000, 855, 1515],
        [400000, 975, 1590],
        [500000, 1095, 1680],
        [750000, 1230, 2205],
        [1000000, 1365, 2730],
    ],
};

export const computeFromVehicleValue = (payload) => async (dispatch) => {
    //POLICY COMPUTATIONS HERE
    const vehicleValue = payload.vehicleValue;
    const vehicleType = payload.vehicleType;
    const insuranceType = payload.insuranceType; //integer

    //Own Damage Theft
    const l_ownDamageTheft = insuranceType > 0 ? vehicleValue : 0,
        p_ownDamageTheft = insuranceType > 0 ? vehicleValue * 0.0125 : 0;
    console.log(typeof p_ownDamageTheft);
    //Acts of Nature
    const l_actsOfNature = insuranceType == 2 ? vehicleValue : 0,
        p_actsOfNature = insuranceType == 2 ? vehicleValue * 0.005 : 0;
    //VTPL
    const vtpl = VTPL_map[vehicleType].reduce((acc, curr) =>
        vehicleValue >= curr[0] ? curr : acc
    );
    const p_vtpl_bodilyInjury = vtpl[1],
        p_vtpl_propertyDamage = vtpl[2];

    //auto personal accident
    const gq_dd_autoPersonalAccident =
        vehicleType == "Car/SUV"
            ? [250000, 350000]
            : vehicleType == "Motorcycle"
            ? [20000]
            : [0];

    const p_autoPersonalAccident = vehicleType == "Motorcycle" ? 40 : 0;

    //total tax (liberty 24.7)
    const netPremiumTotal =
        p_ownDamageTheft +
        p_actsOfNature +
        p_vtpl_bodilyInjury +
        p_vtpl_propertyDamage +
        p_autoPersonalAccident;

    console.log(netPremiumTotal);
    const totalTax = netPremiumTotal * 0.247;

    const totalPremium = netPremiumTotal - totalTax;

    //testValue
    // dispatch(onChange({key: "vehicleValue", value: vehicleValue}));

    dispatch(onChange({key: "l_ownDamageTheft", value: l_ownDamageTheft}));
    dispatch(onChange({key: "p_ownDamageTheft", value: p_ownDamageTheft}));
    dispatch(onChange({key: "l_actsOfNature", value: l_actsOfNature}));
    dispatch(onChange({key: "p_actsOfNature", value: p_actsOfNature}));
    dispatch(
        onChange({key: "p_vtpl_bodilyInjury", value: p_vtpl_bodilyInjury})
    );
    dispatch(
        onChange({key: "p_vtpl_propertyDamage", value: p_vtpl_propertyDamage})
    );
    dispatch(
        onChange({
            key: "gq_dd_autoPersonalAccident",
            value: gq_dd_autoPersonalAccident,
        })
    );
    dispatch(
        onChange({key: "p_autoPersonalAccident", value: p_autoPersonalAccident})
    );
    dispatch(onChange({key: "totalTax", value: totalTax}));
    dispatch(onChange({key: "totalPremium", value: totalPremium}));
};
