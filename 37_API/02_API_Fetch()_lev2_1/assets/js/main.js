fetch("https://picsum.photos/v2/list")
  .then((res) => res.json())
  .then((data) => {
    const images = data;
    images.forEach((singleImage) => {
      const author = singleImage.author;
      const img = singleImage.download_url;
      let imageItem = document.createElement("figure");
      let authorTitle = document.createElement("figcaption");
      authorTitle.textContent = author;
      imageItem.appendChild(authorTitle);
      let imageOfSrc = document.createElement("img");
      imageOfSrc.setAttribute("src", img);
      imageOfSrc.setAttribute("alt", author);
      imageItem.appendChild(imageOfSrc);

      document.querySelector(".imgcontainer").appendChild(imageItem);
    });
  })
  .catch((error) => console.log("Fehler beim Laden: ", error));
