let unserLager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

let geheimnisse = unserLager.schrank["Obere Schublade"].Ordner2;
console.log(geheimnisse);
let cola = unserLager.schrank["Untere Schublade"];
console.log(cola);
let hefter = unserLager.schreibtisch.schublade;
console.log(hefter);
