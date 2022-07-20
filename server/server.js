const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config()

const cors = require("cors");
app.use(cors());

const { Pool } = require("pg");

const port = process.env.PORT || 4444;

console.log("The fetch is happening from the database with these credentials ==> " + process.env.DATABASE_URL)

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})


// //Get inventory
// app.get("/inventory", (req, res) => {
//     res.send(data)
// })

// //Get by id
// app.get("/inventory/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const filteredProduct = data.filter((product) => product.id === id)
//     res.send(filteredProduct);
// });
// //Get products by seller id
// app.get("/seller/:id/inventory", (req, res) => {
//     const id = Number(req.params.id);
//     const sellerProducts = data.filter((product) => product.sell_id === id);
//     res.send(sellerProducts)
// })

//GET ALL INVENTORY
app.get("/inventory", (req, res) => {
    pool.query('SELECT * FROM products')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

//GET INVENTORY BY ID
app.get("/inventory/:id", (req, res) => {
    const id = req.params.id
    pool.query("SELECT * FROM products WHERE id = $1", [id])
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

//GET INVENTORY BY SELLER ID 
app.get("/seller/:id/inventory", (req, res) => {
    const id = Number(req.params.id)
    pool.query("SELECT * FROM products WHERE sell_id = $1", [id])
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error)
            res.status(500).json(error)
        })
})

//GET ALL SELLERS AND ALL PRODUCTS FOR SELLER 
app.get("/sellers", (req, res) => {
    const sellers = [];
    pool.query(
        `SELECT categories.name AS cat_name, seller.name AS sell_name, logo,
    first_line_address, second_line_address, postcode, products.id AS prod_id, products.name AS prod_name, products.*
    FROM seller 
    INNER JOIN products  ON products.sell_id = seller.id  
    INNER JOIN categories ON products.cat_id = categories.id`)
        .then((result) => {
            console.log(result)
            for (let i = 0; i < result.rows.length; i++) {
                let oneSeller = {};
                if (!(sellers.some(sl => sl.seller_id === result.rows[i].sell_id))) {
                    result.rows.filter(row => row.sell_id === result.rows[i].sell_id)
                        .map((row, index) => {
                            if (index === 0) {
                                oneSeller = {
                                    seller_id: row.sell_id,
                                    seller_name: row.sell_name,
                                    first_line_add: row.first_line_address,
                                    second_line_add: row.second_line_address,
                                    postcode: row.postcode,
                                    sell_logo: row.logo,
                                    products: []
                                };
                            }
                            const productsForSeller = {
                                prod_id: row.prod_id,
                                prod_name: row.prod_name,
                                prod_desc: row.description,
                                prod_info: row.information,
                                prod_allergy: row.allergy_information,
                                prod_storage: row.storage,
                                prod_cat: row.cat_name,
                                prod_country: row.country
                            };
                            oneSeller.products.push(productsForSeller)
                        })
                    sellers.push(oneSeller)
                }
            }

            res.json(sellers)
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json(error)
        })
})
//PUT, UPDATE THE QUANTITY IN THE DATABASE AFTER PURCHASE 
// app.put("/purchase",(req,res)=>{
//     const purchases = req.body;
//     purchases.forEach(purchase => {
//         pool.query('UPDATE products SET quantity = quantity - purchase.quantity WHERE products.id = purchase.id')
//             .then((result) => res.json(result.rows))
//             .catch((error) => {
//                 console.error(error)
//                 res.status(500).json(error)
//             })  
//     });
   
// })

app.listen(port, () => console.log(`Listening on port ${port}`));
