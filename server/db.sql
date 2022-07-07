CREATE DATABASE hujreh_database;

drop table if exists user;
drop table if exists seller;
drop table if exists products;
drop table if exists categories;

CREATE TABLE categories(id SERIAL PRIMARY KEY, name VARCHAR(30));

CREATE TABLE seller(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  -- first_line_address VARCHAR(100) NOT NULL,
  -- second_line_address VARCHAR(25) NOT NULL,
  -- postcode VARCHAR(15) NOT NULL,
  location VARCHAR(50) NOT NULL,
  logo VARCHAR(3000) NOT NULL,
  description TEXT,
  registration_date timestamp default CURRENT_TIMESTAMP,
  email VARCHAR(25) NOT NULL
);

INSERT INTO seller (name,location, logo, email) VALUES('DRENA','12 WOODIRING CLOSE','/','donashehu@gmai.com');

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  sell_id INT REFERENCES seller(id),
  quantity INT NOT NULL,
  description TEXT,
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

INSERT INTO categories(name)
VALUES ('food'),
  ('drink'),
  ('clothes'),
  ('fruits_vegetable');

/ / Mexican
INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Mister Freed Tortilla Chips Avocado & Guacamole 135G',
    10,
    'Tortilla Chips with Avocado Tastee Delicioso Sabor Mexicano! Gently roasted for a crispy bite and generously sized to fit all your favorite dips.Veegan
We believe that plant-based eating will change the world, and we want our delicious snacks to lead the way.Friendlee We only use carefully selected ingredients. No added nasties!Packaged in a protective atmosphere.Source of FibreGluten-FreeNon-GMOSuitable for Vegans Pack size: 135G',
    'Mexico',
    1.75,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/5a789bbb-a817-4c6f-a69b-f93ee810737f/dde5269f-7c0b-4f02-80f0-367c673192a8_1714628850.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Ben`s Original Mexican Style Microwave Rice 250G',
    12,
    'Steamed parboiled long grain rice with jalapeno peppers and red peppers with Mexican style spices.
Visit BensOriginal.co.uk or BensOriginal.ie to find out more.',
    'Mexico',
    1.25,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/a5c1a10e-a816-47a3-94a8-3080922d5008/20a73c85-4764-466a-b18d-656e48f14de9_1234694007.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Old El Paso 12 Taco Shells 156G',
    2,
    '12 Crunchy Corn Taco Shells.
Find More Recipes Online:
http://www.oldelpaso.co.uk
©General Mills
Preservative Free
Suitable for Vegetarians
Pack size: 156',
    'Mexico',
    1.45,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c331319e-fd7c-404a-935b-e2b31947e666/234faba3-4de2-4c84-b58b-feaa8fdfdbf3_1693755233.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )

VALUES (
    'Maggi So Juicy Mexican Chicken 40G',
    3,
    'Seasoning Mix for Mexican Chicken.
For other authentic & delicious meal ideas go to maggi.co.uk
Good to remember
Portions should be adjusted for children of different ages.
Maggi® Juicy Mexican Chicken makes it easy to prepare a delicious Mexican Chicken meal in the oven, that the whole family will love. The delicious mix of herbs and spices including red pepper, cumin and oregano, in our special Juicy cooking bag allows your chicken* to cook until tender in its own juices. The effortless way to make a tasty Juicy Mexican Chicken meal with no mess or stress!
To make a 2 of your 5 a day meal, why not make your Mexican Chicken with pepper, red onion and sweetcorn rice. For the recipe visit maggi.co.uk
*chicken not included
A juicy chicken recipe mix with a special cooking bag
No need to add oil
Sweet & Spicy
No artificial colours, flavours or preservatives
Pack size: 40G',
    'Mexico',
    0.69,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/b80d1689-5580-4047-83de-4e6863b7bfa0/8ec547f0-fdab-402b-87aa-1f4e91961c0e.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )

VALUES (
    'Herdez Salsa Casera 240G',
    4,
    'Tomato and Coriander Salsa with Chilli Peppers
Developed by Herdez, a Mexican family business with over 100 years of experience making authentic Mexican food.
Try our different flavours
Mexico`s Favourite Salsa
Chilli rating - Medium - 2
No artificial colours and flavourings
Suitable for vegetarians
Pack size: 240G',
    'Mexico',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/70df78a4-7a23-4323-92e3-ca84a6849949/83fbb33c-573b-42f1-b619-0c05de763ac2_1594057614.jpeg?h=540&w=540',
    1
  );

  INSERT INTO products (
      name,
      quantity,
      description,
      country,
      price,
      image,
      cat_id
    )
  VALUES (
      'Taylors Rich Italian Ground Coffee',
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
      'Itally',
      4.00,
      'https://digitalcontent.api.tesco.com/v2/media/ghs/bd5376a7-2a7e-429e-aa8f-dc2e4abe8169/73a63992-0b37-488b-a98d-004edfdc7016_1372191263.jpeg?h=540&w=540',
      2
    );
INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Galbani Italian Burrata Cheese 150G',
    6,
    'Fresh stretched curd cheese with cream, in brine.
Galbani Burrata will take your love for mozzarella to the next level. Originating from the Apulia region in Southern Italy, Burrata is one of Italy`s most beloved cheeses. It is mozzarella formed into a pouch and filled with cream and ribbons of mozzarella that give it a delicious soft texture. Galbani Burrata has a mild, smooth and fresh milk flavour that makes it very versatile. Enjoy it with moist tomatoes, basil, crusty bread and a drizzle of olive oil for the ultimate Italian taste experience. You can also serve Burrata in pasta, pizza or simply have it on its own with seasoning. The best way to fully taste the flavours of Burrata is to enjoy it at an ambient temperature.
Galbani® is Italy`s favourite cheesemaker, producing many of Italy`s most loved cheeses since 1882.
Pack size: 150G',
    'Itally',
    5.75,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/c6c6f88a-2c7b-4f93-9e04-d5b8bfdf54f4/00c2ea04-4581-4704-aa88-736747ab3c32.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Italian Ro Asted Pepper Antipasti 285G',
    3,
    'Roasted peppers in a garlic flavoured sunflower oil marinade.
A Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.
A Taste of Italy Infused in a classic Italian inspired marinade for a sweet flavour.
Pack size: 170G',
    'Itally',
    2.60,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/d65a378c-64c1-42d9-af0f-961fad4ce2ba/c83883bf-fa60-4502-829d-3ce0e28800d1_389453040.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Freixenet Italian Rose 20Cl',
    15,
    'Rosé Italian Wine
Presented in a striking cut-glass bottle, Freixenet Italian Rosé blends superior quality with stunning beauty. Using its extensive sparkling winemaking expertise, Freixenet has created the Rosé sibling to Freixenet`s widely successful Prosecco. A stand-out rosé that is perfect to make any occasion extra special.
Freixenet Italian Rosé is a delicate blend of Glera and Pinot Noir grapes, carefully selected from the finest Italian vineyards. Light and effervescent, with notes of red berries and underlying hints of white flowers and apples.
Wine of Italy
Extra dry
Pack size: 20CL',
    'Itally',
    4.00,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/7a4a9e89-1e3b-44ed-be01-40e1e6bae190/aa9e7e1b-3d8e-4493-bada-2653110ff5a4.jpeg?h=540&w=540',
    2
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES (
    'Loyd Grossman Tomato & Basil Pasta Sauce 350G',
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
    'Itally',
    1.90,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/fffec0b3-e3cc-4ae2-a1d6-55308d2e96c7/4d00a150-b36b-4efb-b68f-cc37871c0607_252697775.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES(
    'Fage Total 0%Fat Greek Recipe Yogurt 450G',
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
    'Grece',
    '2.75',
    'https://digitalcontent.api.tesco.com/v2/media/ghs/1bd74801-5d6e-405e-963e-c818c4395430/41b0908c-7ec5-4201-a91f-97e5e1094621.jpeg?h=540&w=540',
    1
  );
INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES(
    'Deli Kitchen 4 Greek Style Flatbreads 320G',
    30,
    '4 Plain Flatbreads
Here at Deli Kitchen HQ our mission is to innovate mealtimes. We start each day with a "What If?" and end with our customer (That`s You!). We asked What if sandwiches could be tastier, healthier, less boring? we asked `What if sandwiches could be, well, less bready?!` then we put our inventive, curious & slightly eccentric heads together and came up with a range of tasty, easy to use flatbreads. Start your day with a "What if?" and join us in innovating mealtimes.
Packaged in a protective atmosphere.
Pop Me in the Freezer
Source of Fibre
Perfect for kebabs
Suitable for Vegetarians
Pack size: 320G',
    'Grece',
    1.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/29a1f18d-d049-4ad5-a0b6-3626d650fa47/9c008656-0643-4106-8dae-bb14a143ce4d.jpeg?h=540&w=540',
    1
  );
  INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES(
    'Vivera Veggie Greek Kebab 175G',
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
    'Grece',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/37e36d0c-093c-4a36-99ad-3dde9cabfd23/5641aebb-c824-40b9-8a5c-0b7ba1778b54.jpeg?h=540&w=540',
    1
  );

INSERT INTO products (
    name,
    quantity,
    description,
    country,
    price,
    image,
    cat_id
  )
VALUES(
    'Oatly Greek Style Oatgurt 400G',
    35,
    'Fermented oat product, Greek style, with added vitamins and minerals.
So if we wanted to incorporate geography into the name of this product, why not Oatgurt Landskrona Style? It would have been more logical, since this product was both invented and manufactured in Landskrona, Sweden. And even though this amazing stuff is used in the same way as Greek yogurt, it is far from Greek yogurt — theoretically, even further from the yogurt part than from the Greek part, since it is completely free of dairy, while the Greek city of Thessaloniki is only 2,399 kilometres from our factory in Landskrona. Of course all of this is really, really far off from what we are here to tell you about on this webpage which is that Oatgurt Greek Style has a thick, smooth and creamy texture combined with a fresh and pleasantly sour flavour. Not to brag, but this is among the best* products we have ever created, if not the best webpage copy.',
    'Grece',
    2.50,
    'https://digitalcontent.api.tesco.com/v2/media/ghs/24193c9d-99c3-440e-99dd-b6de0b9d90ea/65185b15-c6fa-47ec-8ce5-b0e39f4dbd33_1755983584.jpeg?h=540&w=540',
    1
  );
