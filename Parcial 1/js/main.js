
function obtenerDatos(){
    fetch('./resource/asentamientos.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const id_provincia = document.getElementById('id_provincia');
        const aidi = id_provincia.value;
        const localidades = data.localidades;
        let nombreProvincia = "no identificada";
        let cantidadMunicipios = 0;
        let nombreMunicipio = [];

        localidades.forEach(recorrido => {
            if (recorrido.provincia.id === aidi){
                nombreProvincia = recorrido.provincia.nombre;
                cantidadMunicipios++;
                nombreMunicipio.push(recorrido.municipio.nombre);
            }
        })

    if (nombreProvincia !== "no identificada") {
        document.getElementById('nombre').innerHTML = ('Provincia: ' + nombreProvincia);
        document.getElementById('municipio').innerHTML = ('Cantdad de Municipios: ' + cantidadMunicipios);
        document.getElementById('nombreMunicipio').innerHTML = "Municipios: ";

        nombreMunicipio.forEach(nombre => {
            document.getElementById('municipios').innerHTML = nombreMunicipio;
        })
    } else {
        document.getElementById('nombre').innerHTML = "ID no identificado";
        document.getElementById('municipio').innerHTML = "";
    }

    })
}