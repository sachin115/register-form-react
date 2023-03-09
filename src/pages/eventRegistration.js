import { Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import CustomTextField from "../Components/CustomTextField";
import moment from "moment";
import CustomCheckbox from "../Components/CheckBox";
import useStyles from "./styles";
// import "./styles.js";

function EventRegistration() {
  const FieldTypes = {
    TEXT_FIELD: "TEXT_FIELD",
    EMAIL: "EMAIL",
    DROPDOWN: "DROPDOWN",
    CONTACT_NUMBER: "CONTACT_NUMBER",
    CHECK_BOX: "CHECK_BOX",
  };
  const emptyTextFields = [
    {
      label: "Full Name",
      value: "",
      error: "",
      type: FieldTypes.TEXT_FIELD,
      placeholder: "",
      divider: false,
    },
    {
      label: "Email",
      value: "",
      error: "",
      type: FieldTypes.EMAIL,
      placeholder: "",
      divider: false,
    },
    {
      label: "Phone Number",
      value: "",
      error: "",
      type: FieldTypes.CONTACT_NUMBER,
      placeholder: "xxx-xxx-xxxx",
      divider: false,
    },
    {
      label: "I would like to receive emails related to this event",
      value: "",
      error: "",
      type: FieldTypes.CHECK_BOX,
      placeholder: "",
      divider: true,
    },
    {
      label: "I would like to receive text messages related to this event",
      value: "",
      error: "",
      type: FieldTypes.CHECK_BOX,
      placeholder: "",
      divider: true,
    },
  ];

  const [textFields, setTextFields] = useState([...emptyTextFields]);
  const classes = useStyles();

  const saveFormData = async (e) => {
    e.preventDefault();
    const data = [...textFields];
    data.forEach((ele, index) => {
      if (ele.value) {
        data[index].error = "";
        setTextFields(data);
      } else {
        data[index].error = "This field is required";
        setTextFields(data);
      }
    });
  };

  return (
    <>
      <Paper>
        <Grid container>
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            xs={12}
            className={classes.gridLogo}
          >
            <img
              src="https://www.sumasoft.com/wp-content/uploads/2021/02/suma-soft-logo-1-75x40.png"
              alt="Logo"
              height="50px"
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.madiumPaper}>
        <Grid container className={classes.madiumPaperGrid}>
          <Grid item md={6} xs={12} lg={6}>
            <Typography className={classes.madiumPaperTypography}>
              Event Registration
            </Typography>
            <Paper elevation={0} className={classes.underTopPaper}>
              <Grid container className={classes.underPaperGrid}>
                <img
                  src="https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=1024x1024&w=is&k=20&c=4E-zDAZ4z9ymEYaDiq8Nrhqx3FEdAi9nuWSUhVmpTQ0="
                  alt="Logo"
                  height="30px"
                />
                <Typography className={classes.underPaperTypography}>
                  Beer & Burger Event
                </Typography>
                <Typography align="center">
                  Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Typography align="center">
                  Valutpat ac mollis condimentum ut
                </Typography>
                <Typography align="center">Sollicitudin nunc congue</Typography>
              </Grid>
              <Divider variant="middle" />
              <Grid container className={classes.underPaperGridContainer}>
                <Typography>Time</Typography>
                <Typography className={classes.underTypography}>
                  {moment().format("LLLL")}
                </Typography>
                <Typography>Location</Typography>
                <Typography className={classes.underTypography}>
                  Ground Level Party Room
                </Typography>
              </Grid>
            </Paper>
            <Paper elevation={0} className={classes.buttonPaper}>
              <Grid container spacing={3}>
                {textFields.map((element, index) => {
                  return (
                    <Grid key={index} item md={12} xs={12} lg={12}>
                      {element.type === FieldTypes.TEXT_FIELD ||
                      element.type === FieldTypes.CONTACT_NUMBER ||
                      element.type === FieldTypes.EMAIL ? (
                        <CustomTextField
                          textFields={textFields}
                          setTextFields={setTextFields}
                          element={element}
                          index={index}
                        />
                      ) : (
                        element.type === FieldTypes.CHECK_BOX && (
                          <CustomCheckbox
                            textFields={textFields}
                            setTextFields={setTextFields}
                            element={element}
                            index={index}
                          />
                        )
                      )}
                      {element.divider && <Divider />}
                    </Grid>
                  );
                })}
                <Grid
                  item
                  md={12}
                  xs={12}
                  lg={12}
                  className={classes.madiumPaperGrid}
                >
                  <Button
                    onClick={(e) => saveFormData(e)}
                    variant="contained"
                    color="primary"
                    disabled={
                      !!textFields.find((ele) =>
                        ele.value && !ele.error ? false : true
                      )
                    }
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default EventRegistration;
