function checkAirQuality() {
  let aqiValue = Number(document.querySelector("#aqislider").value);
  let aqiNum = document.querySelector(".aqinum");
  let healthValue = document.querySelector(".healthvalue");
  let healthEffect = document.querySelector(".healtheffect");
  let body = document.querySelector(".body");

  aqiNum.innerHTML = aqiValue;

  if (aqiValue <= 50) {
    healthValue.innerHTML = "Good";
    healthEffect.innerHTML = "Little or no risk";
    body.style.backgroundColor = "#007401";
  } else if (aqiValue > 50 && aqiValue < 100) {
    healthValue.innerHTML = "Moderate";
    healthEffect.innerHTML = "Acceptable quality";
    body.style.backgroundColor = "#FCD000";
  } else {
    healthValue.innerHTML = "Unhealthy for sensitive groups";
    healthEffect.innerHTML = "Generable publics not likely affected";
    body.style.backgroundColor = "#fc9800";
  }
}
