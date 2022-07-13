import React, { useState } from "react";
//  import ProductDetails from "./ProductDetails";
import { Input } from "@mui/material";

const Searchbar = ({ handlesearch }) => {
  return (
    <div>
      <label for="search"> Search product or Origin country : </label>

      <Input
        placeholder="Type here ...."
        name="search"
        type="text"
        onChange={
          (e) => handlesearch(e.target.value)
          //
          // })
        }
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