import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Stack,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import Select from "@mui/material/Select";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
import AddProductButton from "./AddProductButton";

// import { urlencoded } from "express";
import { useParams } from "react-router";
// import Categories from "./Categories";
const addProduct = () => {
  const [pName, setPname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [pNameError, setPnameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  // const [error, setError] = useState(null);

  const addHandler = (imgPath) => {
    console.log(imgPath);
    setImage(imgPath);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const { seller_id } = useParams();
  // useEffect(() => {
  //   fetchItem(seller_id);
  // }, [seller_id]);

  const categories = [
    { id: 1, name: "Grocery" },
    { id: 2, name: "Butchery" },
    { id: 3, name: "Bakery" },
    { id: 4, name: "Homecooked" },
    { id: 5, name: "Sweets" },
    { id: 6, name: "Sandwiches" },
    { id: 7, name: "Restaurants" },
    { id: 8, name: "Hours" },
    { id: 9, name: "Halal" },
    { id: 10, name: "Wines and Spirits" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setPname(false);
    setQuantity(false);
    setImage(false);
    setCountry(false);
    setPrice(false);
    setDescription(false);

    if (pName === "") {
      setPnameError(true);
    } else if (quantity === "") {
      setQuantityError(true);
    } else if (country === "") {
      setCountryError(true);
    } else if (image === "") {
      setImageError(true);
    } else if (price === "") {
      setPriceError(true);
    } else if (description === "") {
      setDescriptionError(true);
    }
    const newproduct = {
      name: pName,
      sell_id: Number(seller_id),
      quantity,
      description,
      country,
      price,
      cat_id: category,
      image,
    };

    console.log(newproduct.sell_id);
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/sellers/${seller_id}/inventory`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newproduct),
      }
    )
      .then((response) => {
        console.log("Success:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            style={{ margin: "20px" }}
            error={pNameError}
          />
          <TextField
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            id="outlined-required"
            label="Quantity"
            margin="dense"
            style={{ margin: "20px" }}
            error={quantityError}
          />
          <TextField
            onChange={(e) => setCountry(e.target.value)}
            required
            id="outlined-required"
            label="Country"
            margin="dense"
            style={{ margin: "20px" }}
            error={countryError}
          />
          <TextField
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            id="outlined-required"
            label="Price"
            margin="dense"
            style={{ margin: "20px" }}
            error={priceError}
          />
          <br />
          <FormControl sx={{ m: 2.5, minWidth: 125 }}>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={category}
              label="Category"
              onChange={handleChange}
            >
              {categories.map((category) => (
                <MenuItem value={category.id} key={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <br />
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              required
              id="outlined-required"
              label="Description"
              margin="dense"
              style={{ margin: "20px" }}
              multiline
              rows={4}
              error={descriptionError}
            />
          </FormControl>
          <br />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            required
            disabled
            id="outlined-required"
            label="Product Picture"
            margin="dense"
            style={{ margin: "20px" }}
            error={imageError}
          />

          <Stack direction="row" alignItems="center" spacing={2}>
            <AddProductButton addHandler={addHandler} />
          </Stack>

          <br />

          <Button variant="contained" size="medium" type="submit">
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

export default addProduct;
