let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// # Empty Arrays
const nameChemicals = [];
const priceChemicals = [];
const priceChange = [];

// # For Each nameChemicals
edelMetallPreise.forEach((element) => {
  nameChemicals.push(element.name);
});

console.log(nameChemicals);

// # Map nameChemicals
const nameChemicalsMap = edelMetallPreise.map((element) => element.name);
console.log(nameChemicalsMap);

// # For Each priceChemicals
edelMetallPreise.forEach((element) => {
  priceChemicals.push(element.preiseGramEuro);
});
console.log(priceChemicals);

// # Map priceChemicals
const priceChemicalsMap = edelMetallPreise.map(
  (element) => element.preiseGramEuro
);
console.log(priceChemicalsMap);

// # For Each priceChange
edelMetallPreise.forEach((element) => {
  priceChange.push(element.veraenderung);
});
console.log(priceChange);

// # Map priceChange
const priceChangeMap = edelMetallPreise.map((element) => element.veraenderung);
console.log(priceChangeMap);

// # Filter priceChange
const priceChangeFilter = edelMetallPreise.filter(
  (element) => element.preiseGramEuro > 50
);

console.log(priceChangeFilter);

function createTable() {
  let table = document.createElement("table"); //erstellt eine Tabelle im HTML

  table.insertAdjacentHTML(
    "beforeend",
    `<tr class='firstRow'><th>${Object.keys(edelMetallPreise[0])[0]}</th><th>${
      Object.keys(edelMetallPreise[0])[1]
    }</th><th>${Object.keys(edelMetallPreise[0])[2]}</th></tr>`
  ); //erstellt die Tabellenköpfe mit den Keys-Namen aus dem Array

  for (
    let i = 0;
    i < edelMetallPreise.length;
    i++ //loopt durch den Array
  ) {
    //erstellt die Tabellensätze pro Tabellenzeile
    table.insertAdjacentHTML(
      "beforeend",
      "<tr><td>" +
        edelMetallPreise[i].name +
        "</td>" +
        "<td>" +
        edelMetallPreise[i].preiseGramEuro +
        "</td>" +
        "<td>" +
        edelMetallPreise[i].preiseGramEuro +
        "</td>" +
        "<td>"
    );
  }

  document.body.append(table);
}

createTable();
