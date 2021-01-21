let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
const foodCab = food.split(",").sort();
const equipCab = equipment.split(",").sort();
const petsCab = pets.split(",").sort();
const sleepAidCab= sleepAids.split(",").sort();


//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
const cargoHold = [];
cargoHold.push(foodCab, equipCab, petsCab, sleepAidCab);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

const info = input.question("Which cabinet numbers 0 - 3 would you like to select?");


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (info == 0 || info == 1 || info == 2 || info == 3) {
  console.log(cargoHold[`${info}`]);
} else {
  console.log("Please enter a valid number.")
}

const info2 = input.question("What item would you like out of the cabinet?");

if (cargoHold[`${info}`].includes(`${info2}`) === true) {
  console.log(`Cabinet ${info} does contain ${info2}`)
} else {
  console.log(`Cabinet ${info} does not contain ${info2}`)
}
//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
