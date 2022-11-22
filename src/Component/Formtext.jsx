import {
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { url } from "../Url";

const Formtext = () => {
  const [amount, setamount] = useState({
    name: "",
    password: "",
    lname: "",
  });
  const [data1, setdata1] = useState([]);

  const check = useMediaQuery("(max-width:700px)");

  const handelcontrol = (e) => {
    setamount({ ...amount, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    // validate();
    // alert(`my name in ${amount.name} last name in ${amount.lname}`);
    // setamount("");
  };
  const validate = () => {
    // alert("validate called");
    let isvalid = true;

    if (
      amount.name.length < 3 ||
      amount.name.length > 10 ||
      amount.name.length == 0
    ) {
      isvalid = false;
      alert("plzz Check your field Name");
    } else if (
      amount.password.length < 3 ||
      amount.password.length > 10 ||
      amount.password.length == 0
    ) {
      isvalid = false;
      //   settitleerr("title to be 5 to 80 characters long");
      alert("plzz Check your passwor");
    } else if (
      amount.lname.length < 3 ||
      amount.lname.length > 10 ||
      amount.lname.length == 0
    ) {
      isvalid = false;
      //   settitleerr("title to be 5 to 80 characters long");
      alert("plzz Check your Last name");
    } else {
      //   setamount("");
      isvalid = true;
    }

    return isvalid;
  };

  const stylefield = {
    maxWidth: check ? "100%" : "400px",
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "500",
    borderRadius: "5px",
    marginTop: "20px",
    "& label.Mui-focused": {
      color: "#3E0A91",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3E0A91",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3E0A91",
      },
      "&:hover fieldset": {
        borderColor: "#3E0A91",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3E0A91",
      },
    },
    input: {
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "#3E0A91",
      },
    },
    input: {
      color: "white",
      fontSize: { xs: "12px", md: "14px" },
    },
    background: "#3E0A91",
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: 5,
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            width: "400px",
            height: "500px",
          }}
        >
          <Box
            sx={
              {
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // flexDirection: "column",
              }
            }
          >
            <TextField
              style={stylefield}
              id="standard-name"
              // value={amount}
              name="name"
              onChange={handelcontrol}
              placeholder={"Enter Your Name"}
              InputProps={{}}
              required={true}
            />

            <TextField
              style={stylefield}
              id="standard-name"
              name="lname"
              // value={amount}
              onChange={handelcontrol}
              placeholder={"Enter Last Name"}
              InputProps={{}}
              required={true}
            />
            <TextField
              style={stylefield}
              id="standard-name"
              name="lname"
              // value={amount}
              onChange={handelcontrol}
              placeholder={"Enter Father Name"}
              InputProps={{}}
              required={true}
            />
            <TextField
              style={stylefield}
              id="standard-name"
              name="lname"
              // value={amount}
              onChange={handelcontrol}
              placeholder={"Enter Bio Name"}
              InputProps={{}}
              required={true}
            />
            <TextField
              style={stylefield}
              id="standard-name"
              name="lname"
              // value={amount}
              onChange={handelcontrol}
              placeholder={"Enter Idea Name"}
              InputProps={{}}
              required={true}
            />
            <TextField
              style={stylefield}
              id="standard-name"
              name="lname"
              // value={amount}
              onChange={handelcontrol}
              placeholder={"Enter Nick Name"}
              InputProps={{}}
              required={true}
            />

            <Button
              sx={{
                px: 2,
                py: 1,
                background: "#3E0A91",
                mt: 5,
                color: "white",
              }}
              onClick={submit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Formtext;
