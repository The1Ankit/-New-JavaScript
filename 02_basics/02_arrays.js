
const marvelHeros= ["Spiderman", "Ironman", "Thor", "Hulk"];
const dcHeros= ["Batman", "Superman", "Wonder"];


// Combine both arrays into one array called allHeros
marvelHeros.push(dcHeros);
console.log("All Heros:", marvelHeros);

const allHeros = marvelHeros.concat(dcHeros);
console.log("All Heros:", allHeros);
// Using spread operator to combine arrays
const all_Heros = [...marvelHeros, ...dcHeros];
console.log("All Heros:", all_Heros);


// Finding the longest name among all heros

let longestName = "";
for (let i = 0; i < all_Heros.length; i++) {
    if (all_Heros[i].length > longestName.length) {
        longestName = all_Heros[i];
    }
}
console.log("Longest Hero Name:", longestName);

// using from to create an array from a string
console.log(Array.from("HelloWorld"));
//using of to create an array from a list of values
let scores = 100
let scores1 = 200
let scores2 = 300

console.log(Array.of(scores, scores1, scores2));

