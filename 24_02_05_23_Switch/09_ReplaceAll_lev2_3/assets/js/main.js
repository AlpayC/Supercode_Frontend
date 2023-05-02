function searchTxt() {
  let searchInput = document.querySelector("#search-input").value;
  console.log(searchInput);
  let article = document.querySelector(".text");
  console.log(article);
  let spanOpen = "<span class=highlight>";
  let spanEnd = "</span>";

  article.innerHTML = article.innerText.replaceAll(
    searchInput,
    spanOpen + searchInput + spanEnd
  );
}
