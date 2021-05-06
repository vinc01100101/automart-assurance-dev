//redux
import { useSelector } from "react-redux";

//input component makers
import makeInputComponents from "./makeInputComponents";

//mui
import { Typography } from "@material-ui/core";

export default function personalInfo() {
  //redux states
  const { reasonForSelling } = useSelector((state) => state.modals);

  //makeInputComponents returns input component makers
  const { makeTextField } = makeInputComponents();

  const length = reasonForSelling.length;
  return (
    <form>
      {makeTextField(
        "Reason For Selling",
        reasonForSelling,
        "reasonForSelling",
        undefined,
        true
      )}
      <Typography style={{ color: length > 280 && "red" }}>
        Character limit: {length}/300
      </Typography>
    </form>
  );
}
