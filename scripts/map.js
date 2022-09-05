let map;
let myLatlng = { lat: 49.52305102282631, lng: 23.97955799979991 }; 


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        mapId: "245805bc9d7b5c69",
        center: myLatlng,
        zoom: 17,
    });
    let marker = new google.maps.Marker({
        position: myLatlng,
        map,
        title: "Bicycle",
        icon: "image/marker_4.png"
    });
    marker.setMap(map);
}

window.initMap = initMap;