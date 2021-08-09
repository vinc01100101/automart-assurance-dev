import {Typography, Grid, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector, useDispatch} from "react-redux";
import textFieldMaker from "../../helpers/textFieldMaker";
import {formatPrice} from "../../helpers/formatters";
import {onChange} from "@/redux/dialogs/creators";

const useStyles = makeStyles((theme) => ({
    boldFonts: {
        fontWeight: "bold",
    },
}));

export default function PolicyDetails() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {
        l_ownDamageTheft,
        p_ownDamageTheft,
        l_actsOfNature,
        p_actsOfNature,
        l_vtpl_bodilyInjury,
        p_vtpl_bodilyInjury,
        gq_dd_vtpl_bi,
        l_vtpl_propertyDamage,
        p_vtpl_propertyDamage,
        gq_dd_vtpl_pd,
        gq_dd_autoPersonalAccident,
        l_autoPersonalAccident,
        p_autoPersonalAccident,
        totalTax,
        totalPremium,
    } = useSelector((state) => state.dialogReducer);

    const handleChange = (key, value) => {
        dispatch(onChange({key, value}));
    };

    const vtplDropdowns = {
        bi: {
            label: "",
            value: l_vtpl_bodilyInjury,
            id: "l_vtpl_bodilyInjury",
            isSelect: true,
            menuData: gq_dd_vtpl_bi,
        },
        pd: {
            label: "",
            value: l_vtpl_propertyDamage,
            id: "l_vtpl_propertyDamage",
            isSelect: true,
            menuData: gq_dd_vtpl_pd,
        },
        pa: {
            label: "",
            value: l_autoPersonalAccident,
            id: "l_autoPersonalAccident",
            isSelect: true,
            menuData: gq_dd_autoPersonalAccident,
        },
    };
    const biDropdown = textFieldMaker(
        vtplDropdowns.bi,
        false,
        "",
        handleChange,
        "small"
    );
    const pdDropdown = textFieldMaker(
        vtplDropdowns.pd,
        false,
        "",
        handleChange,
        "small"
    );
    const paDropdown = textFieldMaker(
        vtplDropdowns.pa,
        false,
        "",
        handleChange,
        "small"
    );
    //₱
    const rowItems = [
        ["", "Limit", "Premium"],
        ["Own Damage Theft", l_ownDamageTheft, formatPrice(p_ownDamageTheft)],
        ["Acts of Nature", l_actsOfNature, formatPrice(p_actsOfNature)],
        ["VTPL - Bodily Injury", biDropdown, formatPrice(p_vtpl_bodilyInjury)],
        [
            "VTPL - Property Damage",
            pdDropdown,
            formatPrice(p_vtpl_propertyDamage),
        ],
        [
            "Auto Personal Accident",
            paDropdown,
            formatPrice(p_autoPersonalAccident),
        ],
        ["Total Tax", "", formatPrice(totalTax)],
        ["Total Premium", "", formatPrice(totalPremium)],
    ];
    const makeGridItems = () => {
        return rowItems.map((x, i) => {
            const background = i % 2 == 0 && "#F0F5EF";
            const style = {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background,
                fontWeight: i == 0 || i == rowItems.length - 1 ? "bold" : "",
            };

            return (
                <Grid container key={i}>
                    {i == rowItems.length - 1 && (
                        <Grid item xs={12}>
                            <Divider flexItem />
                        </Grid>
                    )}

                    <Grid
                        item
                        xs={6}
                        style={{...style, justifyContent: "flex-start"}}
                    >
                        {x[0]}
                    </Grid>
                    <Grid item xs={3} style={style}>
                        {x[1]}
                    </Grid>
                    <Grid item xs={3} style={style}>
                        {x[2]}
                    </Grid>
                </Grid>
            );
        });
    };
    return (
        <>
            <Typography variant="h6">Insurance Coverage:</Typography>
            <Grid container>{makeGridItems()}</Grid>
            <Typography variant="caption">
                VTPL covers for damage to other vehicles and persons.
            </Typography>
            <Typography variant="caption">
                Deductibles are reflected depending on type of vehicle.
            </Typography>
        </>
    );
}
