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
            let { id,category, description } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];

            //CATEGORY
            let errorCategory = document.getElementById('errorcategory')
            if (category.value == '') {
                errores.push('La categoria no puede quedar vacío')
                category.classList.add('is-invalid')
                errorCategory.classList.add('text-danger')
                errorCategory.innerHTML = 'la categoria no puede quedar vacío'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                category.classList.add('is-valid')
                errorCategory.innerHTML = ''
                category.classList.remove('is-invalid')
            }
            //DESCRIPCION
            let errorDescription = document.getElementById('errordescripcion')
            if (description.value == '') {
                errores.push('la descripcion no puede quedar vacío')
                description.classList.add('is-invalid')
                errorDescription.classList.add('text-danger')
                errorDescription.innerHTML = 'la descripcion no puede quedar vacío'


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
