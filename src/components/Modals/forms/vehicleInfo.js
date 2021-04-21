//material ui
import { Typography } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

//fields data
// import { FIELD_YEAR } from "./data/vehicleInfoData";

//input component makers
import makeInputComponents from "./makeInputComponents";

export default function vehicleInfo() {
  //redux states
  const {
    year,
    brand,
    brandsArray,
    model,
    modelsArray,
    trim,
    trimsArray,
    plateNumber,
    conductionSticker,
    transmissionType,
    transmissionsArray,
    fuelType,
    fuelTypesArray,
    color,
    colorsArray,
    odometer,
  } = useSelector((state) => state.modals);

  //makeInputComponents returns input component makers
  const { makeSelect, makeTextField } = makeInputComponents();

  return (
    <form>
      {/* {makeSelect("Year", year, "year", FIELD_YEAR)} */}
      {makeTextField("Year", year, "year")}
      {makeSelect("Brand", brand, "brand", brandsArray)}
      {modelsArray.length > 0 &&
        makeSelect("Model", model, "model", modelsArray)}
      {trimsArray.length > 0 && makeSelect("Trim", trim, "trim", trimsArray)}

      {/**
       * 4th params = for special cases:
       * "either plate number or conduction sticker is required"
       */}
      {makeTextField(
        "Plate Number",
        plateNumber,
        "plateNumber",
        conductionSticker
      )}
      {makeTextField(
        "Conduction Sticker",
        conductionSticker,
        "conductionSticker",
        plateNumber
      )}

      {makeSelect(
        "Transmission Type",
        transmissionType,
        "transmissionType",
        transmissionsArray
      )}
      {makeSelect("Fuel Type", fuelType, "fuelType", fuelTypesArray)}
      {makeSelect("Color", color, "color", colorsArray)}
      {makeTextField("Odometer", odometer, "odometer")}
    </form>
  );
}
