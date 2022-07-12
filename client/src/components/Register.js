import React from "react";
import { Grid, TextField, Button, IconButton, Stack } from "@mui/material";

const Register = () => {
  return (
    <Grid>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product name"
          margin="dense"
          style={{ marginTop: "20px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          margin="dense"
          style={{ marginTop: "50px" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          margin="dense"
          style={{ marginTop: "50px" }}
        />

        <TextField
          required
          id="outlined-required"
          label="Product Picture"
          margin="dense"
          style={{ marginTop: "50px" }}
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
          </IconButton>
        </Stack>

        <TextField
          required
          id="outlined-required"
          label="Description"
          margin="dense"
          style={{ marginTop: "50px" }}
        />
      </div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" size="medium">
          Submit
        </Button>
      </Stack>
    </Grid>
  );
};

export default Register;
