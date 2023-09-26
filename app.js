const box = document.querySelector('.rectangle');
const flower = document.querySelector('#flower');
const percentage = document.querySelector('#percentage');
let degree = 0;

const owmApi = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=en&units=metric&appid=94df7f9ff51ea5f99470094fe37eeb0e"


fetch(owmApi).then(response => {
    return response.json();
})
    .then(data => {
        console.log(data); // show what's in the json
        result.innerHTML = data.wind.speed
        speed = data.wind.speed;
        percentageLive = speed * 12;
        percentage.innerHTML = percentageLive.toFixed(2);

        setInterval(() => {
            speed = speed / 1.5;
            setTimeout(() => {
                speed = speed * 1.5;
            }, 2000);
        }, 7000);

        setInterval(function () {
            degree = (degree + speed * 0.5) % 360;
            flower.style.transform = `rotate(${degree}deg)`;
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

// this should make the live video from camera   

window.onload = function () {
    const video = document.getElementById("video");

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error(error);
        });
};

