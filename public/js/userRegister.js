window.addEventListener('load', function() {

//capturo formulario
let formulario = document.querySelector('.formulario')
//alert(formulario.elements.email.value)
formulario.addEventListener('submit',function(evento){
let j = validaciones(evento)

if(!j){
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
    

    //IMAGEN
    let errorImagen = document.getElementById('errorimagen')
    let acceptFileTypes = /(\.|\/)(gif|jpe?g|png|jpg)$/i
    if (image.value != ''){
    if (!acceptFileTypes.test(image.value)) {
        errores.push('la imagen debe ser jpg, jpeg, gif o png')
        image.classList.add('is-invalid')
        errorImagen.classList.add('text-danger')
        errorImagen.innerHTML = 'la imagen debe ser jpg, jpeg, gif o png'


    } else {
        image.classList.add('is-valid')
        errorImagen.innerHTML = ''
        image.classList.remove('is-invalid')
    }
    }else{
        image.classList.add('is-valid')
        errorImagen.innerHTML = ''
        image.classList.remove('is-invalid')
    }


    //NOMBRE
    let errorNombre = document.getElementById('errornombre')
    if (firstName.value.length < 2 ){
        errores.push('el nombre debe tener al mínimo 2 letras')
        firstName.classList.add('is-invalid')
        errorNombre.classList.add('text-danger')
        errorNombre.innerHTML = 'el nombre debe tener al mínimo 2 letras'

        //errores['firstName'] = 'El nombre no puede estar vacío'
    }else{
        firstName.classList.add('is-valid')
        errorNombre.innerHTML = ''
        firstName.classList.remove('is-invalid')
    }
//APELLIDO
    let errorApellido = document.getElementById('errorapellido')
    if (lastName.value.length < 2 ) {
        errores.push('el apellido debe tener al mínimo 2 letras')
        lastName.classList.add('is-invalid')
        errorApellido.classList.add('text-danger')
        errorApellido.innerHTML = 'el apellido debe tener al mínimo 2 letras'

   
    } else {
        lastName.classList.add('is-valid')
        errorApellido.innerHTML = ''
        lastName.classList.remove('is-invalid')
    }

//MAIL

    
  
    let errorEmail = document.getElementById('erroremail')
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(email.value)) {
        errores.push('el email no cumple las reglas')
        email.classList.add('is-invalid')
        errorEmail.classList.add('text-danger')
        errorEmail.innerHTML = 'el mail tiene un formato incorrecto'


    } else {
        validacionMail(email.value).then(existe => {
            if (existe) {
                errores.push('el email ya existe')
                email.classList.add('is-invalid')
                errorEmail.classList.add('text-danger')
                errorEmail.innerHTML = 'el mail ya existe'

            } else {
                email.classList.add('is-valid')
                errorEmail.innerHTML = ''
                email.classList.remove('is-invalid')

            }
        })
    }

    


    //PASSWORD
    let errorPassword = document.getElementById('errorpassword')
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    if (!regPassword.test(password.value)) {
        errores.push('las password no cumple las reglas')
        password.classList.add('is-invalid')
        errorPassword.classList.add('text-danger')
        errorPassword.innerHTML = 'la contraseña debe tener entre 8 y 20 caracteres,una minúscula,una mayúscula,un número y un caracter especial'
       

    } else {
        password.classList.add('is-valid')
        errorPassword.innerHTML = ''
        password.classList.remove('is-invalid')
    }

    //CONFIRMACION PASSWORD
    let errorPassword2 = document.getElementById('errorpassword2')
  
    if (password2.value != password.value) {
        errores.push('las password no coinciden')
        password2.classList.add('is-invalid')
        errorPassword2.classList.add('text-danger')
        errorPassword2.innerHTML = 'las contraseñas no coinciden'


    } else {
        password2.classList.add('is-valid')
        errorPassword2.innerHTML = ''
        password2.classList.remove('is-invalid')
    }


//VALIDO SI HUBO ERRORES EN TODO EL PROCESO.

        if (errores.length > 0) {
            evento.preventDefault();
            
            errores = [];
} else{
            return true
    }

 
}
async function validacionMail(emailbuscado){
    let request = await fetch('http://localhost:3000/users/registrados')
    let res = await request.json()
        return (Array.from(res).find(usuario => usuario.email == emailbuscado) != null)
    
    
}

}

)
})
