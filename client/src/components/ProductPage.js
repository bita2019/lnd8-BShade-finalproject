import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductPage({ handlesearch }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

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

  const fetchItems = async () => {
    const data = await fetch("https://hujreh.herokuapp.com/inventory");
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  console.log(searchInput);

  return (
    <Box sx={{ flexGrow: 1, margin: 20 }}>
      <Searchbar handlesearch={handlesearch} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {filtered.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card sx={{ maxWidth: 400 }}>
              <Link to={`/productpage/${item.id}`}>
                <CardMedia component="img" image={item.image} alt={item.name} />
              </Link>
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
              {/* <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductPage;
