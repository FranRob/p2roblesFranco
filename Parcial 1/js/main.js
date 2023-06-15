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
        let encontrado = false;

        document.getElementById('nombreP').innerHTML = '';
        document.getElementById('cantidad').innerHTML = '';
        document.getElementById('noEncontrado').innerHTML = '';
        document.getElementById('localidad').innerHTML = '';

        provincias.forEach(function(element){
            let idDeProvincias = element.provincia.id;
             
            if (idDeProvincias === aide){
                let nombreProv = element.provincia.nombre;
                cantidadDeLocalidades++;
                nombreDeLocalidades.push(element.nombre);
                document.getElementById("nombreP").innerHTML = nombreProv;
                document.getElementById("cantidad").innerHTML = cantidadDeLocalidades;
                encontrado = true;
                
            }
        });
        if (!encontrado) {
            document.getElementById('noEncontrado').innerHTML = 'No encontrado';
          }
        document.getElementById('localidad').innerHTML = nombreDeLocalidades;
        






    })
}
