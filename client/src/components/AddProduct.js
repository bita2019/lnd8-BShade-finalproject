import React, { useState } from "react";
import { Grid, TextField, Button, Stack, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
import AddProductButton from "./AddProductButton";
// import { urlencoded } from "express";

const AddProduct = () => {
  const [pName, setPname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pNameError, setPnameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [error, setError] = useState();
  // const [error, setError] = useState(null);

  const addHandler = (imgPath) => {
    console.log(imgPath);
    setImage(imgPath);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPname(false);
    setQuantity(false);
    setImage(false);
    setCountry(false);
    setPrice(false);

    if (pName === "") {
      setPnameError(true);
    }
    if (quantity === "") {
      setQuantityError(true);
    }
    if (country === "") {
      setCountryError(true);
    }
    if (image === "") {
      setImageError(true);
    }
    if (price === "") {
      setPriceError(true);
    }
    const newProduct = {
      // name,

      quantity,
      description,
      country,
      price,
      image,
    };
    //url should be sellers/:seller_id/add-product //// <Route path="sellers/:sellerId/add-product">
    // fetch(`http://localhost:4444/seller/${sellerId}/inventory`, {
    //   method: "POST",
    //   body: JSON.stringify(newProduct),
    //   headers: {
    //     "Content-Type ": "application/json",
    //   },
    // }).then((res) => {
    //   const json = res.json();

    //   if (!res.ok) {
    //     setError(json.error);
    //   }
    //   if (res.ok) {
    //     setPname("");
    //     setQuantity("");
    //     setPrice("");
    //     setCountry("");
    //     setDescription("");
    //     setImage("");
    //     setError(null);
    //     console.log("New Product Added!", json);
    //   }
    // });
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
            error={countryError}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            required
            id="outlined-required"
            label="Price"
            margin="dense"
            style={{ marginTop: "50px" }}
            error={priceError}
          />

          <TextField
            onChange={(e) => setImage(e.target.value)}
            required
            id="outlined-required"
            label="Product Picture"
            margin="dense"
            style={{ marginTop: "50px" }}
            error={imageError}
          />
          <Stack direction="row" alignItems="center" spacing={2}>
            <AddProductButton addHandler={addHandler} />
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

          <Button variant="contained" size="medium" type="submit">
            Submit
          </Button>
          {error && <div class="error">{error}</div>}
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

export default AddProduct;
