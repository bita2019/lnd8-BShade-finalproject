import React from "react";

const BASEURL = "http://sellers/:id/products";

function ProductsForSeller(props) {
  return (
    <div>
      <h1>All products for seller</h1>
      {/* GET endpoint /sellers/:id/products   which returns all products for the seller id  */}
    </div>
  );
}

export default ProductsForSeller;
