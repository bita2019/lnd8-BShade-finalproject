import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

import Card from "@mui/material/Card";
import { Box, Grid, CardContent, CardMedia, Typography } from "@mui/material";

function ProductPage({ allProducts }) {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(allProducts);

  //function ProductPage({ handlesearch }) {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //  fetchItems();
  //}, []);

  const [searchInput, setSearchInput] = useState("");
  function handlesearch(value) {
    console.log(value);
    setSearchInput(value);
  }
  const filtered = !searchInput
    ? items
    : items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
          // item.information.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.country.toLowerCase().includes(searchInput.toLowerCase())
      );
  const styles = {
    media: {
      display: "block",
      maxWidth: "20ch",
      maxHeight: "100%",
      width: "auto",
      height: "auto",
      marginLeft: "5rem",
    },
  };

  return (
    <>
      <Searchbar handlesearch={handlesearch} />
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {filtered.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 400 }}>
                <Link to={`/productpage/${item.id}`}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    style={styles.media}
                  />
                </Link>
              </Card>
              <CardContent>
                <Link
                  to={`/productpage/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                </Link>
              </CardContent>
              <CardContent>
                <Link
                  to={`/productpage/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                </Link>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default ProductPage;
