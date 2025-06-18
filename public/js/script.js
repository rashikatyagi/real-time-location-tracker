const socket = io();

// first check whether the browser supports geolocation
if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const {latitude, longitude} = position.coords;
        socket.emit("send-location", {latitude, longitude});
    }, (error) => {
        console.error(error);
    }, {
        enableHighAccuracy: true, 
        timeout: 5000, //after every 5 second data should be taken
        maximumAge: 0 //no saved data (data must be taken at real time)
    })
}

const map = L.map("map").setView([0, 0], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution : "Rashika Tyagi"
}).addTo(map);