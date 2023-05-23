const output1 = document.querySelector(".output1");
const output2 = document.querySelector(".output2");
const output3 = document.querySelector(".output3");
const output4 = document.querySelector(".output4");

let date1 = new Date();
date1.setFullYear(2222);
let date2 = new Date();
date2.setFullYear(2122);
date2.setMonth(3);
let date3 = new Date();
date3.setFullYear(2222);
date3.setFullYear(2222);
let date4 = new Date();
date4.setDate(date4.getDate() + 30);

output1.innerHTML = date1;
output2.innerHTML = date2;
output3.innerHTML = date3;
output4.innerHTML = date4;
