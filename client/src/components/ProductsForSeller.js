import { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
// import Searchbar from "./Searchbar";

const ProductsForSeller = () => {
  const { seller_id } = useParams();

  useEffect(() => {
    fetchItem(seller_id);
  }, [seller_id]);

  const [sellerItems, setSellerItems] = useState();

  const fetchItem = async (seller_id) => {
    console.log(seller_id);
    const data = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/seller/${seller_id}/inventory`
    );
    console.log(data);
    const item = await data.json();
    console.log(item);
    setSellerItems(item);
  };
  // const [searchInput, setSearchInput] = useState("");
  // function handlesearch(value) {
  //   console.log(value);
  //   setSearchInput(value);
  // }
  // const filtered = !searchInput
  //   ? sellerItems
  //   : sellerItems.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  //         item.description.toLowerCase().includes(searchInput.toLowerCase()) ||
  //         item.country.toLowerCase().includes(searchInput.toLowerCase())
  //     );

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
      {/* <Searchbar
        handlesearch={handlesearch}
      /> */}
      <Box sx={{ flexGrow: 1 }}>
        {sellerItems && (
          <div>
            <div className="seller-logo">
              <img
                src={sellerItems.Seller.logo}
                alt={sellerItems.Seller.name}
                className="img-cover"
                width="100%"
              />
            </div>
            <h1 className="shop-info">{sellerItems.Seller.name}</h1>{" "}
            <p className="shop-info">{sellerItems.Seller.first_line_address}</p>
            <p className="shop-info">
              {sellerItems.Seller.second_line_address}
            </p>
            <p className="shop-info">{sellerItems.Seller.postcode}</p>
            <Link to="/addProduct">
              <Button
                variant="outlined"
                size="large"
                style={{
                  borderColor: "green",
                  color: "green",
                  textDecoration: "none",
                }}
              >
                ADD NEW PRODUCT
              </Button>
            </Link>
          </div>
        )}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {sellerItems &&
            sellerItems.Products.map((sellerProduct, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345, ml: 5 }}>
                  <Link
                    to={`/productpage/${sellerProduct.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={sellerProduct.image}
                      alt={sellerProduct.name}
                      style={styles.media}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        color="black"
                        marginLeft="3.9rem"
                      >
                        {sellerProduct.name}
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductsForSeller;
