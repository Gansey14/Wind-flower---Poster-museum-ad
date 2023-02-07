const box = document.querySelector('.rectangle');
let degree = 0;

const owmApi = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=en&units=metric&appid=94df7f9ff51ea5f99470094fe37eeb0e"


fetch(owmApi).then(response => {
    return response.json();
})
    .then(data => {
        console.log(data); // show what's in the json
        result.innerHTML = data.wind.speed
        speed = data.wind.speed;

        setInterval(() => {
            speed = speed / 3;
            setTimeout(() => {
                speed = speed * 3;
            }, 2000);
        }, 5000);

        setInterval(function () {
            degree = (degree + speed * 2.7) % 360;
            box.style.transform = `rotate(${degree}deg)`;
        }, 50);

    })
    .catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });

// this refreshes the page every 10 minutes
setInterval(function () {
    window.location.reload();
}, 10 * 60 * 1000);