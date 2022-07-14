const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());


app.use(express.json())
const port = process.env.PORT || 4444;


const { Pool } = require('pg');

const pool = new Pool({
    user: 'codeyourfuture',
    host: 'localhost',
    database: 'hujreh_database',
    password: 'codeyourfuture',
    port: 5432
});
//Get by id
// app.get("/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const filteredProduct = data.filter((product) => product.prod_id === id)
//     res.send(filteredProduct);
// });



app.get("/inventory", (req, res) => {
    pool.query('SELECT * FROM products')
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        })
})

app.get("/inventory/:id/products", (req, res) => {
    const id = req.params.id

    pool.query("SELECT * FROM products WHERE id = $1", [id])
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error)
            res.status(500).json(error)
        })
})

app.post("/sellers/:id/products", (req, res) => {
    const sell_id = Number(req.params.id)
    console.log(sell_id);
    const { name,
        quantity,
        description,
        country,
        price,
        cat_id,
        image
    } = req.body;
    pool.query('INSERT INTO products (name,sell_id, quantity,description,country,price,image,cat_id) VALUES ($1, $2, $3, $4, $5,$6, $7, $8) RETURNING *', [name, sell_id, quantity, description, country, price, image, cat_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Product added with ID: ${results.rows[0].id}`)
    })
})




// app.post("/", (req, res) => {
//     const { name,
//         location,
//         logo,
//         description,
//         registration_date,
//         email,
//     } = request.body
//     pool.query('INSERT INTO seller (name, location, logo ,description,registration_date,email) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *', [name, location, logo, description, registration_date, email], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(201).send(`Your profile is created with ID: ${results.rows[0].id}`)
//     })
// })

// app.post("/inventory", (req, res) => {
//     const { name,
//         location,
//         email,
//     } = request.body
//     pool.query('INSERT INTO users (name, location, email) VALUES ($1, $2, $3) RETURNING *', [name, location, email], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(201).send(`User added with ID: ${results.rows[0].id}`)
//     })
// })




app.listen(port, () => console.log(`Listening on port ${port}`));
