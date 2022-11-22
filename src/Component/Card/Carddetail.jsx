import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cardSlice";

const Carddetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.card);

  const RemoveItems = (productid) => {
    dispatch(remove(productid));
  };

  return (
    <Box>
      {product?.map((product) => {
        return (
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
              background: "gray",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <img src={product.image} alt="" width="200px" height="190px" />
            <Box>
              <Typography color="black" fontWeight="bold">
                {product.title}{" "}
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="bold" color="white">
                ${product.price}{" "}
              </Typography>
            </Box>
            <Button
              onClick={() => {
                RemoveItems(product.id);
              }}
              sx={{ background: "black", color: "white", mr: 2 }}
            >
              {" "}
              Remove
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Carddetail;
