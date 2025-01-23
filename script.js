const studentName = "Nour Harrak";
let studentAge = 28;
let isEnrolled = true;

console.log("My Name:", studentName);
console.log("My Age:",studentAge);
console.log("I am enrolled at Humber College:",isEnrolled);

var greeting = `Hello everyone, my name is ${studentName}, below are some details about my favourite athlete, Sidney Crosby`;
var crosbyNumber = 48;
var crosbyTalented = true;

console.log(greeting);
console.log("Crosby's Number:", crosbyNumber);
console.log("Sidney Crosby plays for the Pittsburgh Penguins:", crosbyTalented);

const favouriteGames = ['Super Mario Galaxy', 'Halo 2', 'Bloodborne', 'Persona 5'];

console.log("Here is a list of some of my favourite video games:", favouriteGames);

favouriteGames.push('Skyward Sword');

console.log("Oops, I forgot one!", favouriteGames);

const bloodborne = {
    developer: "From Software",
    release: 2015,
    genre: "souls-like"
};

console.log("What genre of video game is Bloodborne?", bloodborne.genre);

let x = 4;
let y = 12;

console.log("Some arithmetic operaters applied to our 'x' variable!");
console.log("x * 4:", x * 4, "x - 3:", x - 3, "x / 2:", x / 2, "x + 8:", x + 8);

x *= 4;
console.log("After x * 4, is x:")
console.log("Equal to y?:", x === y, "Greater than y?:", x > y);

x -= 4;
console.log("x is now 16, what if we subtract 4 from it?");
console.log("Equal to y?:", x === y, "Greater than y?:", x > y);

let a = true;
let b = false;

console.log("Finally, a being true and b being false:");
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a and !b:", !a, ! b);