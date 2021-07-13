import {ACTIONS} from "./constants";

export const onChange = (payload) => ({
    type: ACTIONS.ONCHANGE,
    payload,
});
