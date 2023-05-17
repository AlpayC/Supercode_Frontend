const myFunction = () => {
  const examples = document.body.getElementsByClassName("example");

  Array.from(examples).forEach((classElement) => {
    if (classElement.style.backgroundColor === "black") {
      classElement.style.backgroundColor = "transparent";
      classElement.style.color = "white";
    } else {
      classElement.style.backgroundColor = "black";
      classElement.style.color = "white";
    }
  });
};
