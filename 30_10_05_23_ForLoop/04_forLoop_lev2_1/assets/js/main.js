function imageArray() {
  let returnArray = [];
  for (let i = 0; i <= 100; i++) {
    if (i < 10) {
      returnArray.push("image_00" + [i] + ".jpg");
    } else if (i < 100 && i > 9) {
      returnArray.push("image_0" + [i] + ".jpg");
    } else {
      returnArray.push("image_" + [i] + ".jpg");
    }
    console.log(returnArray[i]);
  }
}

imageArray();
