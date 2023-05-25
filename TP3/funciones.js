function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        let fechaN = (data.results[0].dob.date)
        let genero = (data.results[0].gender)
        let name = (data.results[0].name.first)
        let apellido = (data.results[0].name.last)
        let localidad = (data.results[0].location.city)
        let latitud = (data.results[0].location.coordinates.latitude)
        let longitud = (data.results[0].location.coordinates.longitude)
        let ciudad = (data.results[0].location.city)
        let foto = (data.results[0].picture.large)
     
        document.getElementById("foto").src = foto;
        document.getElementById("foto").style.display = "block";
        document.getElementById("nombre").innerHTML = name;
        document.getElementById("apellido").innerHTML = apellido;
        document.getElementById("ciudad").innerHTML = ciudad;
        document.getElementById("fechaNacimiento").innerHTML = fechaN;
        document.getElementById("genero").innerHTML = genero;
        document.getElementById("latitud").innerHTML = latitud;
        document.getElementById("longitud").innerHTML = longitud;
        document.getElementById("localidad").innerHTML = localidad;
        
    }
)}

function getCharacter() {
    const input = document.querySelector('input[type="text"]');
    const id = Math.floor(Math.random() * 826) + 1;

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        avatar.src = data.image;
        let name = (data.name)
        let status = (data.status)
        let species = (data.species)
        let location = (data.location.name)
        let gender = (data.gender)

        document.getElementById("avatar").style.display = "block";
        document.getElementById('name').innerHTML = name;
        document.getElementById('status').innerHTML = status;
        document.getElementById('species').innerHTML = species;
        document.getElementById('location').innerHTML = location;
        document.getElementById('gender').innerHTML = gender;



      })
      .catch(function(error) {
        console.log(error);
      });
}

function compareGenders() {
    const personGender = document.getElementById("genero").innerHTML.toLowerCase();
    const characterGender = document.getElementById("gender").innerHTML.toLowerCase();
  
    if (personGender === characterGender) {
        const iconTrue = document.getElementById("iconTrue");
        iconTrue.style.display = "block";
        const iconFalse = document.getElementById("iconFalse");
        iconFalse.style.display = "none";

      } else {
        const iconFalse = document.getElementById("iconFalse");
        iconFalse.style.display = "block";
        const iconTrue = document.getElementById("iconTrue");
        iconTrue.style.display = "none";
    }
}