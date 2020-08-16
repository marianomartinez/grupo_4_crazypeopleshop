window.addEventListener('load', function () {

    //capturo formulario
    let formulario = document.querySelector('.formulario')
    //alert(formulario.elements.email.value)
    formulario.addEventListener('submit', function (evento) {

        if (!validaciones(evento)) {

            evento.preventDefault();
        } else {
            //evento.preventDefault();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Categoría creada',
                showConfirmButton: false,
                timer: 140000
            })
            formulario.submit();

        }

        function validaciones(evento) {
            let { name, description } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];

            //NOMBRE
            let errorNombre = document.getElementById('errornombre')
            if (name.value == '') {
                errores.push('el nombre no puede quedar vacío')
                name.classList.add('is-invalid')
                errorNombre.classList.add('text-danger')
                errorNombre.innerHTML = 'el nombre no puede quedar vacío'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                name.classList.add('is-valid')
                errorNombre.innerHTML = ''
                name.classList.remove('is-invalid')
            }
            //APELLIDO
            let errorDescripcion = document.getElementById('errordescripcion')
            if (description.value == '') {
                errores.push('el apellido no puede quedar vacío')
                description.classList.add('is-invalid')
                errorDescripcion.classList.add('text-danger')
                errorDescripcion.innerHTML = 'el apellido no puede quedar vacío'


            } else {
                description.classList.add('is-valid')
                errorDescripcion.innerHTML = ''
                description.classList.remove('is-invalid')
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
