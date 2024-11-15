
//*********************************************CREAR MAPA************************************************************** */
let options = {
    enableHighAccuracy: true,
    timeouty: 5000,
    maximunAge: 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        success, 
        error,
         options
    );

    
}else{
    alert("Los servicios de geocalización no estan disponibles")
}



function success(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude, longitude],
        zoom: 14
       
    });    

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mi openStreetMap'}).addTo(map)

//***************************************CREAR ICONOS*************************************************************** */
let inicio = L.icon({
    iconUrl: '../assets/images/imgmapa/leaf-green.png',
    shadowUrl: '../assets/images/imgmapa/leaf-shadow.png',
    iconSize:[38, 95],
    shadowSize:[50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
})

let final = L.icon({
    iconUrl: '../assets/images/imgmapa/leaf-red.png',
    shadowUrl: '../assets/images/imgmapa/leaf-shadow.png',
    iconSize:[38, 95],
    shadowSize:[50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
})


let medio = L.icon({
    iconUrl: '../assets/images/imgmapa/leaf-orange.png',
    shadowUrl: '../assets/images/imgmapa/leaf-shadow.png',
    iconSize:[38, 95],
    shadowSize:[50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
})

//*****************************************CALCULAR RUTA*********************************************************** */
   let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(42.534816, 1.581163)
        ],
        language: 'es',
        createMarker:function(i, wp, nWps){
            switch(i){
                case 0:
                    return L.marker(wp.latLng,{icon:inicio, draggable:true}).bindPopup("inicio");
                case nWps-1:
                    return L.marker(wp.latLng,{icon:final, draggable:true}).bindPopup("final");
                default:
                    return L.marker(wp.latLng,{icon:medio, draggable:true}).bindPopup("intermedio");

            }
        }

   }).addTo(map);     

}

function error(){
    
    let map = L.map('map',{
        center:[42.534816, 1.581163],
        zoom: 14
       
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mi openStreetMap'}).addTo(map)
}



    
