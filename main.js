let lat;
let lon;
let main_url;
let data;

navigator.geolocation.getCurrentPosition(
  async (pos) => {
    letlat = pos.coords.latitude;
    lon = pos.coords.longitude;
    main_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m&timezone=auto`;
    // await getdata();
  },
  (err) => {
    alert("Geolocation is not supported on this browser");
  }
);
// let test
let change = document.querySelector("#temp-data");
let feel = document.querySelector("#feel-temp");
let time = document.querySelector("#time-def");
let time_zone = document.querySelector("#time-zone");
let btn = document.querySelector("#refresh-icon-right");
let long = document.querySelector("#long");
let alt = document.querySelector("#alt");
let air = document.querySelector("#air_p");
let mode_icon = document.querySelector("#mode-icon");
let Parent = document.querySelector(".Parent");

let getdata = async () => {
  let promise = await fetch(main_url);
  let data = await promise.json();
  console.log(data);
  change.innerHTML =
    data.current.temperature_2m + data.current_units.temperature_2m;
  feel.innerHTML =
    data.current.temperature_2m + data.current_units.temperature_2m;
  time.innerHTML =
    data.current.wind_speed_10m + data.current_units.wind_speed_10m;
  time_zone.innerHTML = data.timezone;
  long.innerHTML = "L: " + data.latitude;
  alt.innerHTML = "L: " + data.longitude;
  air.innerHTML = "GOOD";
};

btn.addEventListener("click", () => {
  getdata();
});

mode_icon.addEventListener("click", () => {
  Parent.style.backgroundImage = 'url("./stars.jpg")';
  console.log("dark mode activated!");
});

mode_icon.addEventListener("dblclick", () => {
  Parent.style.backgroundImage = 'url("./anime.jpg")';
});
