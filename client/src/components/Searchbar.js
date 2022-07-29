import React from "react";
//  import ProductDetails from "./ProductDetails";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";



// passed a callback function as a prop to search component
const Searchbar = ({ handlesearch }) => {
  return (
    <div className="textfield">
      {/* <label for="search"> Search product or Origin country : </label> */}

      <TextField
        id="search-bar"
        className="text"
        onChange={
          (e) => handlesearch(e.target.value)
        }
        label="Search Products..."
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
export default Searchbar;

// if (searchTerm == "") {
//     return video;
// } else if (video.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//     return video;
// }
