let numArr = [5, 22, 15, 100, 55];
let output = document.querySelector(".output");

for (let i = 0; i < numArr.length; i++) {
  let num = numArr[i];
  let teiler = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      teiler.push(i);
    }
  }

  if (teiler.length > 0) {
    teiler.forEach((teiler) => {
      output.innerHTML += `<p>${num} lässt sich durch ${teiler} teilen! Das Ergebnis ist ${
        num / teiler
      }.</p>`;
    });
  } else {
  }
}
