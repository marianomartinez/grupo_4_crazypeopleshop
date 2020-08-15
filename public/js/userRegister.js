window.addEventListener('load', function() {

//capturo formulario
let formulario = document.querySelector('.formulario')
//alert(formulario.elements.email.value)
formulario.addEventListener('submit',function(evento){

if(!validaciones(evento)){
    evento.preventDefault();
}else{
    formulario.submit();
}

function validaciones(evento){
    let{firstName,lastName,email,password,password2,image} = formulario.elements
    //let firstName = formulario.elements.firstName.value
    //let lastName = formulario.elements.lastName.value
    //let email = formulario.elements.email.value
    let errores = [];
    if (firstName.value == ''){
        errores.push('el apellido no puede quedar vacío')
        //errores['firstName'] = 'El nombre no puede estar vacío'
    }


    //envio errores a la vista
    let ulErrores = document.getElementById('errores')
    ulErrores.classList.add('alert-danger')
        if (errores.length > 0) {
            evento.preventDefault();
            for (let i = 0 ; i < errores.length ; i++){
            ulErrores.innerHTML += `<li>${errores[i]}<li>`
    }} else{
            return true
    }

 
}

}

)
})
