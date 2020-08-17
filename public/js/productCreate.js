window.addEventListener('load', function () {
    
    //capturo formulario
    let formulario = document.querySelector('.formulario')
    //alert(formulario.elements.email.value)
    formulario.addEventListener('submit', function (evento) {

        if (!validaciones(evento)) {
            evento.preventDefault();
        } else {
            formulario.submit();
        }

        function validaciones(evento) {
            let { brand, model, price, discount,subcategoryId,description ,image } = formulario.elements
 
            let errores = [];

            //SUBCATEGORIAS
            let errorSubcat = document.getElementById('errorsubcategoria')
            if (subcategoryId.value > 0) {
                subcategoryId.classList.add('is-valid')
                errorSubcat.innerHTML = ''
                subcategoryId.classList.remove('is-invalid')


                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                errores.push('la subcategoria no puede quedar vacia')
                subcategoryId.classList.add('is-invalid')
                errorSubcat.classList.add('text-danger')
                errorSubcat.innerHTML = 'la subcategoria no puede quedar vacia'
            }


            
            //BRAND
            let errorBrand = document.getElementById('errorbrand')
            if (brand.value.length < 2 ) {
                errores.push('la marca no puede tener menos de 2 caracteres')
                brand.classList.add('is-invalid')
                errorBrand.classList.add('text-danger')
                errorBrand.innerHTML = 'la marca no puede tener menos de 2 caracteres'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                brand.classList.add('is-valid')
                errorBrand.innerHTML = ''
                brand.classList.remove('is-invalid')
            }
            
            //MODEL
            let errorModel = document.getElementById('errormodelo')
            if (model.value.length < 2) {
                errores.push('el modelo no puede tener menos de 2 caracteres')
                model.classList.add('is-invalid')
                errorModel.classList.add('text-danger')
                errorModel.innerHTML = 'el modelo no puede tener menos de 2 caracteres'

            } else {
                model.classList.add('is-valid')
                errorModel.innerHTML = ''
                model.classList.remove('is-invalid')
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
