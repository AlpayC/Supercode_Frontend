// ! API   !
// eine API ist eine Schnittstelle zwischen front und backend
// eine API kommuniziert in der regel mit einem Server der wiederum mit Daten antwortet

// ! JSON   !
//  JSON (JavaScript Object Notation) ist eine gängige Form, um Daten zu speichern.
// Unterstützt verschiedene Datentypen wie zb. Strings, Zahlen, Boolean
// Hierrarische Struktur: Objekte können andere Objekte oder Arrays enthalten und Arrays können wiederum andere Objekte, Arrays oder einzelne Werte enthalten
// Gibt es in verschiedene Sprachen
// Weit verbreitet wird häufig für Datenaustausch benutzt
// Google Chrome Plugin "JSON Formatter"

// # So sieht eine JSON aus   #

//
//
//
//

// # PROMISE & FETCH    #
// fetch("../fakeData.json");
// console.log(fetch("../fakeData.json"));

// ? 1 Ein Fetch ist eine Primise (Versprechen)
// ? 2 Eine Promise ist ein Objekt
//  Ein Primise ist ein Versprechen,  das den eventuellen Abschluss repräsentiert. Der kann erfolgreich oder nicht erfolgreich sein. ABBBER sie gibt aufjeden Fall was zurück
// Eine Promise hat 3 Zustände
// -> <pending> Wir haben noch keine Antwort erhalten
// -> <resolved> Wir haben eine Antwort erhalten, alles ging gut, keine Fehler
// -> <rejected> Wir haben eine Antwort erhalten, aber haben Fehler erhalten
// ? 3 Fetch ist asynchron, heißt es läuft parallel und ander Funktionen müssen nicht warten, bis der Fetch fertig ist.
// ? 4 Eine Promise kann mit der Methode then() und catch() behandelt werden, um auf das Ergebnis oder Fehler zu reagieren
// then() -> Methode wird aufgerufen, wenn die Promise erfolgreich war <resolved>. Sie nimmt eine Funktion entgegeben, die das Ergebnis des Promises verarbeitet
// catch() -> Methode wird aufgerufen, wenn die Promise nicht erfolgreich war. Sie nimmt eine Funktion entgegen, die den Fehler des Promises beinhaltet.

// # LOKALE DATEN FETCHEN        #

// fetch("../fakeData.json");
// Wir können auf die Daten(body) zugreifen da wir json benötigen
// .then((response) => response())
// .then((response)=>response.json())
// Die JSON Daten befinden sich nun in "data" und können genutzt werden (data is frei wählbar)
// .then((data) =>{console.log(data);}) //Hier sind die Daten vorhanden
// .catch((error)=> {console.log("Fehler beim Laden :", error);})

// # APIs fetchen                #
// Mit der Fetch Methode fragen wir Daten beim Server an, wenn wir es nicht anders definieren, machen wir automatisch eine get request.
// Wir nutzen die URL/den Endpoint der API, je nachdem wie die URL aussieht, bekommen wir unterschiedliche Daten ausgegeben
// Wie die URL aussehen muss, steht in der Dokumentation

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    const products = data.products;
    products.forEach((singleProduct) => {
      const name = singleProduct.title;
      const description = singleProduct.description;
      const price = singleProduct.price;
      const img = singleProduct.images[0];
      const id = singleProduct.id;
      // erstellt eine DIV
      let productItem = document.createElement("div");
      // Erstellt ein Titel
      let titleOfProduct = document.createElement("h2");
      titleOfProduct.textContent = name;
      productItem.appendChild(titleOfProduct);

      // Erstellt eine Beschreibung
      let descriptionOfProduct = document.createElement("p");
      descriptionOfProduct.textContent = description;

      productItem.appendChild(descriptionOfProduct);

      // Erstellt eine Preisangabe
      let priceOfProduct = document.createElement("h5");
      priceOfProduct.textContent = price + "€";
      productItem.appendChild(priceOfProduct);

      // Erstellt ein IMG
      let imgOfProduct = document.createElement("img");
      imgOfProduct.setAttribute("src", img);
      imgOfProduct.setAttribute("alt", name);
      productItem.appendChild(imgOfProduct);
      // Schreibt das div in die class products
      document.querySelector(".products").appendChild(productItem);

      let moreInfo = document.createElement("button");
      moreInfo.textContent = "Mehr Infos";
      moreInfo.addEventListener("click", () => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log("fehler : ", error));
      });
      productItem.appendChild(moreInfo);
    });
  })
  .catch((error) => console.log("Fehler beim Laden: ", error));
