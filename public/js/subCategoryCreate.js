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
                title: 'SubCategoría creada',
                showConfirmButton: false,
                timer: 140000
            })
            formulario.submit();

        }

        function validaciones(evento) {
            let { categoria,name, description } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];

            //NOMBRE
            let errorNombre = document.getElementById('errornombre')
            if (name.value == '') {
                errores.push('la subcategoría no puede quedar vacía')
                name.classList.add('is-invalid')
                errorNombre.classList.add('text-danger')
                errorNombre.innerHTML = 'la subcategoría no puede quedar vacía'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                name.classList.add('is-valid')
                errorNombre.innerHTML = ''
                name.classList.remove('is-invalid')
            }
            //APELLIDO
            let errorDescripcion = document.getElementById('errordescripcion')
            if (description.value == '') {
                errores.push('la descripción no puede quedar vacía')
                description.classList.add('is-invalid')
                errorDescripcion.classList.add('text-danger')
                errorDescripcion.innerHTML = 'la descripción no puede quedar vacía'


            } else {
                description.classList.add('is-valid')
                errorDescripcion.innerHTML = ''
                description.classList.remove('is-invalid')
            }


            let errorCategoria = document.getElementById('errorcategoria')
            if (categoria.value > 0) {
                categoria.classList.add('is-valid')
                errorCategoria.innerHTML = ''
                categoria.classList.remove('is-invalid')


                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                errores.push('la categoria no puede quedar vacia')
                categoria.classList.add('is-invalid')
                errorCategoria.classList.add('text-danger')
                errorCategoria.innerHTML = 'la categoria no puede quedar vacia'
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
