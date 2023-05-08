const person = ["Jackie", "Chan", "KungFu-Legende"];
const friends = ["Bruce Lee", "Jet Li", "Ip Man"];
const favoriteFood = ["Reis", "Gebratene Ente", "Salat"];

console.log(person);
console.log(person.length);
console.log(person.push("Alpay", "Superman"));
console.log(person);

console.log(friends);
console.log(friends.length);
console.log(friends.push("Hiroyuki Sanada", "Ken Watanabe"));
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.length);
console.log(favoriteFood.push("gebratene Nudeln", "Steaks"));
console.log(favoriteFood);

let lastValue = person.pop();
let lastValue2 = friends.pop();
let lastValue3 = favoriteFood.pop();
console.log(lastValue);
console.log(lastValue2);
console.log(lastValue3);
console.log(person);
console.log(friends);
console.log(favoriteFood);

let firstValue = person.shift();
let firstValue2 = friends.shift();
let firstValue3 = favoriteFood.shift();

console.log(person);
console.log(friends);
console.log(favoriteFood);
console.log(firstValue);
console.log(firstValue2);
console.log(firstValue3);

console.log(friends);
console.log(friends.unshift("Hiroyuki Sanada", "Ken Watanabe"));
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.unshift("Gebratene Nudeln", "Steaks"));
console.log(favoriteFood);
