const mongoose  = require("mongoose");
const config    = require("../config/config");
const Supper    = require("../models/supper");
const User      = require("../models/user");
const Reservation = require('../models/reservation');

mongoose.connect(config.db);
Supper.collection.drop();
User.collection.drop();
Reservation.collection.drop();
setTimeout(()=>{
let users = [{
  username: "BecauseRaisins",
  firstName: "Alfredo Maria",
  lastName: "Milano",
  email:  "alfredo@alfredo.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "KatsuSam",
  firstName: "Sam",
  lastName: "Younger",
  email:  "sam@sam.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "NatLovesCarrots",
  firstName: "Natalie",
  lastName: "Huitson",
  email:  "natalie@natalie.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "EggsBenedict",
  firstName: "Benedict",
  lastName: "Green",
  email:  "ben@ben.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "DanTheNonStickPan",
  firstName: "Dan",
  lastName: "Rogers",
  email:  "dan@dan.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "SamHake",
  firstName: "Sam",
  lastName: "Hey",
  email:  "samh@samh.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "BunInTheOvenMiriam",
  firstName: "Miriam",
  lastName: "Wodrich",
  email:  "miriam@miriam.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "DeLaMorinYeah",
  firstName: "Johnnie",
  lastName: "DeLaMoriniere",
  email:  "johnnie@johnnie.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "CurryChic",
  firstName: "Laura",
  lastName: "Tombs",
  email:  "laura@laura.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "CazGotSole",
  firstName: "Caz",
  lastName: "Brunnen",
  email:  "caz@caz.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "NoEggAbi",
  firstName: "Abigail",
  lastName: "Coe",
  email:  "abigail@abigail.com",
  password: "password",
  passwordConfirmation: "password",
},{
  username: "PaulBourguignon",
  firstName: "Paul",
  lastName: "Bryan",
  email:  "paul@paul.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "NiceTeethRyan",
  firstName: "ryan",
  lastName: "modeste",
  email:  "ryan@ryan.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "JustAddLard",
  firstName: "Ajay",
  lastName: "Lard",
  email:  "ajay@ajay.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "ChocolateMarpleCake",
  firstName: "Will",
  lastName: "Marples",
  email:  "will@will.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "ChinFromTheFace",
  firstName: "Alex",
  lastName: "Chin",
  email:  "alex@alex.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "OliveOilGiroud",
  firstName: "Rane",
  lastName: "Gowen",
  email:  "rane@rane.com",
  password: "password",
  passwordConfirmation: "password",
}, {
  username: "Alicia",
  firstName: "Alicia",
  lastName: "Pearse",
  email:  "alicia@alicia.com",
  password: "password",
  passwordConfirmation: "password",
}, ];

let seed = [];
users.forEach(user => User.create(user, (err, user) => {
  if(err) return console.log(err);
  seed.push(user._id);
  return console.log(`${user.username} was created`);
}));
setTimeout(()=>{

const suppers = [{
  host:        seed[1],
  title:       "The Italian Job",
  date:        "10/26/2016",
  image:       "/images/1.jpeg",
  description: "No Italian food will be served...the only authentic Italian thing about this supper is my charm and the inappropriate sexual advances.",
  menu:
    {
      starter: "Crab cakes",
      main:    "Lemon sole with chipotle & ancho chilli recado",
      dessert: "Chocolate fondant"
    },
  maxGuests:   10,
  location:    "London",
  status:      "active"
},{
  host:        seed[2],
  title:       "A Foodies Supper",
  date:        "11/26/2016",
  image:       "/images/2.jpeg",
  description: "black and big",
  menu:
    {
      starter: "Crab cakes",
      main:    "Roast chicken with potatoes and carrots",
      dessert: "Chocolate fondant"
    },
  maxGuests:   10,
  location:    "Crouch End",
  status:      "active"
},{
  host:        seed[3],
  title:       "random",
  date:        "11/22/2016",
  image:       "/images/3.jpeg",
  description: "random",
  menu:
    {
      starter: "Duck ceviche",
      main:    "Lemon sole with chipotle & ancho chilli recado",
      dessert: "Blackberry fool"
    },
  maxGuests:   6,
  location:    "Islington",
  status:      "active"
},{
  host:        seed[4],
  title:       "Taste of the Sea",
  date:        "11/09/2016",
  image:       "/images/4.jpeg",
  description: "random",
  menu:
    {
      starter: "Prawn Cocktail",
      main:    "Kingfish Sashimi",
      dessert: "Chocolate Mouse"
    },
  maxGuests:   10,
  location:    "Brighton",
  status:      "active"
},{
  host:        seed[1],
  title:       "Paul's Night of Pleasure",
  date:        "11/12/2016",
  image:       "/images/5.jpeg",
  description: "random",
  menu:
    {
      starter: "Crab cakes",
      main:    "Roast chicken with potatoes and carrots",
      dessert: "Chocolate fondant"
    },
  maxGuests:   2,
  location:    "Crouch End",
  status:      "active"
},{
  host:        seed[2],
  title:       "random",
  date:        "11/16/2016",
  image:       "/images/6.jpeg",
  description: "random",
  menu:
    {
      starter: "",
      main:    "Lemon sole with chipotle & ancho chilli recado",
      dessert: "Blackberry fool"
    },
  maxGuests:   6,
  location:    "Islington",
  status:      "active"
},{
  host:        seed[5],
  title:       "random",
  date:        "11/14/2016",
  image:       "../images/7.jpeg",
  description: "random",
  menu:
    {
      starter: "Ham Hock Terrine",
      main:    "Mash-topped beef & Guinness pie",
      dessert: "Chai spiced carrot cake"
    },
  maxGuests:   10,
  location:    "Shoreditch",
  status:      "active"
},{
  host:        seed[7],
  title:       "random",
  date:        "",
  image:       "/images/8.jpeg",
  description: "random",
  menu:
    {
      starter: "Duck ceviche",
      main:    "Lemon sole with chipotle & ancho chilli recado",
      dessert: "Blackberry fool"
    },
  maxGuests:   6,
  location:    "Islington",
  status:      "active"
},];

suppers.forEach(supper => Supper.create(supper, (err, supper) => {
  if(err) return console.log(err);
  return console.log(`${supper.title} was created`);
}));
}, 1000);
}, 1000);
