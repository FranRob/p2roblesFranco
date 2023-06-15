function obtenerDatos(){
    const ingreso = document.getElementById('entrada');
    const aide = ingreso.value;

    fetch('./resource/asentamientos.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const provincias = (data.localidades);
        let cantidadDeLocalidades = 0;
        let nombreDeLocalidades = [];

        provincias.forEach(function(element){
            let idDeProvincias = element.provincia.id;
             
            if (idDeProvincias === aide){
                let nombreProv = element.provincia.nombre;
                cantidadDeLocalidades++;
                nombreDeLocalidades.push(element.nombre);
                document.getElementById("nombreP").innerHTML = nombreProv;
                document.getElementById("cantidad").innerHTML = cantidadDeLocalidades;
                
            } else {
                document.getElementById('noEncontrado').innerHTML = 'No encontrado';
            }
        });
        document.getElementById('localidad').innerHTML = nombreDeLocalidades;
        






    })
}
