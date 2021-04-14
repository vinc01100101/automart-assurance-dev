console.log("IMPORTING: vehicleInfo.js");

//material ui
import { Typography } from "@material-ui/core";

//redux
import { useSelector } from "react-redux";

//fields data
import { FIELD_YEAR } from "./data/vehicleInfoData";

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

  const jsxPlateNumber = (
    <>
      <div>Plate</div>
      <div>Number</div>
    </>
  );

  const jsxConductionSticker = (
    <>
      <div>Conduction</div>
      <div>Sticker</div>
    </>
  );
  return (
    <form>
      {makeSelect("Year", year, "year", FIELD_YEAR)}
      {makeSelect("Brand", brand, "brand", brandsArray)}
      {modelsArray.length > 0 &&
        makeSelect("Model", model, "model", modelsArray)}
      {trimsArray.length > 0 && makeSelect("Trim", trim, "trim", trimsArray)}

      {/* flex row this plateConduction*/}
      <div className="plateConduction">
        {makeTextField(jsxPlateNumber, plateNumber, "plateNumber")}
        <Typography variant="h6" component="p">
          Or
        </Typography>
        {makeTextField(
          jsxConductionSticker,
          conductionSticker,
          "conductionSticker"
        )}
      </div>

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
