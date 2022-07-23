// import { Uploader } from "uploader";

const express = require("express");
// const multer = require('multer');
// const uploader = new Uploader({
//     apiKey: "free"
// });
const app = express();
<<<<<<< HEAD
app.use(express.json());
require("dotenv").config();
=======

app.use(express.json())
require('dotenv').config();
>>>>>>> 4261aa5160c54a90c91814b6385328cfc2b7a1f8

const cors = require("cors");
app.use(cors());


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     }
// });

const { Pool } = require("pg");

const port = process.env.PORT || 4444;

console.log(
  "The fetch is happening from the database with these credentials ==> " +
    process.env.DATABASE_URL
);

const pool = new Pool({
<<<<<<< HEAD
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
=======
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// const pool = new Pool({
//     user: 'codeyourfuture',
//     host: 'localhost',
//     database: 'hujreh_database',
//     password: 'codeyourfuture',
//     port: 5432,
// })
>>>>>>> 4261aa5160c54a90c91814b6385328cfc2b7a1f8

//GET ALL INVENTORY
app.get("/inventory", (req, res) => {
  pool
    .query("SELECT * FROM products")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

//GET INVENTORY BY ID
app.get("/inventory/:id", (req, res) => {
  const id = req.params.id;
  pool
    .query("SELECT * FROM products WHERE id = $1", [id])
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

//GET INVENTORY BY SELLER ID
app.get("/seller/:id/inventory", (req, res) => {
<<<<<<< HEAD
  const id = Number(req.params.id);
  pool
    .query("SELECT * FROM products WHERE sell_id = $1", [id])
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
=======
    const id = Number(req.params.id)
    pool.query("SELECT * FROM products WHERE sell_id = $1", [id])
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error)
            res.status(500).json(error)
        })
})
// upload.single('image'),

app.post("/sellers/:id/inventory", (request, response) => {
    // const image = request.file.path;
    const sell_id = Number(request.params.id);
    const { name, quantity, description, country, price, image, cat_id } = request.body

    pool.query('INSERT INTO products (name, sell_id, quantity, description, country, price, cat_id, image) VALUES ($1, $2, $3, $4, $5,$6, $7, $8) RETURNING *', [name, sell_id, quantity, description, country, price, cat_id, image], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`product added with ID: ${results.rows[0].id}`)
    })
>>>>>>> 4261aa5160c54a90c91814b6385328cfc2b7a1f8
});

//GET ALL SELLERS AND ALL PRODUCTS FOR SELLER
app.get("/sellers", (req, res) => {
  const sellers = [];
  pool
    .query(
      `SELECT categories.name AS cat_name, seller.name AS sell_name, logo,
    first_line_address, second_line_address, postcode, products.id AS prod_id, products.name AS prod_name, products.*
    FROM seller 
    INNER JOIN products  ON products.sell_id = seller.id  
    INNER JOIN categories ON products.cat_id = categories.id`
    )
    .then((result) => {
      console.log(result);
      for (let i = 0; i < result.rows.length; i++) {
        let oneSeller = {};
        if (!sellers.some((sl) => sl.seller_id === result.rows[i].sell_id)) {
          result.rows
            .filter((row) => row.sell_id === result.rows[i].sell_id)
            .map((row, index) => {
              if (index === 0) {
                oneSeller = {
                  seller_id: row.sell_id,
                  seller_name: row.sell_name,
                  first_line_add: row.first_line_address,
                  second_line_add: row.second_line_address,
                  postcode: row.postcode,
                  sell_logo: row.logo,
                  products: [],
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
                prod_country: row.country,
              };
              oneSeller.products.push(productsForSeller);
            });
          sellers.push(oneSeller);
        }
      }

      res.json(sellers);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});
//PUT, UPDATE THE QUANTITY IN THE DATABASE AFTER PURCHASE
app.put("/purchase", (req, res) => {
  const purchases = req.body;
  purchases.forEach((purchase) => {
    pool
      .query(
        `UPDATE products SET quantity = quantity - ${purchase.quantity} WHERE products.id = ${purchase.id}`
      )
      .then((result) => res.json(result.rows))
      .catch((error) => {
        console.error(error);
        res.status(500).json(error);
      });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
