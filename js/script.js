
var elementoBotonregistrarUI = document.querySelector('#Formulario');


let arrayHV = [];

const Guardar =(aNombre, aCorreo, aEdad, aResidencia, aFechaN, aTelefono, aOcupacion, ahobbies, aReferencias) => {
    let item ={
        Nombre: aNombre,
        Correo: aCorreo,
        Edad: aEdad,
        Residencia: aResidencia,
        Fecha_Nacimiento: aFechaN,
        Telefono: aTelefono,
        Ocupacion: aOcupacion,
        Hobbies: ahobbies,
        Referencias: aReferencias
    }
    arrayHV.push(item);
    return item;

}

const guardarLocal = () => {
    localStorage.setItem('HVs', JSON.stringify(arrayHV));
}


elementoBotonregistrarUI.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nombreUI = document.querySelector('#Nombre').value;
    let correoUI = document.querySelector('#correo').value;
    let edadUI = document.querySelector('#edad').value;
    let residenciaUI = document.querySelector('#edad').value;
    let fechaNUI = document.querySelector('#fechaN').value;
    let telefonoUI = document.querySelector('#tel').value;
    let ocupacionUI = document.querySelector('#ocupacion').value;
    let hobbiesUI = document.querySelector('#hobbies').value;
    let referenciassUI = document.querySelector('#referencias').value;

    Guardar(nombreUI, correoUI, edadUI, residenciaUI, fechaNUI, telefonoUI, ocupacionUI, hobbiesUI, referenciassUI);
    guardarLocal();
    elementoBotonregistrarUI.reset();
    
});


