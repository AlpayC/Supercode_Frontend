const personIch = {
  name: "Alpay",
  age: "34",
  job: "Webdeveloper",
  sagNameAlter: () => {
    alert(`${personIch.name} ${personIch.age}`);
    console.log(personIch);
  },
};
console.log(personIch.sagNameAlter());
