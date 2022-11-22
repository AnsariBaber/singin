import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../Url copy";
import { useNavigate } from "react-router-dom";

const Codecheck = () => {
  const [amount, setamount] = useState({
    code: "",
  });
  const check = useMediaQuery("(max-width:700px)");
  const navigate = useNavigate();
  const handelcontrol = (e) => {
    setamount({ ...amount, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${url}/verifycode`, {
        code: amount.code,
      });
      if (data.success) {
        navigate("/newpass");
      }
      alert(data.message, "res");
    } catch (err) {
      alert(err.message);
    }
  };

  const stylefield = {
    maxWidth: check ? "100%" : "400px",
    width: "100%",
    fontFamily: "Roboto",
    fontWeight: "500",
    borderRadius: "5px",
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
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
              my: 3,

              color: " #F0B7A1",
              backgroundImage:
                "linear-gradient(to right, #F0B7A1 0%, #8C3310 50%, #752201 51%, #BF6E4E 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              textFillColor: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            Code Verify{" "}
          </Typography>

          <TextField
            style={stylefield}
            id="standard-name"
            // value={amount}
            name="email"
            onChange={handelcontrol}
            placeholder={"Enter New code"}
            InputProps={{}}
            required={true}
            // type="password"
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
            send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Codecheck;
