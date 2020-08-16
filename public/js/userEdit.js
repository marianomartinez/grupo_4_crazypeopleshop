window.addEventListener('load', function () {

    //capturo formulario
    let formulario = document.querySelector('.formulario')
    //alert(formulario.elements.email.value)
    formulario.addEventListener('submit', function (evento) {

        if (!validaciones(evento)) {
            
            evento.preventDefault();
        } else {
            evento.preventDefault();
            Swal.fire({
                title: '¿Está seguro que desea actualizar el usuario?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, actualizar datos!'
            }).then((result) => {
                if (result.value) {
                    //ir a la ruta
                    Swal.fire(
                        'Actualizado',
                        'El usuario ha sido actualizado.',
                        'success'
                    ).then(result => formulario.submit());
                }
            })












            
        }

        function validaciones(evento) {
            let { firstName, lastName, email, password, password2,phone, image } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];

            //NOMBRE
            let errorNombre = document.getElementById('errornombre')
            if (firstName.value == '') {
                errores.push('el nombre no puede quedar vacío')
                firstName.classList.add('is-invalid')
                errorNombre.classList.add('text-danger')
                errorNombre.innerHTML = 'el nombre no puede quedar vacío'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                firstName.classList.add('is-valid')
                errorNombre.innerHTML = ''
                firstName.classList.remove('is-invalid')
            }
            //APELLIDO
            let errorApellido = document.getElementById('errorapellido')
            if (lastName.value == '') {
                errores.push('el apellido no puede quedar vacío')
                lastName.classList.add('is-invalid')
                errorApellido.classList.add('text-danger')
                errorApellido.innerHTML = 'el apellido no puede quedar vacío'


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
                email.classList.add('is-valid')
                errorEmail.innerHTML = ''
                email.classList.remove('is-invalid')
            }

            //TELEFONO
            let errorTelefono = document.getElementById('errortelefono')
            let regTel = /^(?=(\D*\d){11}$)\(?\d{3,5}\)?[- .]?\d{2,4}[- .]?\d{4}$/
            
           
            if (phone.value !='') {
                if (!regTel.test(phone.value)) {    
                         errores.push('el telefono no cumple las reglas')
                         phone.classList.add('is-invalid')
                        errorTelefono.classList.add('text-danger')
                        errorTelefono.innerHTML = 'el telefono debe tener el formato (011)-####-#### o estar vacío'
                        }else{
                        phone.classList.add('is-valid')
                        errorTelefono.innerHTML = ''
                        phone.classList.remove('is-invalid')

                                              }

            } else {
                phone.classList.add('is-valid')
                errorTelefono.innerHTML = ''
                phone.classList.remove('is-invalid')
            }




            //PASSWORD
            let errorPassword = document.getElementById('errorpassword')
            let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/
            
            if (password.value != '') {
                 if (!regPassword.test(password.value)) {
                    errores.push('las password no cumple las reglas')
                    password.classList.add('is-invalid')
                    errorPassword.classList.add('text-danger')
                    errorPassword.innerHTML = 'la contraseña debe tener entre 6 y 15 caracteres,una minúscula,una mayúscula y un número'
                 }else{
                     password.classList.add('is-valid')
                     errorPassword.innerHTML = ''
                     password.classList.remove('is-invalid')
                 }
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
            } else {
               
                return true
            }
                        
            } 


        }

    

    )
})
