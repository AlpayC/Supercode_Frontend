let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let albumLowerCases = album.map((elm) => elm.toLowerCase());

const whichDataType = (dateiname) => {
  if (dateiname.includes(".jpg") == true) {
    return dateiname.replace(".jpg", "");
  } else if (dateiname.includes(".gif") == true) {
    return dateiname.replace(".gif", "");
  } else {
    return "invalid";
  }
};

albumLowerCases.map(whichDataType);

let albumNew = albumLowerCases.map(whichDataType);
console.log(albumNew);
