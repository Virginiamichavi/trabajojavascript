
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos")
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const privacidad = document.getElementById('privacidad');



let valida ={
    nombre: false,
    apellidos: false,
    telefono: false,
    email: false,
    privacidad: false
}

//mensaje de error
function setErrorFor(input, mensaje){
    const control = input.parentElement;
    const small = control.querySelector("small");
    control.className = "control error";
    small.innerText = mensaje;

}
//mensaje de si esta todo bien
function setSuccessFor(input){
    const control = input.parentElement;
    control.className = "control success";
}


//validar nombre
nombre.addEventListener("blur", ()=>{
    let name_re = /^[a-zA-Z ]{1,15}$/;

    if(nombre.value == "" || nombre.value == null){
        valida.nombre = false;
    setErrorFor(nombre, "No se puede dejar el nombre vacio");

    }else{
        if(!name_re.exec(nombre.value)){
            valida.nombre = false;
            setErrorFor(nombre, "El nombre solo puede contener letras y maximo 15 caracteres");
        }else{
            valida.nombre = true;
            setSuccessFor(nombre)
        }
    }
})
//validar apellidos
apellidos.addEventListener("blur", ()=>{
    let apellidos_re = /^[a-zA-Z ]{1,40}$/;

    if(apellidos.value == "" || apellidos.value == null){
        valida.apellidos = false;
    setErrorFor(apellidos, "Los apellidos no pueden estar vacios");

    }else{
        if(!apellidos_re.exec(apellidos.value)){
            valida.apellidos = false;
            setErrorFor(apellidos, "Los apellidos solo pueden contener letras y máximo 40 caracteres");
        }else{
            valida.apellidos = true;
            setSuccessFor(apellidos)
        }
    }
})
//validar telefono
telefono.addEventListener("blur", ()=>{
    let telefono_re = /^\d{9}$/

    if(telefono.value == "" || telefono.value == null){
        valida.telefono = false;
    setErrorFor(telefono, "El numero de telefono no puede estar vacio");

    }else{
        if(!telefono_re.exec(telefono.value)){
            valida.telefono = false;
            setErrorFor(telefono, "El número de telefono solo puede contener máximo 9 digitos");
        }else{
            valida.telefono = true;
            setSuccessFor(telefono);
        }
    }
})
//Validar email
email.addEventListener("blur", ()=>{
    let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value == "" || email.value == null){
        valida.email = false;
    setErrorFor(email, "El email no puede estar vacio");

    }else{
        if(!email_re.exec(email.value)){
            valida.email = false;
            setErrorFor(email, "Ingrese una direccion de correo eletrónico válido");
        }else{
            valida.email = true;
            setSuccessFor(email);
        }
    }
})

//VALIDAR PRIVACIDAD
privacidad.addEventListener("click",(evento)=>{
    if(!privacidad.checked){
     valida.privacidad = false;
     setErrorFor(privacidad, "debes de aceptar los termos de privacidad")
    }else{ 
        valida.privacidad = true;   
     setSuccessFor(privacidad);
    }
    
 })

//ENVIAR Y RESETEAR FORMULARIO
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let errorV = false;
    for(const property in valida){
        if(valida[property] == false){
            errorV = true;
        }
    }

    if(!errorV){
        formulario.reset();
        
    }
    
})

