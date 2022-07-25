drop table if exists users;

drop table if exists products;

drop table if exists seller;

drop table if exists categories;

CREATE TABLE categories(id SERIAL PRIMARY KEY, name VARCHAR(50));

CREATE TABLE seller(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  first_line_address VARCHAR(100) NOT NULL,
  second_line_address VARCHAR(50) NOT NULL,
  postcode VARCHAR(25) NOT NULL,
  logo VARCHAR(1000) NOT NULL,
  description TEXT,
  registration_date timestamp default CURRENT_TIMESTAMP,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  sell_id INT REFERENCES seller(id),
  quantity INT NOT NULL,
  description TEXT,
  information TEXT,
  allergy_information TEXT,
  storage TEXT,
  country VARCHAR(50),
  price DECIMAL NOT NULL,
  cat_id INT REFERENCES categories(id),
  image VARCHAR(500) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL
);

INSERT INTO
  categories(name)
VALUES
  ('Grocery'),
  ('Butchery'),
  ('Bakery'),
  ('Homecooked'),
  ('Sweets'),
  ('Sandwiches'),
  ('Restaurants'),
  ('24 - Hour Service'),
  ('Halal'),
  ('Wines and Spirits');

INSERT INTO
  seller (
    name,
    first_line_address,
    second_line_address,
    postcode,
    logo,
    description,
    email
  )
VALUES
  (
    'Best Shop',
    '12 Woodridings Close',
    'Hatch End',
    'HA4 8KJ',
    'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1040%2C750%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F07%2F06%2Fimpulse-buying-2000.jpg',
    'history/desc',
    'bestshop@gmail.ac.uk'
  ),
  (
    'B.W.Supermarket',
    '12 Uxbridge Road',
    'Wembly Central',
    'HG4 2LJ',
    'http://www.bestwaysupermarket.com/images/07.jpg',
    'history/desc',
    'wb.supermarket@gmail.ac.uk'
  ),
  (
    'Home cooked goodness',
    '23 Mandelae Street',
    'Barking',
    'RT4 9DJ',
    'https://i2-prod.liverpoolecho.co.uk/incoming/article15204090.ece/ALTERNATES/s615/0_LEC_EKR_260918_HOMECOOKED-1.jpg',
    'history/desc',
    '@gmail.ac.uk'
  ),
  (
    'Fresh Store',
    '20 Wibmledon Street',
    'Watford',
    'JL4 2HS',
    'https://res.cloudinary.com/mommy-nearest/image/upload/c_crop,h_800,w_1800,x_0,y_675/c_scale,f_auto,fl_lossy,q_75,w_848/pyoluqa7wayuecdihqyx',
    'history/desc',
    'fresh.store@gmail.ac.uk'
  ),
  (
    'Seafood African Shop',
    '2 Sidney Road',
    'Harrow',
    'KU4 9SI',
    'https://lh5.googleusercontent.com/p/AF1QipMFgQMQRDz-5BKfyKh78RX3Dn4UB669MfrRvXBm=w408-h306-k-no',
    'history/desc',
    'fresh.store@gmail.ac.uk'
  ),
  (
    'Tehran Supermarket',
    '30 Vivian Ave',
    'London',
    'NW4 3XP',
    'https://www.expatica.com/app/uploads/sites/10/2020/04/supermarkets-in-the-uk.jpg',
    'history/desc',
    'tehran.store@gmail.ac.uk'
  ),
  (
    'Comptoir Libanais',
    '65 Wigmore Street Marylebone',
    'London',
    'NW4 3XP',
    'https://s3-media0.fl.yelpcdn.com/bphoto/BRX9j__aWkPxUHLEg-damg/o.jpg',
    'history/desc',
    'comptoir.libanais.store@gmail.ac.uk'
  ),
  (
    'Afghan Bazaar',
    '65 Burnt Oak',
    'Edgware',
    'HA8 0BB',
    'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Kroger_produce_department-coronavirus_measures.jpg?itok=tWbSdrmN',
    'history/desc',
    'afgan.bazaar.libanais.store@gmail.ac.uk'
  ),
  (
    'Joshuas',
    '10 Oak',
    'Stanmore',
    'HS8 7DL',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp2LvCJntL5GNh0xmzajm6wHMyqjz4ivspg&usqp=CAU',
    'history/desc',
    'joshuas.store@gmail.ac.uk'
  ),
  (
    'Umrah',
    '31 Westbook Drive',
    'Orpington',
    'FA2 9UG',
    'https://i2-prod.leicestermercury.co.uk/incoming/article6444351.ece/ALTERNATES/s1200c/0_umrah.jpg',
    'history/desc',
    'umrah.store@gmail.ac.uk'
  );

INSERT INTO
  products (
    name,
    sell_id,
    quantity,
    description,
    information,
    allergy_information,
    storage,
    country,
    price,
    image,
    cat_id
  )
VALUES
  (
    'Mister Freed Tortilla Chips Avocado & Guacamole 135G',
    1,
    10,
    'Tortilla Chips with Avocado Tastee Delicioso Sabor Mexicano! Gently roasted for a crispy bite and generously sized to fit all your favorite dips.Veegan.
    We believe that plant-based eating will change the world, and we want our delicious snacks to lead the way.Friendlee We only use carefully selected ingredients. No added nasties!Packaged in a protective atmosphere.Source of FibreGluten-FreeNon-GMOSuitable for Vegans Pack size: 135G',
    'Corn (70 %),
Sunflower Oil
and Aroma with Avocado Flavor (6 %) (
  Rice Flour,
  Salt,
  Spices,
  Flavouring,
  Sugar,
  Acid (Citric Acid),
  Dehydrated Onion,
  Dehydrated Garlic,
  Colour (
    Copper Complexes of Chlorophylls
    and Chlorophyllins
  ),
  Freeze Dried Avocado Powder (0.04 %)
  and Starch
)',
    'May contain traces of Milk',
    'Best before: see front of packStore in a cool dry place.',
    'Iran',
    1.75,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/5a789bbb-a817-4c6f-a69b-f93ee810737f/dde5269f-7c0b-4f02-80f0-367c673192a8_1714628850.jpeg?h=540&w=540',
    1
  ),
  (
    'Ben`s Original Mexican Style Microwave Rice 250G',
    2,
    12,
    'Steamed parboiled long grain rice with jalapeno peppers and red peppers with Mexican style spices.
Visit BensOriginal.co.uk or BensOriginal.ie to find out more.',
    'Steamed Parboiled Long Grain Rice (86 %),
Red Pepper (5.9 %),
Tomato Paste,
Sunflower Oil,
Natural Flavouring,
Spices,
Jalapeno Pepper,
Salt,
Onion Powder,
Yeast Extract,
Acid (Citric Acid),
Garlic Powder',
    '',
    'Store in a dry place at room temperature.Once opened refrigerate unheated rice for up to 3 days.',
    'Iran',
    1.25,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/a5c1a10e-a816-47a3-94a8-3080922d5008/20a73c85-4764-466a-b18d-656e48f14de9_1234694007.jpeg?h=240&w=240',
    1
  ),
  (
    'Old El Paso 12 Taco Shells 156G',
    2,
    2,
    '12 Crunchy Corn Taco Shells.
Find More Recipes Online:
http://www.oldelpaso.co.uk
©General Mills
Preservative Free
Suitable for Vegetarians
Pack size: 156',
    'infCorn Flour,
High Oleic Sunflower Oil (25 %)o',
    'May contain Wheat.',
    'Store in a cool,
dry place.',
    'Afganistan',
    1.45,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c331319e-fd7c-404a-935b-e2b31947e666/234faba3-4de2-4c84-b58b-feaa8fdfdbf3_1693755233.jpeg?h=540&w=540',
    1
  ),
  (
    'Maggi So Juicy Chicken 40G',
    2,
    3,
    'Seasoning Mix for Mexican Chicken.
For other authentic & delicious meal ideas go to maggi.co.uk
Good to remember
Portions should be adjusted for children of different ages.
Maggi® Juicy Mexican Chicken makes it easy to prepare a delicious Mexican Chicken meal in the oven, that the whole family will love. The delicious mix of herbs and spices including red pepper, cumin and oregano, in our special Juicy cooking bag allows your chicken to cook until tender in its own juices. The effortless way to make a tasty Juicy Mexican Chicken meal with no mess or stress!
To make a 2 of your 5 a day meal, why not make your Mexican Chicken with pepper, red onion and sweetcorn rice. For the recipe visit maggi.co.uk
chicken not included
A juicy chicken recipe mix with a special cooking bag
No need to add oil
Sweet & Spicy
No artificial colours, flavours or preservatives
Pack size: 40G',
    'Vegetables (Potato, Tomato, Onion),
Corn Starch,
Salt,
Herbs
and Spices (
  Paprika,
  Coriander,
  Cumin (1.7 %),
  Oregano (1.5 %),
  Black Pepper,
  Parsley,
  Ginger,
  Jalapeno Chilli Pepper,
  Cinnamon,
  Red Cayenne Pepper (0.2 %)
),
Garlic,
Smoked Pork Fat,
Flavouring,
Lemon Juice Concentrate,
Yeast Extract',
    'May contain Gluten,
Egg,
Milk,
Soya,
Celery
and Mustard',
    'Store in a cool,
dry place',
    'Iran',
    0.69,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/b80d1689-5580-4047-83de-4e6863b7bfa0/8ec547f0-fdab-402b-87aa-1f4e91961c0e.jpeg?h=540&w=540',
    1
  ),
  (
    'Herdez Salsa Casera 240G',
    1,
    4,
    'Tomato and Coriander Salsa with Chilli Peppers
Developed by Herdez, a Mexican family business with over 100 years of experience making authentic Mexican food.
Try our different flavours
Mexico`s Favourite Salsa
Chilli rating - Medium - 2
No artificial colours and flavourings
Suitable for vegetarians
Pack size: 240G',
    'Tomatoes (82 %),
Onion,
Chilli Peppers (2.5 %),
Iodized Salt (Salt, Potassium Iodate),
Coriander,
Acidity Regulator: Citric Acid,
Firming Agent: Calcium Chloride',
    '',
    'Store in a cool,
dry place out of direct sunlight.Once opened,
keep refrigerated
and consume within 5 days.Best before
end: see cap.',
    'Lebanon',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/70df78a4-7a23-4323-92e3-ca84a6849949/83fbb33c-573b-42f1-b619-0c05de763ac2_1594057614.jpeg?h=540&w=540',
    1
  ),
  (
    'Taylors Rich Ground Coffee',
    4,
    5,
    'Taylors Rich Italian Ground Coffee 227G
          You can find our brew guides at taylorsofharrogate.co.uk
  Certified Carbon Neutral® product
  CarbonNeutral.com
  To find out more, visit taylorsofharrogate.co.uk
  A Family Coffee Company
  We`re an independent, family coffee company from Yorkshire that`s been roasting the highest quality coffee for over 130 years.
  Our family extends beyond our home in Harrogate.We work hard to improve farmers livelihoods, support communities and protect landscapes all over the world.
  Packed in a protective atmosphere.
  Rainforest Alliance - People & Nature, 100 % of the coffee in this product is from Rainforest Alliance Certified™ farms.For more information, visit www.rainforest - alliance.org
  Rich Italian is a trademark of Bettys and Taylors Group Ltd.
  Strength - 4
  Rich & Refined
  A rich, medium roast with hints of dark chocolate and almonds
  Ideal for enjoying on an evening, after dinner
  Pack size: 227G',
    'Arabica Coffee (100 %)',
    '',
    'Once opened,
seal with a clip
and store in a cool,
dry place for up to 2 weeks.',
    'Turkey',
    4.00,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/bd5376a7-2a7e-429e-aa8f-dc2e4abe8169/73a63992-0b37-488b-a98d-004edfdc7016_1372191263.jpeg?h=540&w=540',
    1
  ),
  (
    'Galbani Burrata Cheese 150G',
    4,
    6,
    'Fresh stretched curd cheese with cream, in brine.
Galbani Burrata will take your love for mozzarella to the next level. Originating from the Apulia region in Southern Italy, Burrata is one of Italy`s most beloved cheeses. It is mozzarella formed into a pouch and filled with cream and ribbons of mozzarella that give it a delicious soft texture. Galbani Burrata has a mild, smooth and fresh milk flavour that makes it very versatile. Enjoy it with moist tomatoes, basil, crusty bread and a drizzle of olive oil for the ultimate Italian taste experience. You can also serve Burrata in pasta, pizza or simply have it on its own with seasoning. The best way to fully taste the flavours of Burrata is to enjoy it at an ambient temperature.
Galbani® is Italy`s favourite cheesemaker, producing many of Italy`s most loved cheeses since 1882.
Pack size: 150G',
    'Pasteurised Milk,
UHT Cream (Milk) 41 %,
Acidity Regulator (Lactic Acid),
Salt,
Rennet',
    'Contains: Milk',
    'Use by: see lid.Keep refrigerated: + 4 ° C / + 8 ° C',
    'Iran',
    5.75,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c6c6f88a-2c7b-4f93-9e04-d5b8bfdf54f4/00c2ea04-4581-4704-aa88-736747ab3c32.jpeg?h=540&w=540',
    1
  ),
  (
    'Ro Asted Pepper Antipasti 285G',
    4,
    3,
    'Roasted peppers in a garlic flavoured sunflower oil marinade.
A Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.
A Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.
Pack size: 170G',
    'INGREDIENTS: Roasted Red
and Yellow Peppers,
Sunflower Oil,
Sugar,
White Wine Vinegar,
Sea Salt,
Garlic Powder,
Colour (Paprika Extract),
Acidity Regulators (Citric Acid, Lactic Acid),
Antioxidant (Ascorbic Acid).',
    '',
    'Store in a cool,
dry place.Once opened,
keep refrigerated
and consume within 2 weeks
and by date shown.',
    'Turkey',
    2.60,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/d65a378c-64c1-42d9-af0f-961fad4ce2ba/c83883bf-fa60-4502-829d-3ce0e28800d1_389453040.jpeg?h=540&w=540',
    1
  ),
  (
    'Freixenet Rose 20Cl',
    4,
    15,
    'Rosé Italian Wine
Presented in a striking cut-glass bottle, Freixenet Italian Rosé blends superior quality with stunning beauty. Using its extensive sparkling winemaking expertise, Freixenet has created the Rosé sibling to Freixenet`s widely successful Prosecco. A stand-out rosé that is perfect to make any occasion extra special.
Freixenet Italian Rosé is a delicate blend of Glera and Pinot Noir grapes, carefully selected from the finest Italian vineyards. Light and effervescent, with notes of red berries and underlying hints of white flowers and apples.
Wine of Italy
Extra dry
Pack size: 20CL',
    'Contains Sulphites',
    '',
    'Keep it in a cool
and dry place away
from
  light.',
    'Afganistan',
    4.00,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/7a4a9e89-1e3b-44ed-be01-40e1e6bae190/aa9e7e1b-3d8e-4493-bada-2653110ff5a4.jpeg?h=540&w=540',
    10
  ),
  (
    'Loyd Grossman Tomato & Basil Pasta Sauce 350G',
    1,
    8,
    'Tomato & Basil Sauce
For recipe ideas and inspiration visit www.loydgrossmansauces.co.uk and follow us on Twitter @LoydFood
One of your 5 a day**
**Half a jar serving equals 1 of your 5 a day
"My sauces use the right combination of carefully chosen ingredients to make sure that you always get vibrant flavour."
® is a registered trademark.
Produced under licence by The Premier Foods Group Ltd.
A classic blend of sun ripened tomatoes and fragrant basil
Suitable for vegetarians
Pack size: 350G',
    'Tomatoes (59 %),
Tomato Purée,
Garlic Purée,
Basil (2.5 %),
Sugar,
Sunflower Oil,
Extra Virgin Olive Oil,
Sea Salt,
Concentrated Lemon Juice,
Ground Black Pepper',
    'May contain Nuts',
    'Store in a cool,
dry place.Once opened,
refrigerate
and use within 3 days.Best Before
End: See neck of jar',
    'Lebanon',
    1.90,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/fffec0b3-e3cc-4ae2-a1d6-55308d2e96c7/4d00a150-b36b-4efb-b68f-cc37871c0607_252697775.jpeg?h=540&w=540',
    1
  ),
  (
    'Fage Total 0%Fat Yogurt 450G',
    2,
    20,
    'Fage Total 0%Fat Greek Recipe Yogurt 450G
Natural Fat Free
3g sugars, 10.3g protein, 54 kcal per 100g
No added sugar - Contains naturally occurring sugars
Pronounced: Fa-Yeh!
Made with only milk and yoghurt cultures
High in protein
Source of calcium
Gluten-free
Additive and preservative free
Vegetarian Society Approved
Pack size: 450G',
    'Pasteurised Skimmed Milk,
Live Active Yoghurt Cultures (
  L.Bulgaricus,
  S.Thermophilus,
  L.Acidophilus,
  Bifidus,
  L.Casei
)',
    'Contains: Milk',
    'Keep Refrigerated / Do Not Freeze / Use By: See LidOnce Opened Consume within 5 Days',
    'Turkey',
    '2.75',
    'https://digitalcontent.api.tesco.com/v2/media/ghs/1bd74801-5d6e-405e-963e-c818c4395430/41b0908c-7ec5-4201-a91f-97e5e1094621.jpeg?h=540&w=540',
    1
  ),
  (
    'Deli Kitchen 4 Flatbreads 320G',
    1,
    30,
    '4 Plain Flatbreads
Here at Deli Kitchen HQ our mission is to innovate mealtimes. We start each day with a "What If?" and end with our customer (That`s You!). We asked What if sandwiches could be tastier, healthier, less boring? we asked `What if sandwiches could be, well, less bready?!` then we put our inventive, curious & slightly eccentric heads together and came up with a range of tasty, easy to use flatbreads. Start your day with a "What if?" and join us in innovating mealtimes.
Packaged in a protective atmosphere.
Pop Me in the Freezer
Source of Fibre
Perfect for kebabs
Suitable for Vegetarians
Pack size: 320G',
    'Wheat Flour (
  Wheat Flour,
  Calcium Carbonate,
  Niacin,
  Iron,
  Thiamin
),
Water,
Rapeseed Oil,
Wheat Gluten,
Wheat Fibre,
Spirit Vinegar,
Yeast,
Preservatives (Potassium Sorbate, Calcium Propionate),
Raising Agents (
  Disodium,
  Diphosphate,
  Sodium Hydrogen Carbonate,
  Calcium Phosphate
),
Salt,
Stabiliser (Sodium Carboxymethyl Cellulose),
Acidity Regulator (Citric Acid),
Wheat Starch,
Wheat Flour',
    'May contain Milk.For allergens,
including Cereals containing Gluten,
see ingredients in bold.',
    'For Best Before: see back of pack.How to Store: Store in a cool,
dry place.Once opened,
consume within 24 hours.Freeze me: Suitable for home freezing.ideally freeze as soon as possible
after
  purchase but always by `best before` date shown.Use within one month.',
    'Iraq',
    1.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/29a1f18d-d049-4ad5-a0b6-3626d650fa47/9c008656-0643-4106-8dae-bb14a143ce4d.jpeg?h=540&w=540',
    1
  ),
  (
    'Vivera Veggie Kebab 175G',
    2,
    30,
    'Precooked plant-based slices made from rehydrated soya protein and seasoned with Greek kebab style herbs. This product contains added iron and vitamin B12.
You`ve Got the Power to Do Good
Congrats! By choosing this product you have just done your body, the planet and animals a big favour! Want to know more about the impact of eating less meat, look on the inside of this sleeve. Enthusiastic? Then let`s inspire more people to join the Goodness Movement!
Scan or head to vivera.com for the full recipe and instructions.
Product packed in a protective atmosphere.
Contains 15% Protein + Vitamin B12 & Iron
Great Taste
Morelife Lessmeat
Easy Does It! Cook Me Please
100% plant-based
High in protein
Source of iron and vitamin B12
Prepared to a vegan recipe
Vegan Friendly
Suitable for vegans
Pack size: 175G',
    'Rehydrated Soya Protein [85%],
Vegetable Oils [Rapeseed Oil, Sunflower Oil],
Vinegar,
Natural Flavourings,
Salt,
Herbs
and Spices,
Onion,
Sea Salt,
Water,
Garlic,
Paprika Concentrate,
Maltodextrin,
Vitamins
and Minerals [Vitamin B12, Iron]',
    'Allergen statement: please see ingredients in Bold.',
    'Keep refrigeated below 5 ° C.For use by date see front of pack.Do not exceed use by date.Once opened keep refrigerated
and use within 2 days.Suitable for home freezing.Once frozen use within 1 month.',
    'Iran',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/37e36d0c-093c-4a36-99ad-3dde9cabfd23/5641aebb-c824-40b9-8a5c-0b7ba1778b54.jpeg?h=540&w=540',
    1
  ),
  (
    'Oatly Oatgurt 400G',
    4,
    35,
    'Fermented oat product, Greek style, with added vitamins and minerals.
So if we wanted to incorporate geography into the name of this product, why not Oatgurt Landskrona Style? It would have been more logical, since this product was both invented and manufactured in Landskrona, Sweden. And even though this amazing stuff is used in the same way as Greek yogurt, it is far from Greek yogurt — theoretically, even further from the yogurt part than from the Greek part, since it is completely free of dairy, while the Greek city of Thessaloniki is only 2,399 kilometres from our factory in Landskrona. Of course all of this is really, really far off from what we are here to tell you about on this webpage which is that Oatgurt Greek Style has a thick, smooth and creamy texture combined with a fresh and pleasantly sour flavour. Not to brag, but this is among the best* products we have ever created, if not the best webpage copy.',
    'Water,
Oats 11 %,
Rapeseed Oil,
Potato Starch,
Potato Protein,
Acids (Malic Acid, Lactic Acid),
Stabiliser (Pectin),
Minerals (
  Calcium Carbonate,
  Calcium Phosphate,
  Potassium Iodide
),
Salt,
Vitamins (D2, B12)',
    'Free From: Milk,
     Soya Contains: Oats',
    'Keep refrigerated.Best before: See top of pack.Once opened consume within 5 days.',
    'Iraq',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/24193c9d-99c3-440e-99dd-b6de0b9d90ea/65185b15-c6fa-47ec-8ce5-b0e39f4dbd33_1755983584.jpeg?h=540&w=540',
    1
  ),
  (
    'Smoked Ham & Cheddar Sandwich',
    1,
    15,
    'Smoked ham formed
from
  selected cuts of pork leg,
  mature Cheddar cheese
  and mayonnaise in malted bread.BEECHWOOD SMOKED HAM Our chefs recipe layers slices of beechwood smoked ham with mature Cheddar and mayonnaise. Carefully hand packed every day.
BEECHWOOD SMOKED HAM Our chefs recipe layers slices of beechwood smoked ham with mature Cheddar
  and mayonnaise.Carefully hand packed every day.',
    'INGREDIENTS: Wheat Flour [Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin],
Smoked Formed Ham (23 %) [Pork, Salt, Dextrose, Stabiliser (Sodium Triphosphate), Antioxidant (Sodium Ascorbate), Preservative (Sodium Nitrite)],
Water,
Medium Mature Cheddar Cheese (Milk) (17 %),
Malted Wheat Flakes,
Rapeseed Oil,
Wheat Bran,
Cornflour,
Wheat Gluten,
Salt,
White Wine Vinegar,
Yeast,
Pasteurised Egg Yolk,
Malted Barley Flour,
Emulsifiers (
  Mono -
  and Di - Glycerides of Fatty Acids,
  Mono -
  and Di - Acetyl Tartaric Acid Esters of Mono -
  and Di - Glycerides of Fatty Acids
),
Spirit Vinegar,
Malted Wheat Flour,
Mustard Flour,
Flour Treatment Agent (Ascorbic Acid),
Palm Oil.',
    'For allergens,
including cereals containing gluten,
see ingredients in bold.',
    'Keep refrigerated.',
    'Iran',
    1.30,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/ecb0b465-a954-4130-a331-417cbad08823/436282ed-b10f-4fbd-b134-98a70fd7d7af.jpeg?h=540&w=540',
    6
  ),
  (
    'Butcher`s Choice Chicken Portions 2Kg',
    1,
    10,
    'Frozen Class A skin - on chicken drumsticks
and thighs.100 % British Chicken A mixture of frozen Class A chicken thigh
and drumstick portions.Use in tasty traybake: arrange the chicken in a roasting tin with your favourite vegetables,
drizzle with oil
and then oven bake until the chicken is cooked through.100 % British Chicken A mixture of frozen Class A chicken thigh
and drumstick portions.Use in tasty traybake: arrange the chicken in a roasting tin with your favourite vegetables,
drizzle with oil
and then oven bake until the chicken is cooked through.Pack size: 2KG',
    'INGREDIENTS: Chicken Drumstick,
Chicken Thigh.',
    '',
    'For best results cook
from
  frozen.Defrost thoroughly for a minimum of 8 -12 hours hours in the fridge.Once defrosted use within 24 hours
  and do not refreeze.Follow the preparation guidelines above.Keep frozen at - 18C
  or cooler.Important: If food has thawed,
  do not refreeze.',
    'Turkey',
    3.60,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/901866b3-c212-4f53-a677-9b6e804c510b/8d4f84f4-751f-417b-ac8d-a24d1cb5a6f1.jpeg?h=540&w=540',
    2
  ),
  (
    'Butcher`s Choice 20 Pork Sausages 907G',
    4,
    7,
    'Pork sausages.Expertly seasoned Expertly seasoned Cook
from
  frozen Pack size: 907G',
    'INGREDIENTS: Pork (42 %),
Water,
Wheat Flour (
  Wheat Flour,
  Calcium Carbonate,
  Iron,
  Niacin,
  Thiamin
),
Pork Fat,
Pork Rind,
Salt,
Dextrose,
Stabiliser (Disodium Diphosphate),
Preservative (Sodium Metabisulphite),
Acidity Regulator (Sodium Citrate),
Antioxidant (Ascorbic Acid),
Pepper Extract,
Mace Extract,
Chilli Extract,
Pimento Extract,
Coriander Extract,
Flavouring,
Sage Extract.Filled into non - UK beef collagen casing.',
    'For allergens,
including cereals containing gluten,
see ingredients in bold.',
    'Keep frozen at - 18C
or cooler.Important: If food has thawed,
do not refreeze.',
    'Afganistan',
    1.25,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/834ff843-61be-40b1-9f43-577746a1a285/dc5b28db-0d58-4287-b886-88ce0a2c0540.jpeg?h=540&w=540',
    2
  ),
  (
    'Three Cheese Bread',
    2,
    20,
    'Stone baked loaf made with red Leicester,
red Cheddar,
and Mozzarella full fat soft cheese Our three cheese bloomer is made with Red Leicester,
Cheddar
and Mozzarella for a soft
and cheesy loaf.It`s then baked with care for a crisp, golden crust with pockets of rich, melting cheese. Eat today to enjoy at its best or to keep for a little longer, try freezing or refreshing by sprinkling with water and gently warming in the oven',
    'INGREDIENTS: Wheat Flour [Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin],
Water,
Cheese (13 %) [Red Leicester Cheese (with Colour: Annatto Norbixin) (Milk), Mild Red Cheddar Cheese (with Colour: Annatto Norbixin (Milk), Mature Red Cheddar Cheese (with Colour: Annatto Norbixin) (Milk), Mozzarella Full Fat Soft Cheese (Milk)],
Flavouring (Milk),
Fermented Durum Wheat Flour,
Yeast,
Cheese Paste (Milk),
Salt,
Wheat Gluten,
Wheat Flour,
Semolina (Wheat),
Flour Treatment Agent: (Ascorbic acid).',
    'Contains wheat
and milk.This bakery product may also contain peanuts,
nuts,
milk,
sesame,
egg,
soya
and other allergens.',
    '',
    'Turkey',
    3.20,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/0c15b417-ec27-4464-b813-fbb63b50229e/be975ce2-2d7d-47d0-9b43-b8449e6625d1.jpeg?h=540&w=540',
    3
  ),
  (
    'Panini 4 Packd',
    2,
    14,
    'White panini rolls.Stone baked
and grill marked on top for a distinctive finish',
    'INGREDIENTS: Wheat Flour [Wheat Flour, Calcium Carbonate, Iron, Niacin, Thiamin],
Water,
Palm Oil,
Rapeseed Oil,
Salt,
Sugar,
Dried Skimmed Milk,
Yeast,
Extra Virgin Olive Oil,
Semolina (Wheat),
Emulsifier (
  Mono -
  and Di - Glycerides of Fatty Acids
),
Wheat Gluten,
Malted Wheat Flour,
Flour Treatment Agent (Ascorbic Acid).',
    'Contains wheat
and milk.This bakery product may also contain peanuts,
nuts,
milk,
sesame,
egg,
soya
and other allergens.',
    '',
    'Iraq',
    2.10,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/24564540-401e-4a0f-91b1-1aca17e65d2a/86ea432a-ee33-467c-abcd-e4a5787cc91a.jpeg?h=540&w=540',
    3
  ),
  (
    'Finest 9 Mini Cupcakes',
    3,
    14,
    '3 Chocolate mini sponge cakes topped with chocolate flavoured buttercream
and chocolate sauce
and decorated with chocolate flavoured sprinkles.3 Vanilla flavour mini sponge cakes topped with salted caramel flavoured buttercream
and dulce de leche sauce
and decorated with bronze lustred honeycomb.3 Vanilla flavour mini sponge cakes topped with rose flavour buttercream
and rhubarb sauce
and decorated with freeze - dried raspberries.',
    '',
    'For allergens,
including cereals containing gluten,
see ingredients in bold.',
    'Defrost for 12 hours in a cool,
dry place Once defrosted use within 24 hours
and do not refreeze.Suitable for home freezing.Ideally freeze as soon as possible
after
  purchase but always by date shown.Store in a cool,
  dry place
  and once opened in an airtight container.',
    'Turkey',
    2.10,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/71ad4579-1892-4b96-bec9-b312c595fff6/913883c1-ca61-4059-8d0b-21852b86fb43.jpeg?h=540&w=540',
    4
  ),
  (
    '2 Homebake Baguettes',
    3,
    12,
    '2 Part baked white bread baguettes.MADE IN FRANCE Part baked to finish off at home for a soft inside
and golden crust Pack size: 300G',
    'INGREDIENTS: Wheat Flour,
Water,
Yeast,
Fermented Wheat Flour,
Salt,
Malted Wheat Flour,
Flour Treatment Agent (Ascorbic Acid).Packaged in a protective atmosphere.',
    'May contain sesame seeds.For allergens,
including cereals containing gluten,
see ingredients in bold.',
    'Store in a cool,
dry place.Once opened,
keep refrigerated
and consume within 24 hours.',
    'Afganistan',
    4.10,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/eadd005a-c184-4559-bf6e-cb6e0e099f1f/d0adea6b-266e-48d8-a049-3add995bdafc.jpeg?h=540&w=540',
    4
  ),
  (
    'Haribo Tangfastics 175G',
    2,
    30,
    'Fizzy Fruit Flavour,
Cola Flavour
and Sweet Foam Gums Kids
and grown - ups love it so......the happy world of HARIBO ! A portion is a little handful.In this case
  it`s approx. 5 sweets
Tangy tastiness
Without artificial colours
Pack size: 175G',
    'Glucose Syrup,
Sugar,
Gelatine,
Dextrose,
Acid: Citric Acid,
Malic Acid,
Acidity Regulators: Calcium Citrates,
Sodium Hydrogen Malate,
Caramelised Sugar Syrup,
Fruit
and Plant Concentrates: Apple,
Aronia,
Blackcurrant,
Carrot,
Elderberry,
Grape,
Hibiscus,
Kiwi,
Lemon,
Mango,
Orange,
Passion Fruit,
Safflower,
Spirulina,
Flavouring,
Elderberry Extract,
Glazing Agent: Carnauba Wax',
    '',
    'Best before
end...(see print on back of pack).Store away
from
  heat
  and humidity.',
    'Iraq',
    1.10,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/ae86c39c-9129-49cf-8656-0f0d3163c489/77e3ffe2-f83e-40dc-abc6-c9ab54f158d9_750940165.jpeg?h=540&w=540',
    5
  ),
  (
    'Butterkist Microwave Popcorn Sweet & Salted 3X60g',
    1,
    30,
    'Sweet & Salted Microwaveable Popcorn with Sweeteners',
    'Maize,
Palm Oil,
Sweeteners: Isomalt,
Sucralose,
Salt,
Emulsifier: Sunflower Lecithins',
    '',
    'Store in a cool,
dry place.Best Before: See base.',
    'Lebanon',
    1.70,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/29fb8faa-1d15-4f33-bba8-3ab2923684ad/cebd0f42-f393-49e6-a7bc-41fc3ba5d39b_184937244.jpeg?h=540&w=540',
    5
  ),
  (
    'Najma Halal Sliced Turkey Chorizo 80G',
    2,
    5,
    'Sliced Dry Cured & Smoke Flavoured Turkey Sausage with Duck Fat,
Paprika
and added Milk Proteins.Packaged in a protective atmosphere.',
    'Turkey Meat,
Duck Fat,
Paprika (2.5 %),
Salt,
Lactose (Milk),
Milk Proteins,
Dextrin,
Dextrose,
Garlic Powder,
Black Pepper,
Oregano,
Nutmeg,
Cumin,
Coriander,
Preservatives (E262, E250, E252),
Stabiliser (E451),
Antioxidant (E331),
Acid (E330),
Smoke Flavouring,
Prepared with 130g of Turkey Meat per 100g of finished product',
    '',
    'Keep refrigerated between 0 ° C
and 5 ° C.Once opened,
consume within 2 days.',
    'Lebanon',
    1.25,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/00c3de8e-91fe-4ad1-a46f-0a76121fe936/7bfb58e4-121f-4ada-8db2-a72a3d7ff44b_721035552.jpeg?h=540&w=540',
    9
  ),
  (
    'Adalya Halal Turkey Pizza Salami 120G',
    2,
    22,
    'Sliced turkey salami with added palm fat.Packaged in protective atmosphere.',
    'Turkey,
Palm Fat,
Iodised Salt (Salt, Potassium Iodate),
Dextrose,
Maltodextrin,
Spices,
Colour (Beetroot Juice Concentrate),
Garlic,
Antioxidants (Sodium Ascorbate, Ascorbic Acid),
Rapeseed Extract,
Onion,
Preservative (Sodium Nitrite),
Acidity Regulator (Citric Acid),
Made with 116g of Raw Turkey per 100g of finished product',
    'Free
From
: Gluten,
  Lactose',
    'Store chilled 0 ° C to 5 ° C.Once opened,
keep refrigerated
and consume within 2 days
or by Use by date shown.',
    'Lebanon',
    1.56,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/b948082a-d429-487b-be25-3aa2c52b5abb/bd685b25-92d7-4ad5-981c-d24ca035bf9c.jpeg?h=540&w=540',
    9
  );