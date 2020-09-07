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
          
            let errores = [];

            

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



            //NOMBRE SUBCATEGORIA
            
            let errorNombre = document.getElementById('errornombre')
            if (name.value.length == 0 || name.value.length > 45) {
                errores.push('la subcategoría no puede quedar vacía ni exceder 45 caracteres')
                name.classList.add('is-invalid')
                errorNombre.classList.add('text-danger')
                errorNombre.innerHTML = 'la subcategoría no puede quedar vacía ni exceder 45 caracteres'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                name.classList.add('is-valid')
                errorNombre.innerHTML = ''
                name.classList.remove('is-invalid')
            }
            //DESCRIPCION
            
            let errorDescripcion = document.getElementById('errordescripcion')
            if (description.value.length == 0 || description.value.length > 500) {
                errores.push('la descripción no puede quedar vacía')
                description.classList.add('is-invalid')
                errorDescripcion.classList.add('text-danger')
                errorDescripcion.innerHTML = 'la descripción no puede quedar vacía ni exceder 500 caracteres'


            } else {
                // alert('ENTRA CON DESCRIPCION BIEN')
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
