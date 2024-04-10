function showUserPos(){
    longitude = 0;
    altitude = 0;
    accuracy = 0;

    document.getElementsByTagName("button")[0].remove();

    navigator.geolocation.getCurrentPosition(
        function(pos){
            longitude = pos.coords.longitude;
            latitude = pos.coords.latitude;
            accuracy = pos.coords.accuracy;

            var map = L.map("map").setView([latitude, longitude], 19);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Karte von OpenStreetMap</a>'}).addTo(map);
            L.marker([latitude, longitude]).addTo(map).bindPopup(`Standort auf ${accuracy}m genau.`).openPopup();
            document.getElementById("map").style.display = "flex";
        }
    ), function(err){alert(`An error occoured: Cold not retrieve location:\n${err.code} | ${err.message}`)}
}