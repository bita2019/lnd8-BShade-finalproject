import React, { useState } from "react";
import { Grid, TextField, Button, Stack, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";

import AddProductButton from "./AddProductButton";

const Register = () => {
  const [pName, setPname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [counttry, setCountry] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [pNameError, setPnameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [counttryError, setCountryError] = useState(false);
  const [pictureError, setPictureError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPname(false);
    setQuantity(false);
    setPicture(false);
    setCountry(false);

    if (pName === "") {
      setPnameError(true);
    }
    if (quantity === "") {
      setQuantityError(true);
    }
    if (counttry === "") {
      setCountryError(true);
    }
    if (picture === "") {
      setPictureError(true);
    }
  };

  return (
    <Grid>
      <Typography />
      <div>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setPname(e.target.value)}
            required
            id="outlined-required"
            label="Product name"
            margin="dense"
            style={{ marginTop: "20px" }}
            error={pNameError}
          />
          <TextField
            onChange={(e) => setQuantity(e.target.value)}
            required
            id="outlined-required"
            label="Quantity"
            margin="dense"
            style={{ marginTop: "50px" }}
            error={quantityError}
          />
          <TextField
            onChange={(e) => setCountry(e.target.value)}
            required
            id="outlined-required"
            label="Country"
            margin="dense"
            style={{ marginTop: "50px" }}
            error={counttryError}
          />

          <TextField
            onChange={(e) => setPicture(e.target.value)}
            required
            id="outlined-required"
            label="Product Picture"
            margin="dense"
            style={{ marginTop: "50px" }}
            error={pictureError}
          />
          <Stack direction="row" alignItems="center" spacing={2}>
            <AddProductButton />
          </Stack>

          <TextField
            onChange={(e) => setDescription(e.target.value)}
            required
            id="outlined-required"
            label="Description"
            margin="dense"
            style={{ marginTop: "50px" }}
            multiline
            rows={4}
          />
          <br />

          <Button
            variant="contained"
            size="medium"
            type="submit"
            color="success"
          >
            Submit
          </Button>
        </form>
      </div>

      <Stack direction="row" alignItems="center" spacing={2}>
        {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          
        </Button> */}
      </Stack>
    </Grid>
  );
};

export default Register;
