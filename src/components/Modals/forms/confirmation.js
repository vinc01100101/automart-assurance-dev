//material ui
import { Typography, InputBase, Link } from "@material-ui/core";

//svg's
import { viber, telephone, atsign } from "@/svgStore/svgCall";

//contact hrefs
import { TELEPHONE, EMAIL } from "@/components/hrefLinks";

//time data
import { FIELD_TIME } from "./data/appointmentData";

//react
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "@/redux/modals/creators";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

let { apiBasePath, basePath } = publicRuntimeConfig;
//"basePath" for testing appointment-api-endpoint only
basePath = basePath || "";

export default function confirmation({ setActiveComponent, setResult }) {
  const [viberLink, setViberLink] = useState(
    "viber://add?number=63963 188 2087"
  );

  useEffect(() => {
    import("react-device-detect").then((mod) => {
      mod.isMobile
        ? setViberLink("viber://add?number=63963 188 2087")
        : setViberLink("viber://chat?number=+63963 188 2087");
    });
  }, []);

  //redux states
  const {
    location,
    locationsArray,
    date,
    time,
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
    firstName,
    lastName,
    mobileNumber,
    email,
    address,
  } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  //the key value pairs to present on the confirmation form
  const appointment = {
    title: "Appointment Schedule",
    data: [
      [
        "Location",
        location ? locationsArray.find((x) => x.id === location).label : "",
      ],
      ["Date", date],
      ["Time", time ? FIELD_TIME.find((x) => x.id === time).label : ""],
    ],
  };
  const vehicle = {
    title: "Car Details",
    data: [
      ["Year", year],
      ["Brand", brand ? brandsArray.find((x) => x.id === brand).label : ""],
      ["Model", model ? modelsArray.find((x) => x.id === model).label : ""],
      ["Trim", trim ? trimsArray.find((x) => x.id === trim).label : ""],
      ["Plate Number", plateNumber],
      ["Conduction Sticker", conductionSticker],
      [
        "Transmission Type",
        transmissionType
          ? transmissionsArray.find((x) => x.id === transmissionType).label
          : "",
      ],
      [
        "Fuel Type",
        fuelType ? fuelTypesArray.find((x) => x.id === fuelType).label : "",
      ],
      ["Color", color ? colorsArray.find((x) => x.id === color).label : ""],
      ["Odometer", odometer],
    ],
  };
  const personal = {
    title: "Personal Details",
    data: [
      ["First Name", firstName],
      ["Last Name", lastName],
      ["Mobile Number", mobileNumber],
      ["Email", email],
      ["Address", address],
    ],
  };

  const makeSection = (info) => {
    return (
      <>
        <Typography variant="body1" className="summaryTitle">
          {info.title}
        </Typography>
        {info.data.map((data, i) => {
          //data[0] == key
          //data[1] == value
          //thou we could have used Object.fromEntries(data)

          //required fields
          const requiredFields = [
            "First Name",
            "Last Name",
            "Mobile Number",
            "Location",
            "Date",
            "Time",
            "Address",
            "Email",
            "Odometer",
            "Transmission Type",
            "Year",
            "Brand",
            "Fuel Type",
            "Color",
          ];

          //either conduction sticker or plate number required
          const either =
            conductionSticker === "" &&
            plateNumber === "" &&
            ((data[0] === "Plate Number" && "Provide either PlateNumber") ||
              (data[0] === "Conduction Sticker" && "or ConductionSticker"));

          //error styles and values
          const padding = either && "0px";
          const display = either && "flex";
          const fontSize = either && "12px";

          const alignItems =
            either &&
            (data[0] === "Conduction Sticker" ? "flex-start" : "flex-end");

          const value =
            either ||
            (data[1] === ""
              ? requiredFields.indexOf(data[0]) >= 0
                ? "This field is required."
                : "No details provided."
              : data[0] === "Date"
              ? `${data[1].month} ${data[1].date}, ${data[1].day}`
              : data[1]);

          const color =
            value === "No details provided."
              ? "#FFAFAF"
              : value === "This field is required." || either
              ? "#FF0000"
              : "black";

          const fontWeight = color === "#FF0000" && "bold";

          return (
            <div key={i} className="summaryContentBox">
              <Typography
                variant="body1"
                component="div"
                className="summaryLabel"
              >
                {data[0]}
              </Typography>
              <InputBase
                style={{ color, display, alignItems, fontWeight, fontSize }}
                //the input element inside inputBase has padding, remove it if "either"
                inputProps={{
                  style: {
                    padding,
                    pointerEvents: "none",
                  },
                  name: data[0],
                  value,
                }}
                className="summaryValue"
                //this section is for details confirmation, make it readOnly
                readOnly
                disabled
              ></InputBase>
            </div>
          );
        })}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //open loading dialog
    setResult({
      title: "Please wait...",
      description: "Your form is being sent.",
      svg: 0,
    });
    setActiveComponent(4);

    //uncomment "return" to simulate the loading dialog
    // return;

    const readyStates = [
      "0: request not initialized",
      "1: server connection established",
      "2: request received",
      "3: processing request",
      "4: request finished and response is ready",
    ];

    const xhr = new XMLHttpRequest();

    xhr.open(
      "POST",
      `${apiBasePath}/inspection-appointments`,
      // `${basePath}api/appointment`, //testing api
      true
    );

    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = () => {
      console.log(readyStates[xhr.readyState], xhr.status);
      if (xhr.readyState !== 4) return; //GUARD CLAUSE

      dispatch(setModal("getMyQuote")); //open modal to notify the user
      if (xhr.status !== 201) {
        //set error dialog
        setResult({
          title: `Error Status: ${xhr.status}`,
          description: xhr.statusText,
          svg: 2,
        });
        return;
      }
      let display = viberLink.split("=")[1];
      display = display[0] == "6" ? "+".concat(display) : display;
      //set success dialog
      setResult({
        title:
          "Thanks for successfully booking a Car Inspection to Sell Your Car!",
        description: (
          <>
            We will finalize details, and get in contact with you if there’s
            anything else we’d need. For any concerns, or if you need to cancel,
            contact us at
            <span className="contact">
              {telephone}
              <Link href={TELEPHONE}>{TELEPHONE.split(":")[1]}</Link>
            </span>
            <span className="contact">
              {viber}
              <Link href={viberLink}>{display}</Link>
            </span>
            <span className="contact">
              {atsign}
              <Link href={EMAIL}>{EMAIL.split(":")[1]}</Link>
            </span>
          </>
        ),
        svg: 1,
      });
    };

    const formData = {
      inspection_site_id: location,
      classification_id: 1,
      referral_partner_id: 1,
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: mobileNumber,
      city_address: address,
      year: year,
      brand_id: brand,
      brand_model_id: model,
      brand_model_property_id: trim,
      plate_number: plateNumber,
      conduction_sticker: conductionSticker,
      fuel_type_id: fuelType,
      transmission_type_id: transmissionType,
      brand_color_id: color,
      odometer: odometer.replace(/,/g, ""),
      notes: "good",
      scheduled_at: date.format + " " + time,
    };
    //delete the empty fields..
    !conductionSticker && delete formData.conduction_sticker;
    !plateNumber && delete formData.plate_number;
    !model && delete formData.brand_model_id;
    !trim && delete formData.brand_model_property_id;

    const stringified = JSON.stringify(formData);
    xhr.send(stringified);

    console.log("sent");
  };

  return (
    <form onSubmit={handleSubmit} id="confirmation-form" method="post">
      {makeSection(appointment)}
      {makeSection(vehicle)}
      {makeSection(personal)}
      <input type="submit" id="submitterButton" hidden />
    </form>
  );
}
