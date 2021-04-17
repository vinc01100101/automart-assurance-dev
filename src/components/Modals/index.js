//material ui
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
//redux
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";
import { useState, useEffect } from "react";
//next
import dynamic from "next/dynamic";
//styles
import useStyles from "./styles";
//forms
// import Appointment from "./forms/appointment";
// import VehicleInfo from "./forms/vehicleInfo";
// import PersonalInfo from "./forms/personalInfo";
// import Confirmation from "./forms/confirmation";
const Appointment = "./forms/appointment";
const VehicleInfo = "./forms/vehicleInfo";
const PersonalInfo = "./forms/personalInfo";
const Confirmation = "./forms/confirmation";
//svg's
import loading from "@/svgStore/svg/loading";
import success from "@/svgStore/svg/success";
import error from "@/svgStore/svg/error";
//svg reference array
const svgReferenceArray = [loading, success, error];
//dynamic import creator
const makeDynamic = (path) => {
  return dynamic(() => import(`${path}`), {
    loading: () => (
      <div style={{ display: "flex", alignItems: "center" }}>
        {loading}
        <h3>Please wait...</h3>
      </div>
    ),
    ssr: false,
  });
};
//reference for the active form
let componentReferenceArray = [
  {
    Component: makeDynamic(Appointment),
    title: "Appointment",
  },
  {
    Component: makeDynamic(VehicleInfo),
    title: "Vehicle Information",
    description:
      "Tell us about your vehicle so we can give you a rough estimate of how much you can sell it for.",
  },
  {
    Component: makeDynamic(PersonalInfo),
    title: "Personal Information",
    description: "Tell us about your personal information.",
  },
  {
    Component: makeDynamic(Confirmation),
    title: "Summary",
    description:
      "Please check if all of the information you provided are correct.",
  },
];

export default function modals() {
  //redux states
  const {
    activeModal,
    location,
    date,
    time,
    firstName,
    lastName,
    mobileNumber,
    plateNumber,
    conductionSticker,
    address,
    email,
    odometer,
    transmissionType,
    year,
    brand,
    fuelType,
    color,
  } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeComponent, setActiveComponent] = useState(() => 0);
  //for paper animation upon form submission
  const [paperClasses, setPaperClasses] = useState(() => ({
    frontPaper: "",
    backPaper: "",
  }));
  const [result, setResult] = useState(() => ({
    svg: 0,
    title: "",
    description: "",
  }));
  useEffect(() => {
    result.svg != 0 &&
      setTimeout(() => {
        setPaperClasses(() => ({
          frontPaper: " frontPaperEnd",
          backPaper: " backPaperEnd",
        }));
      }, 700);
  }, [result.svg]);
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const handleBackButton = () => {
    if (activeComponent > 0) {
      setActiveComponent((curr) => curr - 1);
    } else {
      handleClose();
    }
  };
  const handleNextButton = () => {
    if (activeComponent < 3) {
      setActiveComponent((curr) => curr + 1);
    } else {
      // const form = document.querySelector("#confirmation-form");
      // form.submit(); //<---onSubmit is not triggering

      const formSubmitButton = document.querySelector("#submitterButton");
      formSubmitButton.click();
    }
  };
  if (activeComponent === 4)
    componentReferenceArray[4] = {
      title: result.title,
      description: result.description,
    };
  const { Component, title, description } = componentReferenceArray[
    activeComponent
  ];
  //--Component constant is only for makeFormLayout()
  const makeFormLayout = () => {
    //--disable submit button if requirements are not met
    const isDisabled =
      activeComponent === 3 &&
      (firstName === "" ||
        lastName === "" ||
        mobileNumber === "" ||
        location === "" ||
        date === "" ||
        time === "" ||
        address === "" ||
        email === "" ||
        odometer === "" ||
        transmissionType === "" ||
        year === "" ||
        brand === "" ||
        fuelType === "" ||
        color === "" ||
        (plateNumber === "" && conductionSticker === ""));

    return (
      <>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
        {description && <Typography variant="body1">{description}</Typography>}
        <Component
          setActiveComponent={activeComponent === 3 && setActiveComponent}
          setResult={activeComponent === 3 && setResult}
        />
        <div className={classes.buttonsContainer}>
          <Button variant="text" onClick={handleBackButton}>
            {activeComponent > 0 ? "Back" : "Cancel"}
          </Button>
          <Button
            disabled={isDisabled}
            variant="contained"
            color="secondary"
            onClick={handleNextButton}
          >
            {activeComponent < 3 ? "Next" : "Submit"}
          </Button>
        </div>
      </>
    );
  };

  const makeDialogLayout = () => {
    return (
      <>
        <div className={classes.dialogLayout}>
          <div className="iconAndText">
            {result.svg != 0 && (
              <div className="icon">
                <div
                  className={`twoPapers backPaper${paperClasses.backPaper}`}
                />
                <div
                  className={`twoPapers frontPaper${paperClasses.frontPaper}`}
                >
                  {svgReferenceArray[result.svg]}
                </div>
              </div>
            )}

            <div className="text">
              <Typography variant="h5">{title}</Typography>
              {description && (
                <Typography variant="body1">{description}</Typography>
              )}
            </div>
            {result.svg === 0 && svgReferenceArray[result.svg]}
          </div>
        </div>

        {result.svg != 0 && (
          <div className={classes.buttonsContainer}>
            <Button
              variant={result.svg === 1 ? "contained" : "text"}
              color={result.svg === 1 ? "secondary" : "default"}
              onClick={handleClose}
            >
              {result.svg === 1 ? "OK" : "Cancel"}
            </Button>

            {/* the retry button upon failed submission (error) */}
            {result.svg === 2 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setPaperClasses(() => ({
                    frontPaper: "",
                    backPaper: "",
                  }));
                  setActiveComponent(3);
                }}
              >
                Retry
              </Button>
            )}
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <Modal
        className={classes.modal}
        open={activeModal === "getMyQuote"}
        onClose={handleClose}
        aria-labelledby="getmyquote-modal-title"
        aria-describedby="getmyquote-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={activeModal === "getMyQuote"}>
          <Paper className={classes.paper}>
            {activeComponent <= 3 ? makeFormLayout() : makeDialogLayout()}
          </Paper>
        </Fade>
      </Modal>
    </>
  );
}
