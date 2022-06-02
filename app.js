let date = document.getElementById("input");
let btn = document.getElementById("btn");
let p = document.getElementById("p");

btn.onclick = function() {
  let day = parseInt(date.value.substr(8, 2));
  let month = parseInt(date.value.substr(5, 2));
  let year = date.value.substr(0, 4);

  axios
    .get(
      `https://api.aladhan.com/v1/calendar?latitude=40.4093&longitude=-49.8671&method=${day}&month=${month}&year=${year}`
    )
    .then(function(response) {
      let element = response.data.data[day].timings;
      console.log(element.Asr);
      console.log(element.Dhuhr);
      console.log(element.Fajr);
      console.log(element.Imsak);
      console.log(element.Isha);
      console.log(element.Maghrib);
    })
    .catch(function(error) {
      console.log(error);
    });
};
