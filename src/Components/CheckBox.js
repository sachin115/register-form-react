import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function CustomCheckbox({
  element,
  index,
  textFields,
  setTextFields,
}) {
  const { label, type } = element;
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const onFieldChanged = (checked, index, fieldType) => {
    let newFields = [...textFields];

    newFields[index].value = !checked;
    setTextFields(newFields);
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      // value="start"
      className={classes.formControlItem}
      control={
        <Checkbox
          color="primary"
          checked={checked}
          onChange={() => onFieldChanged(checked, index, type)}
        />
      }
      label={
        <Typography className={classes.FormControlContainer}>
          {label}
        </Typography>
      }
      labelPlacement="start"
    />
  );
}
