const date = new Date();
const output = document.querySelector(".output");

const dateGeneratorWithSlash = () => {
  if (date.getMonth() < 10) {
    output.innerHTML = `${date.getDate()}/0${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  } else {
    output.innerHTML = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  }
};
const dateGeneratorWithMinus = () => {
  if (date.getMonth() < 10) {
    output.innerHTML = `${date.getDate()}-0${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
  } else {
    output.innerHTML = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
  }
};
