import { ACTIONS } from "./constants";
// const BASE_URL = "https://sellmycar-api-dev.philippine.properties";

export const setModal = (modal) => ({
  type: ACTIONS.SET_MODAL,
  payload: modal,
});

/**
 * @param {Object} data `{key, value}
 */
export const setInput = (data) => ({
  type: ACTIONS.SET_INPUT,
  payload: data,
});

export const setDatesArray = () => ({
  type: ACTIONS.SET_DATES_ARRAY,
});

export const setShowError = (bool) => ({
  type: ACTIONS.SET_SHOW_ERROR,
  payload: bool,
});
//CHAINED ACTIONS---------------------------
let BASE_URL;
export const SET_BASE_URL = (url) => {
  BASE_URL = url;
};

export const setLocationsData = (payload) => ({
  type: ACTIONS.SET_LOCATIONS_DATA,
  payload,
});
export const fetchLocationsData = () => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/inspection-sites`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.label, id: data.id }));
  dispatch(setLocationsData(payload));
};

export const setBrandsData = (payload) => ({
  type: ACTIONS.SET_BRANDS_DATA,
  payload,
});
export const fetchBrandsData = () => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/brands`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.name, id: data.id }));
  dispatch(setBrandsData(payload));
};

export const setModelsData = (payload) => ({
  type: ACTIONS.SET_MODELS_DATA,
  payload,
});
export const fetchModelsData = (query) => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/brand-models?brand_id=${query}`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.name, id: data.id }));
  dispatch(setModelsData(payload));
};

export const setTrimsData = (payload) => ({
  type: ACTIONS.SET_TRIMS_DATA,
  payload,
});
export const fetchTrimsData = (query) => async (dispatch) => {
  const data = await fetch(
    `${BASE_URL}/brand-model-properties?classification_property_id=1&brand_model_id=${query}`
  );
  const json = await data.json();
  const payload = json.map((data) => ({
    label: data.property_value,
    id: data.id,
  }));
  dispatch(setTrimsData(payload));
};

export const setTransmissionsData = (payload) => ({
  type: ACTIONS.SET_TRANSMISSIONS_DATA,
  payload,
});
export const fetchTransmissionsData = () => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/transmission-types`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.label, id: data.id }));
  dispatch(setTransmissionsData(payload));
};

export const setFuelTypesData = (payload) => ({
  type: ACTIONS.SET_FUELTYPES_DATA,
  payload,
});
export const fetchFuelTypesData = () => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/fuel-types`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.label, id: data.id }));
  dispatch(setFuelTypesData(payload));
};

export const setColorsData = (payload) => ({
  type: ACTIONS.SET_COLORS_DATA,
  payload,
});
export const fetchColorsData = () => async (dispatch) => {
  const data = await fetch(`${BASE_URL}/brand-colors`);
  const json = await data.json();
  const payload = json.map((data) => ({ label: data.label, id: data.id }));
  dispatch(setColorsData(payload));
};
