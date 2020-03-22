const locationList = [
    {"location": "osaka", "lat": 34.6918, "long": 135.5051},
    {"location": "kanazawa", "lat": 36.5727, "long": 136.6322},
    {"location": "saitama", "lat": 35.8594, "long": 139.6063},
    {"location": "sapporo", "lat": 43.0802, "long": 141.3367},
    {"location": "sendai", "lat": 38.2589, "long": 140.878},
    {"location": "tokyo", "lat": 35.6951, "long": 139.7539},
    {"location": "nagoya", "lat": 35.1503, "long": 136.9263},
    {"location": "naha", "lat": 26.2116, "long": 127.6934},
    {"location": "hakata", "lat": 33.5889, "long": 130.4205},
];

window.addEventListener("load", () => {
    getWeather(35.6951, 139.7539);
});

function selectLocation(value) {
    locationList.forEach(item => {
        if (item.location === value) {
            getWeather(item.lat, item.long);
        }
    })
}

function getWeather(lat,long) {
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}https://api.darksky.net/forecast/a7499c41a68053c20f071781591743a5/${lat},${long}`;

    fetch(api)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        const {temperature, summary, icon} = data.currently;

        temperatureDegree.textContent = Math.floor((temperature - 32) * (5 / 9));;
        temperatureDescription.textContent = summary;

        setIcons(icon, document.querySelector(".icon"));
    });
}

function setIcons(icon, iconId) {
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);
}

