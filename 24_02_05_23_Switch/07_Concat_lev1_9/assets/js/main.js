const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "and";

let sentenceOne = text1.concat(
  " ",
  text3.replace("and", "and to the movie theater")
);

let sentenceTwo = text1
  .replace("codingschool", "")
  .concat(" ", text2.replace("Susi", "movie theater"));
let sentenceThree = text2.concat(" ", text3, " ", text1.replace("is", "are"));

let sentenceFour = text2.concat(
  " ",
  text3,
  " ",
  text1.replace(
    "is going to codingschool",
    "are going to gym and to the movie theater"
  )
);

let sentenceFive = text2.concat(
  " ",
  " ",
  text1.replace(
    "Sam is going to codingschool",
    "is going to school and to the movie theater"
  )
);

document.write(sentenceOne + "<br>");
document.write(sentenceTwo + "<br>");
document.write(sentenceThree + "<br>");
document.write(sentenceFour + "<br>");
document.write(sentenceFive + "<br>");
