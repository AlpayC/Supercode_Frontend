let date1 = new Date(1999, 10, 5, 15); // PM
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12); // PM
let date4 = new Date(2000, 1, 1, 11); // AM

const amPmGenerator = (time) => {
  if (time.getHours() >= 12) {
    return "PM";
  } else {
    return "AM";
  }
};
console.log(amPmGenerator(date1)); // PM
console.log(amPmGenerator(date2));
console.log(amPmGenerator(date3)); // PM
console.log(amPmGenerator(date4)); // AM
