# lnd8-BShade-finalproject

# Team members

1- Maryam
2- Dona
3- Amarachi
4- Ramla

# HOW TO CREATE A COPPY OF HUJREH DATABASE LOCALLY
1-In the terminal run psql postgres
2-Run --> create database hujreh;
3-Run --> \c hujreh;
4-Run --> \i (copy paste the path of db.sql file inside the server.js)

# HOW TO USE THE env VARIABLE TO MAKE THE CONNECTION WITH THE LOCAL DATABASE 
1- Inside server folder create a file .env 
2- Inside the .env file create a variable DATABASE_URL and write your database credential like in the example below:
   DATABASE_URL=postgres://<USERNAME>:<PASSWORD>@<HOST>:<PORT>/<DB>
3- Number of port should be 5432

Example:  DATABASE_URL="postgres://codeyourfuture:donashehu@localhost:5432/hujreh"

# About this App : 
This e-comerce is called Hujreh . the idea is selling international food and customers are able to find different food from different counttries . People also can regidter as a seller and introduce their goods to others .


# Steps to do for team :
1- Setting up in a terminal:
 . cd server
 .npm start
 .cd client
 .npm start
 
# Debugging
 2- When you running the server if something like this issue comes up : 
 'your server port is using ... 4444 ' or 'Address already in use'
 you need to follow these three steps on terminal :
    - lsof -i tcp:4444 
    -kill -9 9736 
    -kill -9 3495  
    
 then 
  - npm start
