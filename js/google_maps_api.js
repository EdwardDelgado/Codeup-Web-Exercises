"use strict";

var mapOptions = {
    // Set the zoom level
    zoom: 19,

    // This sets the center of the map at our location
    center: {
        lat:  30.319323,
        lng: -97.708040
    }
};

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var amaya = { lat: 30.319323, lng: -97.708040 };

var address = "5804 N Interstate 35 Frontage Rd, Austin, TX 78751"

var geocoder = new google.maps.Geocoder();

geocoder.geocode({ "address" : address }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
    } else {
        alert("Geocoding was not successful - STATUS: " + status);
    }
});

var marker = new google.maps.Marker({
    position: amaya,
    map: map
});

var infowindow = new google.maps.InfoWindow({
    content: "Amaya's Taco Village"
});

infowindow.open(map, marker);
