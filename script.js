// ! object destructuring
//here we have an object that represents the planet of Zerkblatt
const zerkblatt = {
    isPlanet: true,
    largestMountain: "Mount Zblork",
    age: "5 Billion earth years",
    AverageTemperature: "25 Degrees C"
}

//we can declare multiple variables from the object in a single line using {}
let {largestMountain, age} = zerkblatt;

// ! array destructuring
console.log(`${largestMountain} is the largest mountain on Zerkblatt`);
console.log(`${age} is the age of Zerkblatt`);

//here we have an array of facts about bullet ants
const bulletAntFacts = ["1-3mm long", "neurotoxin", "amazon rainforest", "similar pain to a tarantulaHawk..like a bullet"];

//similarly to the object, we can use a single line to pull out variables from the array, using the array notation []
let [stingerLength, toxinType, habitat, howPainful] = bulletAntFacts;
console.log(`stingerLength: ${stingerLength}`);
console.log(`type of toxin: ${toxinType}`);
console.log(`environment: ${habitat}`);
console.log(`how painful: ${howPainful}`);