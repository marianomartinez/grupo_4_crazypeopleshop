window.addEventListener('load', function () {

    //capturo formulario
    let formulario = document.getElementById('formulario')
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
            let { id,name, description } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];
            
            //CATEGORY
            let errorCategory = document.getElementById('errorname')
            if (name.value.length == 0 || name.value.length > 45) {
                errores.push('la categoría no puede quedar vacía ni exceder 45 caracteres')
                name.classList.add('is-invalid')
                errorCategory.classList.add('text-danger')
                errorCategory.innerHTML = 'la categoría no puede quedar vacía ni exceder 45 caracteres'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                name.classList.add('is-valid')
                errorCategory.innerHTML = ''
                name.classList.remove('is-invalid')
            }
          
            //DESCRIPCION
            let errorDescription = document.getElementById('errordescripcion')
            if (description.value.length == 0 || description.value.length > 500) {
                errores.push('la descripción no puede quedar vacía ni exceder 500 caracteres')
                description.classList.add('is-invalid')
                errorDescription.classList.add('text-danger')
                errorDescription.innerHTML = 'la descripción no puede quedar vacía ni exceder 500 caracteres'


            } else {
                description.classList.add('is-valid')
                errorDescription.innerHTML = ''
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
