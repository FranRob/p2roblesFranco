function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results)
    })
    

}





document.addEventListener('DOMContentLoaded', function(){

var map = L.map('map').setView([-69.8246, 134.8719], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Estas Aqui')
    .openPopup();
});



//SEDES//
// -33.00789,-58.52247 //


//Consigna.... desde la api de random user. queremos foto gender, nombre, apellido, fecha de nacimiento, localidad, coordenadas (latitud y longitud)
//mostrar en mapa con variables dinamicas//

//comparar datos de rick and morty y random user//

//comparar generos y mostrar si son iguales//




//[0].gender    con esto obtenemos el genero//
//[0].name.first      nombre//
//[0].name.last       apellido //
//[0].dob.date         fecha nacimiento//
//[0].location.city     ciudad//