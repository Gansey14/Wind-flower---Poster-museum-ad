const box = document.querySelector('.rectangle');
let degree = 0;

setInterval(function () {
    degree = (degree + 1) % 360;
    box.style.transform = `rotate(${degree}deg)`;
}, 50);

/* Should be external script ... */
const owmApi = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=en&units=metric&appid=94df7f9ff51ea5f99470094fe37eeb0e"

// fetch sample
fetch(owmApi).then(response => {
    return response.json();
})
    .then(data => {
        // Work with JSON data here
        console.log(data); // show what's in the json
        result.innerHTML = data.name // returns Aarhus
        // here are the icons: https://openweathermap.org/weather-conditions

    })
    .catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });

