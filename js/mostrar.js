var listaHVs = document.querySelector('#Datos');



const mostrarHVs = () => {
    listaHVs.innerHTML = '';
    arrayHV = JSON.parse(localStorage.getItem('HVs'));
    if (arrayHV === null) {
       arrayHV = [] ;
    } else {
        arrayHV.forEach(element => {
            listaHVs.innerHTML += `
            
            <div>
            <h2 class="Titulo">${element.Nombre}</h2>

                <p class="Descripcion">
                    <img class="icono" src="iconos/correo.png">
                    Correo: ${element.Correo}
                    <br>
                    <img class="icono" src="iconos/edad.png">
                    Edad: ${element.Edad}
                    <br>
                    <img class="icono" src="iconos/casa.png">
                    Residencia: ${element.Residencia}
                    <br>
                    <img class="icono" src="iconos/fecha.png">
                    Fecha de Nacimiento: ${element.Fecha_Nacimiento}
                    <br>
                    <img class="icono" src="iconos/tel.png">
                    Telefono: ${element.Telefono}
                    <br>
                    <img class="icono" src="iconos/ocupacion.png">
                    Ocupacion: ${element.Ocupacion}
                    <br>
                    <img class="icono" src="iconos/hobbie.png">
                    Hobbies: ${element.Hobbies}
                    <br>
                    <img class="icono" src="iconos/ref.png">
                    Referencias: ${element.Referencias}<br>
                    <br>
    
                </p>
                </div>`
        });
    }

}

document.addEventListener('DOMContentLoaded', mostrarHVs);
listaHVs.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
}
)