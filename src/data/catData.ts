import { v4 as uuidv4 } from "uuid";
const catData = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
    id: "",
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
    id: "",
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
    id: "",
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
    id: "",
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
    id: "",
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
    id: "",
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
    id: "",
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
    id: "",
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
    id: "",
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
    id: "",
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
    id: "",
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
    id: "",
  },
  {
    name: "Captain Catface",
    species: "Sea Cattain",
    favFoods: ["fish, rum"],
    birthYear: 2016,
    id: "",
  },
];
catData.forEach((cat) => (cat.id = uuidv4()));
//console.log(catData); // each cat should now have a unique ID

export default catData;
