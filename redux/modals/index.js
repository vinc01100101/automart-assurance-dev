import { FreeBreakfastOutlined } from "@material-ui/icons";
import { ACTIONS } from "./constants";
//arrays: [] are the dropdowns
const initialState = {
  activeModal: false,
  //appointment
  location: "",
  date: "",
  time: "",
  locationsArray: [],
  datesArray: [],
  //vehicle info
  year: "",
  brand: "",
  brandsArray: [],
  model: "",
  modelsArray: [],
  trim: "",
  trimsArray: [],
  plateNumber: "",
  conductionSticker: "",
  transmissionType: "",
  transmissionsArray: [],
  fuelType: "",
  fuelTypesArray: [],
  color: "",
  colorsArray: [],
  odometer: "",
  //personal info
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  address: "",
  //error handle when empty field
  showError: false,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL:
      return { ...state, activeModal: action.payload };
      break;
    case ACTIONS.SET_INPUT:
      return { ...state, [action.payload.key]: action.payload.value };
      break;
    case ACTIONS.SET_DATES_ARRAY:
      const now = Date.now();
      /**
       * there is 8.64e7 milliseconds in a day
       * increment "now" by 8.64e7 to get each day of the same time
       **/

      const dates = [...Array(15)].map(
        (x, i) => new Date(now + 8.64e7 * (i + 1))
      );

      //IIFE (Immediately Invoked Function Expression)
      const formattedDates = (() => {
        //set references
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        //formattedDates = this..
        return dates.map((date) => {
          //add zero to month if it is 1 digit.
          //increment month by 1 because it starts at 0 count
          let monthFormat = (date.getMonth() + 1).toString();
          monthFormat =
            monthFormat.length == 1 ? `0${monthFormat}` : monthFormat;

          return {
            month: months[date.getMonth()],
            date: date.getDate(),
            day: days[date.getDay()],
            format: `${date.getFullYear()}-${monthFormat}-${date.getDate()}`,
          };
        });
      })();

      return { ...state, datesArray: formattedDates };
      break;

    case ACTIONS.SET_LOCATIONS_DATA:
      return {
        ...state,
        locationsArray: action.payload,
      };
      break;

    case ACTIONS.SET_BRANDS_DATA:
      return {
        ...state,
        brandsArray: action.payload,
      };
      break;

    case ACTIONS.SET_MODELS_DATA:
      return {
        ...state,
        modelsArray: action.payload,
      };
      break;

    case ACTIONS.SET_TRIMS_DATA:
      return {
        ...state,
        trimsArray: action.payload,
      };
      break;

    case ACTIONS.SET_TRANSMISSIONS_DATA:
      return {
        ...state,
        transmissionsArray: action.payload,
      };
      break;

    case ACTIONS.SET_FUELTYPES_DATA:
      return {
        ...state,
        fuelTypesArray: action.payload,
      };
      break;

    case ACTIONS.SET_COLORS_DATA:
      return {
        ...state,
        colorsArray: action.payload,
      };
      break;

    case ACTIONS.SET_SHOW_ERROR:
      return {
        ...state,
        showError: action.payload,
      };
      break;

    default:
      return state;
  }
};
export default modalsReducer;
