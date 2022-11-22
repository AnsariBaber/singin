import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = useSelector((state) => state.card);
  console.log(item);

  return (
    <Box style={{ marginBottom: "50px" }} sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Link to="/card">
          <Typography mr={4}>Home</Typography>
        </Link>
        <Link to="/Carddetail">
          <Typography>CardDetials</Typography>
        </Link>

        <Box
          sx={{
            fontSize: "26px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Items : {item?.length}
        </Box>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            fontSize: "26px",
            fontWeight: "bold",
            cursor: "pointer",
            mt: 5,
            mr: 4,
          }}
        >
          Items : {item?.length}
        </Box>
      </Box> */}
    </Box>
  );
};

export default Navbar;
