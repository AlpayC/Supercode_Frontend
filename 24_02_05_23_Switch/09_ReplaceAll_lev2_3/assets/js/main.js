function searchTxt() {
  // lege die Variable für den Input-Feld fest. Dabei wird lediglich das Value geloggt;
  let searchInput = document.querySelector("#search-input").value;
  console.log(searchInput);
  // lege die Variable für das article Element fest;
  let article = document.querySelector("article");
  // lege die Variablen für das Span Tag fest. Dabei wird direkt die Klasse "highlight" mitgegeben;
  let spanOpen = "<span class=highlight>";
  let spanEnd = "</span>";

  // Nach einem Input wird im article Element der Suchbegriff aus dem Input Feld mit dem Textinhalt aus dem article verglichen und ersetzt, indem der Suchbegriff in dem og. span Tag mit Klasse "umschlossen" wird. Beginnt man die Suche von vorne, werden alle Span Tags vorher entfernt, da die Funktion den gesamten Inhalt des article Elements durch den neu formatierten Text ersetzt.

  article.innerHTML = article.innerText.replaceAll(
    searchInput,
    spanOpen + searchInput + spanEnd
  );
}
