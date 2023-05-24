const startTime = () => {
  const output = document.querySelector("#txt");
  let heute = new Date();
  let std = heute.getHours();
  let min = heute.getMinutes();
  let sec = heute.getSeconds();
  let date = `${heute.getDate()}.${heute.getMonth()}.${heute.getFullYear()}`;
  output.innerHTML = `${std}:${min}:${sec} <br>${date}`;
};

setInterval(startTime, 1000);
