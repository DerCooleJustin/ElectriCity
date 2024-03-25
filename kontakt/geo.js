function showUserPos() {
    longitude = 0;
    attitude = 0;
    navigator.geolocation.getCurrentPosition(
        function(pos){
            this.longitude = pos.coords.longitude;
            this.attitude = pos.coords.attitude;
        }
    ), function(err){
        alert(`An error occoured: Could not retrieve location\n(${err.code}) ${err.message}`);
        return;
    }
    
    document.getElementsByTagName("button")[0].remove();

    var map = L.map('map').setView([longitude, attitude], 13);
}