import React, { useState } from "react";
//  import ProductDetails from "./ProductDetails";
import { Input, Button } from "@mui/material";

const Searchbar = ({ handlesearch }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="video-searchWraper">
      <label for="search"> Search your product : </label>

      <Input
        placeholder="Search...."
        name="search"
        type="text"
        onChange={(e) => handlesearch(e.target.value)}
      />
      <Button>This button .</Button>
    </div>
  );
};
export default Searchbar;

// if (searchTerm == "") {
//     return video;
// } else if (video.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//     return video;
// }
