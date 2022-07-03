const express = require("express");
const app = express();
app.use(express.json())

const port = process.env.PORT || 4444;
const data = [
    {
        "prod_id": 1,
        "prod_name": "rice",
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/a5c1a10e-a816-47a3-94a8-3080922d5008/20a73c85-4764-466a-b18d-656e48f14de9_1234694007.jpeg?h=540&w=540",
        "price": 3.99
    },
    {
        "prod_id": 2,
        "prod_name": "pasta",
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/46d6ea28-9a3b-4e4b-8fb7-da4c622b225e/67cc6749-5dc7-4e2b-9733-d11237dcd3fb_2023111851.jpeg?h=225&w=225",
        "price": 4.99
    },
    {
        "prod_id": 3,
        "prod_name": "bisuits",
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/f9872a5e-a8a5-4e95-808d-b7c0f99c545b/b1375ab9-0b7b-40b1-908b-c136710286c9_1283583369.jpeg?h=540&w=540",
        "price": 5.99
    },
    {
        "prod_id": 4,
        "prod_name": "caffe",
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/1e9df316-3584-4128-bfab-bc034a41e94b/a44e49bc-9d91-4864-8f20-be3a8ecfc7ae_1709788943.jpeg?h=540&w=540",
        "price": 7.99
    }
]


// GET "/"
app.get("/", (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
