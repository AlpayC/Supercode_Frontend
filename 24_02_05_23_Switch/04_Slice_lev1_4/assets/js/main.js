const A = "Susi is going to school";
const resultSusi = A.slice(0, 5);
const is = A.slice(5, 7);
const isGoingToSchool = A.slice(5, 23);
const school = A.slice(17, 23);
const susiIsSchool = A.slice(0, 8) + A.slice(17, 23);

console.log(resultSusi);
console.log(is);
console.log(isGoingToSchool);
console.log(school);
console.log(susiIsSchool);

document.write(resultSusi + "<br>");
document.write(is + "<br>");
document.write(isGoingToSchool + "<br>");
document.write(school + "<br>");
document.write(susiIsSchool + "<br>");
