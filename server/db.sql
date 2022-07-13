drop table if exists users;

drop table if exists products;

drop table if exists seller;

drop table if exists categories;

CREATE TABLE categories(id SERIAL PRIMARY KEY, name VARCHAR(30));

CREATE TABLE seller(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  first_line_address VARCHAR(100) NOT NULL,
  second_line_address VARCHAR(50) NOT NULL,
  postcode VARCHAR(15) NOT NULL,
  logo VARCHAR(1000) NOT NULL,
  description TEXT,
  registration_date timestamp default CURRENT_TIMESTAMP,
  email VARCHAR(25) NOT NULL
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
  country VARCHAR(30),
  price DECIMAL NOT NULL,
  cat_id INT REFERENCES categories(id),
  image VARCHAR(500) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  email VARCHAR(25) NOT NULL
);

INSERT INTO
  categories(name)
VALUES
  ('Food'),
  ('Drink'),
  ('Dairy'),
  ('Fruits & vegetables');

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
    'Drena',
    '12 Woodridings Close',
    'Hatch End',
    'HA4 8KJ',
    'logo',
    'history/desc',
    'drena@gmail.ac.uk'
  ),
  (
    'El Paso',
    '12 Uxbridge Road',
    'Wembly Central',
    'HG4 2LJ',
    'logo',
    'history/desc',
    'el_paso@gmail.ac.uk'
  ),
  (
    'Kefalonia',
    '23 Mandelae Street',
    'Barking',
    'RT4 9DJ',
    'logo',
    'history/desc',
    'kefalonia@gmail.ac.uk'
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
    2,
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
    'Mexico',
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
    'Mexico',
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
    'Mexico',
    1.45,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c331319e-fd7c-404a-935b-e2b31947e666/234faba3-4de2-4c84-b58b-feaa8fdfdbf3_1693755233.jpeg?h=540&w=540',
    1
  ),
  (
    'Maggi So Juicy Mexican Chicken 40G',
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
    'Mexico',
    0.69,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/b80d1689-5580-4047-83de-4e6863b7bfa0/8ec547f0-fdab-402b-87aa-1f4e91961c0e.jpeg?h=540&w=540',
    1
  ),
  (
    'Herdez Salsa Casera 240G',
    2,
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
    'Mexico',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/70df78a4-7a23-4323-92e3-ca84a6849949/83fbb33c-573b-42f1-b619-0c05de763ac2_1594057614.jpeg?h=540&w=540',
    1
  ),
  (
    'Taylors Rich Italian Ground Coffee',
    1,
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
    'Itally',
    4.00,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/bd5376a7-2a7e-429e-aa8f-dc2e4abe8169/73a63992-0b37-488b-a98d-004edfdc7016_1372191263.jpeg?h=540&w=540',
    2
  ),
  (
    'Galbani Italian Burrata Cheese 150G',
    1,
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
    'Itally',
    5.75,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c6c6f88a-2c7b-4f93-9e04-d5b8bfdf54f4/00c2ea04-4581-4704-aa88-736747ab3c32.jpeg?h=540&w=540',
    1
  ),
  (
    'Italian Ro Asted Pepper Antipasti 285G',
    1,
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
    'Itally',
    2.60,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/d65a378c-64c1-42d9-af0f-961fad4ce2ba/c83883bf-fa60-4502-829d-3ce0e28800d1_389453040.jpeg?h=540&w=540',
    1
  ),
  (
    'Freixenet Italian Rose 20Cl',
    1,
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
    'Itally',
    4.00,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/7a4a9e89-1e3b-44ed-be01-40e1e6bae190/aa9e7e1b-3d8e-4493-bada-2653110ff5a4.jpeg?h=540&w=540',
    2
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
    'Itally',
    1.90,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/fffec0b3-e3cc-4ae2-a1d6-55308d2e96c7/4d00a150-b36b-4efb-b68f-cc37871c0607_252697775.jpeg?h=540&w=540',
    1
  ),
  (
    'Fage Total 0%Fat Greek Recipe Yogurt 450G',
    3,
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
    'Grece',
    '2.75',
    'https://digitalcontent.api.tesco.com/v2/media/ghs/1bd74801-5d6e-405e-963e-c818c4395430/41b0908c-7ec5-4201-a91f-97e5e1094621.jpeg?h=540&w=540',
    1
  ),
  (
    'Deli Kitchen 4 Greek Style Flatbreads 320G',
    3,
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
    'Grece',
    1.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/29a1f18d-d049-4ad5-a0b6-3626d650fa47/9c008656-0643-4106-8dae-bb14a143ce4d.jpeg?h=540&w=540',
    1
  ),
  (
    'Vivera Veggie Greek Kebab 175G',
    3,
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
    'Grece',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/37e36d0c-093c-4a36-99ad-3dde9cabfd23/5641aebb-c824-40b9-8a5c-0b7ba1778b54.jpeg?h=540&w=540',
    1
  ),
  (
    'Oatly Greek Style Oatgurt 400G',
    3,
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
    'Grece',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/24193c9d-99c3-440e-99dd-b6de0b9d90ea/65185b15-c6fa-47ec-8ce5-b0e39f4dbd33_1755983584.jpeg?h=540&w=540',
    1
  );