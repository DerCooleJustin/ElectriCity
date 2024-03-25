function showUserPos() {
    longitude = 0;
    attitude = 0;
    navigator.geolocation.getCurrentPosition(
        function(pos){
            this.longitude = pos.longitude;
            this.attitude = pos.attitude;
        }
    ), function(err){
        alert(`An error occoured: Could not retrieve location\n(${err.code}) ${err.message}`);
        return;
    }
    
    document.getElementsByTagName("button")[0].remove();
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js";
    document.head.appendChild(script);

    const css = document.createElement("link");
    css.href = "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css";
    document.head.appendChild(css);

    window.setTimeout(function(){
        var element = document.getElementById('osm-map');
        element.style = 'height:300px;';
        var map = L.map(element);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        var target = L.latLng(attitude, longitude);
        map.setView(target, 14);
        L.marker(target).addTo(map);
    }, 1);

}