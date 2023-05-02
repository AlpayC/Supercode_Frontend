const output = document.querySelector(".output");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");

let text = "Hi!Ich bin ein Text";
output.innerHTML = text.charAt(7);

let result = text.includes("Text");
output2.innerHTML = result;

let text1 = "Hallo";
let text2 = "Leute";
let text3 = "!";
let result2 = text1.concat(" ", text2, " ", text3);
output3.innerHTML = result2;
