let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

function myDrinks() {
  let sortedDrinks = getraenke.sort();

  sortedDrinks.forEach(function (drink) {
    console.log(drink);
    document.write(drink + "<br>");
  });
}

myDrinks();
