import * as React from "react";
import { TextField } from "@material-ui/core";

export default function CustomTextFields({
  element,
  index,
  textFields,
  setTextFields,
}) {
  const { label, error, placeholder, type } = element;

  const FieldTypes = {
    TEXT_FIELD: "TEXT_FIELD",
    EMAIL: "EMAIL",
    CONTACT_NUMBER: "CONTACT_NUMBER",
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const inputPhoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = inputPhoneNumber.length;
    if (phoneNumberLength < 4) return inputPhoneNumber;
    if (phoneNumberLength < 7) {
      return `${inputPhoneNumber.slice(0, 3)}-${inputPhoneNumber.slice(3)}`;
    }
    return `${inputPhoneNumber.slice(0, 3)}-${inputPhoneNumber.slice(
      3,
      6
    )}-${inputPhoneNumber.slice(6, 10)}`;
  };

  const onFieldChanged = (event, index, fieldType) => {
    let newFields = [...textFields];
    if (event.target.value) {
      newFields[index].error = "";
      setTextFields(newFields);
    }

    if (fieldType === FieldTypes.CONTACT_NUMBER) {
      const formattedPhoneNumber = formatPhoneNumber(event.target.value);
      if (formattedPhoneNumber.length < 12) {
        newFields[index].error = "Phone number must be at least 10 numbers";
      } else {
        newFields[index].error = "";
      }
      newFields[index].value = formattedPhoneNumber;
      setTextFields(newFields);
    } else if (fieldType === FieldTypes.EMAIL) {
      const email = event.target.value;
      newFields[index].value = email;
      setTextFields(newFields);
      // eslint-disable-next-line
      if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        newFields[index].error = "";
      } else {
        newFields[index].error = "Please enter valid email address";
      }
    } else {
      newFields[index].value = event.target.value;
      setTextFields(newFields);
    }
  };

  return (
    <TextField
      fullWidth={true}
      label={label}
      size="small"
      variant="outlined"
      required
      InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }}
      placeholder={placeholder}
      error={!!error}
      helperText={error}
      value={element.value || ""}
      onChange={(event) => onFieldChanged(event, index, type)}
    />
  );
}
