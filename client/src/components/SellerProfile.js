// import React , {useEffect,useState} from 'react';

import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Box } from "@mui/material/Box";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function SellerProfile() {
  return (
    <>
      <h3>Seller Profile :</h3>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Button sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src="/static/images/grid/complex.jpg" />
            </Button>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Product Name
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {/* Full resolution 1920x1080 • JPEG */}
                  Description
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                Price : £1.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
