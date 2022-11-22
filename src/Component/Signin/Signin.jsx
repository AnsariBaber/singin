import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { url } from "../../Url copy";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const newfun = (num, ro) => {
  if (ro == 0) return num;

  for (let i = 1; i < ro; i++) {
    let elemnt = num.pop();
    num.unshift(elemnt);
  }
  return num;
};

console.log(newfun([66, 1, 22, 888], 5));

const newfun2 = (me) => {
  let a = 5;
  for (let i = 0; i < me; i++) {
    console.log(a);
  }
};

console.log(newfun2(3));

const Signin = () => {
  const [amount, setamount] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [data1, setdata1] = useState([]);
  const check = useMediaQuery("(max-width:700px)");

  // const getdata = () => {
  //   let { data } = axios.get(`${url}/signindata`);
  //   console.log(data, "akhsdgkhasdfgkl");
  //   setdata1();
  // };

  // useEffect(() => {
  //   getdata();
  // }, []);

  const handelcontrol = (e) => {
    setamount({ ...amount, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => {
    setamount({
      ...amount,
      showPassword: !amount.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      let data = await axios.post(`${url}/signindata`, {
        email: amount.email,
        password: amount.password,
      });
      console.log(data);
      alert("done");
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
    setamount({ email: " ", password: "" });
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
            Sign Up
          </Typography>
          <TextField
            autoComplete=" off"
            style={stylefield}
            id="standard-name"
            value={amount.email}
            name="email"
            onChange={handelcontrol}
            placeholder={"Enter Your Email"}
            InputProps={{}}
            required={true}
            type="email"
          />
          {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={amount.showPassword ? "text" : "password"}
              value={amount.password}
              onChange={handelcontrol}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {amount.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl> */}
          <TextField
            autoComplete=" off"
            sx={{
              mt: "30px",
            }}
            style={stylefield}
            id="standard-name"
            name="password"
            value={amount.password}
            onChange={handelcontrol}
            placeholder={"Enter Password"}
            required={true}
            // type="password"
            type={amount.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {amount.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
    </Container>
  );
};

export default Signin;
