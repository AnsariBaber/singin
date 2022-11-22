import { useState } from "react";
import React, { useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { add } from "../../store/cardSlice";
import { useDispatch } from "react-redux";

const Card = () => {
  const [data, setdata] = useState([]);

  const dispatch = useDispatch();

  const cardData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    console.log(data);
    setdata(data);
  };
  useEffect(() => {
    cardData();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <Box>
      <Container>
        <Box>Card</Box>
        <Grid container spacing={2} justifyContent="center">
          {data?.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Box
                  height="100%"
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={product.image}
                    alt=""
                    width="200px"
                    height="300px"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>Price</Typography>
                    <Typography>${product.price}</Typography>
                  </Box>
                  <Button onClick={() => handleAdd(product)}>
                    {" "}
                    Add to Card
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Card;
