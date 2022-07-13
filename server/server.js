const express = require("express");
const app = express();
app.use(express.json())
require('dotenv').config()

const cors = require("cors");
app.use(cors());

const { Pool } = require("pg");

const port = process.env.PORT || 4444;


//HEROKU DB CREDENTIALS
//postgres://oxtkkbdctjjczo:b01d249eee4e33bff06247e837e11ce2121ac279ed452b01a1ee866468cddc4e@ec2-34-248-169-69.eu-west-1.compute.amazonaws.com:5432/d5cfpib7aao768


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})


let data = [
    {
        "id": 2,
        "name": "Ben`s Original Mexican Style Microwave Rice 250G",
        "quantity": 12,
        "description": "Steamed parboiled long grain rice with jalapeno peppers and red peppers with Mexican style spices.\nVisit BensOriginal.co.uk or BensOriginal.ie to find out more.",
        "country": "Mexico",
        "price": "1.25",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/a5c1a10e-a816-47a3-94a8-3080922d5008/20a73c85-4764-466a-b18d-656e48f14de9_1234694007.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 1,
        "name": "Mister Freed Tortilla Chips Avocado & Guacamole 135G",
        "quantity": 10,
        "description": "Tortilla Chips with Avocado Tastee Delicioso Sabor Mexicano! Gently roasted for a crispy bite and generously sized to fit all your favorite dips.Veegan\nWe believe that plant-based eating will change the world, and we want our delicious snacks to lead the way.Friendlee We only use carefully selected ingredients. No added nasties!Packaged in a protective atmosphere.Source of FibreGluten-FreeNon-GMOSuitable for Vegans Pack size: 135G",
        "country": "Mexico",
        "price": "1.75",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/5a789bbb-a817-4c6f-a69b-f93ee810737f/dde5269f-7c0b-4f02-80f0-367c673192a8_1714628850.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 3,
        "name": "Old El Paso 12 Taco Shells 156G",
        "quantity": 2,
        "description": "12 Crunchy Corn Taco Shells.\nFind More Recipes Online:\nhttp://www.oldelpaso.co.uk\n©General Mills\nPreservative Free\nSuitable for Vegetarians\nPack size: 156",
        "country": "Mexico",
        "price": "1.45",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/c331319e-fd7c-404a-935b-e2b31947e666/234faba3-4de2-4c84-b58b-feaa8fdfdbf3_1693755233.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 5,
        "name": "Herdez Salsa Casera 240G",
        "quantity": 4,
        "description": "Tomato and Coriander Salsa with Chilli Peppers\nDeveloped by Herdez, a Mexican family business with over 100 years of experience making authentic Mexican food.\nTry our different flavours\nMexico`s Favourite Salsa\nChilli rating - Medium - 2\nNo artificial colours and flavourings\nSuitable for vegetarians\nPack size: 240G",
        "country": "Mexico",
        "price": "2.50",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/70df78a4-7a23-4323-92e3-ca84a6849949/83fbb33c-573b-42f1-b619-0c05de763ac2_1594057614.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 4,
        "name": "Maggi So Juicy Mexican Chicken 40G",
        "quantity": 3,
        "description": "Seasoning Mix for Mexican Chicken.\nFor other authentic & delicious meal ideas go to maggi.co.uk\nGood to remember\nPortions should be adjusted for children of different ages.\nMaggi® Juicy Mexican Chicken makes it easy to prepare a delicious Mexican Chicken meal in the oven, that the whole family will love. The delicious mix of herbs and spices including red pepper, cumin and oregano, in our special Juicy cooking bag allows your chicken* to cook until tender in its own juices. The effortless way to make a tasty Juicy Mexican Chicken meal with no mess or stress!\nTo make a 2 of your 5 a day meal, why not make your Mexican Chicken with pepper, red onion and sweetcorn rice. For the recipe visit maggi.co.uk\n*chicken not included\nA juicy chicken recipe mix with a special cooking bag\nNo need to add oil\nSweet & Spicy\nNo artificial colours, flavours or preservatives\nPack size: 40G",
        "country": "Mexico",
        "price": "0.69",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/b80d1689-5580-4047-83de-4e6863b7bfa0/8ec547f0-fdab-402b-87aa-1f4e91961c0e.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 6,
        "name": "Taylors Rich Italian Ground Coffee",
        "quantity": 5,
        "description": "Taylors Rich Italian Ground Coffee 227G\n          You can find our brew guides at taylorsofharrogate.co.uk\n  Certified Carbon Neutral® product\n  CarbonNeutral.com\n  To find out more, visit taylorsofharrogate.co.uk\n  A Family Coffee Company\n  We`re an independent, family coffee company from Yorkshire that`s been roasting the highest quality coffee for over 130 years.\n  Our family extends beyond our home in Harrogate.We work hard to improve farmers livelihoods, support communities and protect landscapes all over the world.\n  Packed in a protective atmosphere.\n  Rainforest Alliance - People & Nature, 100 % of the coffee in this product is from Rainforest Alliance Certified™ farms.For more information, visit www.rainforest - alliance.org\n  Rich Italian is a trademark of Bettys and Taylors Group Ltd.\n  Strength - 4\n  Rich & Refined\n  A rich, medium roast with hints of dark chocolate and almonds\n  Ideal for enjoying on an evening, after dinner\n  Pack size: 227G",
        "country": "Itally",
        "price": "4.00",
        "cat_id": 2,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/bd5376a7-2a7e-429e-aa8f-dc2e4abe8169/73a63992-0b37-488b-a98d-004edfdc7016_1372191263.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 7,
        "name": "Galbani Italian Burrata Cheese 150G",
        "quantity": 6,
        "description": "Fresh stretched curd cheese with cream, in brine.\nGalbani Burrata will take your love for mozzarella to the next level. Originating from the Apulia region in Southern Italy, Burrata is one of Italy`s most beloved cheeses. It is mozzarella formed into a pouch and filled with cream and ribbons of mozzarella that give it a delicious soft texture. Galbani Burrata has a mild, smooth and fresh milk flavour that makes it very versatile. Enjoy it with moist tomatoes, basil, crusty bread and a drizzle of olive oil for the ultimate Italian taste experience. You can also serve Burrata in pasta, pizza or simply have it on its own with seasoning. The best way to fully taste the flavours of Burrata is to enjoy it at an ambient temperature.\nGalbani® is Italy`s favourite cheesemaker, producing many of Italy`s most loved cheeses since 1882.\nPack size: 150G",
        "country": "Itally",
        "price": "5.75",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/c6c6f88a-2c7b-4f93-9e04-d5b8bfdf54f4/00c2ea04-4581-4704-aa88-736747ab3c32.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 8,
        "name": "Italian Ro Asted Pepper Antipasti 285G",
        "quantity": 3,
        "description": "Roasted peppers in a garlic flavoured sunflower oil marinade.\nA Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.\nA Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.\nPack size: 170G",
        "country": "Itally",
        "price": "2.60",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/d65a378c-64c1-42d9-af0f-961fad4ce2ba/c83883bf-fa60-4502-829d-3ce0e28800d1_389453040.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 9,
        "name": "Loyd Grossman Tomato & Basil Pasta Sauce 350G",
        "quantity": 8,
        "description": "Tomato & Basil Sauce\nFor recipe ideas and inspiration visit www.loydgrossmansauces.co.uk and follow us on Twitter @LoydFood\nOne of your 5 a day**\n**Half a jar serving equals 1 of your 5 a day\n\"My sauces use the right combination of carefully chosen ingredients to make sure that you always get vibrant flavour.\"\n® is a registered trademark.\nProduced under licence by The Premier Foods Group Ltd.\nA classic blend of sun ripened tomatoes and fragrant basil\nSuitable for vegetarians\nPack size: 350G",
        "country": "Itally",
        "price": "1.90",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/fffec0b3-e3cc-4ae2-a1d6-55308d2e96c7/4d00a150-b36b-4efb-b68f-cc37871c0607_252697775.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 10,
        "name": "Fage Total 0%Fat Greek Recipe Yogurt 450G",
        "quantity": 20,
        "description": "Fage Total 0%Fat Greek Recipe Yogurt 450G\nNatural Fat Free\n3g sugars, 10.3g protein, 54 kcal per 100g\nNo added sugar - Contains naturally occurring sugars\nPronounced: Fa-Yeh!\nMade with only milk and yoghurt cultures\nHigh in protein\nSource of calcium\nGluten-free\nAdditive and preservative free\nVegetarian Society Approved\nPack size: 450G",
        "country": "Grece",
        "price": "2.75",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/1bd74801-5d6e-405e-963e-c818c4395430/41b0908c-7ec5-4201-a91f-97e5e1094621.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 11,
        "name": "Oatly Greek Style Oatgurt 400G",
        "quantity": 35,
        "description": "Fermented oat product, Greek style, with added vitamins and minerals.\nSo if we wanted to incorporate geography into the name of this product, why not Oatgurt Landskrona Style? It would have been more logical, since this product was both invented and manufactured in Landskrona, Sweden. And even though this amazing stuff is used in the same way as Greek yogurt, it is far from Greek yogurt — theoretically, even further from the yogurt part than from the Greek part, since it is completely free of dairy, while the Greek city of Thessaloniki is only 2,399 kilometres from our factory in Landskrona. Of course all of this is really, really far off from what we are here to tell you about on this webpage which is that Oatgurt Greek Style has a thick, smooth and creamy texture combined with a fresh and pleasantly sour flavour. Not to brag, but this is among the best* products we have ever created, if not the best webpage copy.",
        "country": "Grece",
        "price": "2.50",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/24193c9d-99c3-440e-99dd-b6de0b9d90ea/65185b15-c6fa-47ec-8ce5-b0e39f4dbd33_1755983584.jpeg?h=540&w=540",
        "sell_id": 2
    },
    {
        "id": 12,
        "name": "Freixenet Italian Rose 20Cl",
        "quantity": 15,
        "description": "Rosé Italian Wine\nPresented in a striking cut-glass bottle, Freixenet Italian Rosé blends superior quality with stunning beauty. Using its extensive sparkling winemaking expertise, Freixenet has created the Rosé sibling to Freixenet`s widely successful Prosecco. A stand-out rosé that is perfect to make any occasion extra special.\nFreixenet Italian Rosé is a delicate blend of Glera and Pinot Noir grapes, carefully selected from the finest Italian vineyards. Light and effervescent, with notes of red berries and underlying hints of white flowers and apples.\nWine of Italy\nExtra dry\nPack size: 20CL",
        "country": "Itally",
        "price": "4.00",
        "cat_id": 2,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/7a4a9e89-1e3b-44ed-be01-40e1e6bae190/aa9e7e1b-3d8e-4493-bada-2653110ff5a4.jpeg?h=540&w=540",
        "sell_id": null
    },
    {
        "id": 13,
        "name": "Deli Kitchen 4 Greek Style Flatbreads 320G",
        "quantity": 30,
        "description": "4 Plain Flatbreads\nHere at Deli Kitchen HQ our mission is to innovate mealtimes. We start each day with a \"What If?\" and end with our customer (That`s You!). We asked What if sandwiches could be tastier, healthier, less boring? we asked `What if sandwiches could be, well, less bready?!` then we put our inventive, curious & slightly eccentric heads together and came up with a range of tasty, easy to use flatbreads. Start your day with a \"What if?\" and join us in innovating mealtimes.\nPackaged in a protective atmosphere.\nPop Me in the Freezer\nSource of Fibre\nPerfect for kebabs\nSuitable for Vegetarians\nPack size: 320G",
        "country": "Grece",
        "price": "1.50",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/29a1f18d-d049-4ad5-a0b6-3626d650fa47/9c008656-0643-4106-8dae-bb14a143ce4d.jpeg?h=540&w=540",
        "sell_id": null
    },
    {
        "id": 14,
        "name": "Vivera Veggie Greek Kebab 175G",
        "quantity": 30,
        "description": "Precooked plant-based slices made from rehydrated soya protein and seasoned with Greek kebab style herbs. This product contains added iron and vitamin B12.\nYou`ve Got the Power to Do Good\nCongrats! By choosing this product you have just done your body, the planet and animals a big favour! Want to know more about the impact of eating less meat, look on the inside of this sleeve. Enthusiastic? Then let`s inspire more people to join the Goodness Movement!\nScan or head to vivera.com for the full recipe and instructions.\nProduct packed in a protective atmosphere.\nContains 15% Protein + Vitamin B12 & Iron\nGreat Taste\nMorelife Lessmeat\nEasy Does It! Cook Me Please\n100% plant-based\nHigh in protein\nSource of iron and vitamin B12\nPrepared to a vegan recipe\nVegan Friendly\nSuitable for vegans\nPack size: 175G",
        "country": "Grece",
        "price": "2.50",
        "cat_id": 1,
        "image": "https://digitalcontent.api.tesco.com/v2/media/ghs/37e36d0c-093c-4a36-99ad-3dde9cabfd23/5641aebb-c824-40b9-8a5c-0b7ba1778b54.jpeg?h=540&w=540",
        "sell_id": null
    }
]

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

app.listen(port, () => console.log(`Listening on port ${port}`));
