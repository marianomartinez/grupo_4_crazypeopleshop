window.addEventListener('load', function() {
    // VALIDACIONES DE CAMPOS

    //capturo formulario
    let formulario = document.querySelector('#formulario')
    // alert(formulario.elements.brand.value)
    formulario.addEventListener('submit', function (evento) {

        if (!validaciones(evento)) {

            evento.preventDefault();
        } else {
            evento.preventDefault();
            Swal.fire({
                title: '¿Está seguro que desea actualizar el producto?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, actualizar datos!'
            }).then((result) => {
                if (result.value) {
                    //ir a la ruta
                    Swal.fire(
                        'Actualizado',
                        'El producto ha sido actualizado.',
                        'success'
                    ).then(result => formulario.submit());
                }
            })

        }

        function validaciones(evento) {
            let {
                categoryId,
                subcategoryId,
                brand,
                model,
                description,
                price,
                image
            } = formulario.elements
            let errores = [];

            /*
            //IMAGEN
            let errorImage = document.getElementById('errorImage')
            let acceptFileTypes = /(\.|\/)(gif|jpe?g|png|jpg)$/i
            if (image.value != '') {
                if (!acceptFileTypes.test(image.value)) {
                    errores.push('La imagen debe ser jpg, jpeg, gif o png')
                    image.classList.add('is-invalid')
                    errorImage.classList.add('text-danger')
                    errorImage.innerHTML = 'La imagen debe ser jpg, jpeg, gif o png'


                } else {
                    image.classList.add('is-valid')
                    errorImage.innerHTML = ''
                    image.classList.remove('is-invalid')
                }
            } else {
                image.classList.add('is-valid')
                errorImage.innerHTML = ''
                image.classList.remove('is-invalid')
            }
            */

            // MARCA
            let errorBrand = document.getElementById('errorBrand')
            if (brand.value.length < 2) {
                errores.push('La marca debe tener al menos 2 caracteres')
                brand.classList.add('is-invalid')
                errorBrand.classList.add('text-danger')
                errorBrand.innerHTML = 'La marca debe tener al menos 2 caracteres'
            } else {
                brand.classList.add('is-valid')
                errorBrand.innerHTML = ''
                brand.classList.remove('is-invalid')
            }

            // MODELO
            let errorModel = document.getElementById('errorModel')
            if (model.value.length < 2) {
                errores.push('El modelo debe tener al menos 2 caracteres')
                model.classList.add('is-invalid')
                errorModel.classList.add('text-danger')
                errorModel.innerHTML = 'El modelo debe tener al menos 2 caracteres'
                
            } else {
                model.classList.add('is-valid')
                errorModel.innerHTML = ''
                model.classList.remove('is-invalid')
            }

            
            // DESCRIPCION
            let errorDescription = document.getElementById('errorDescription')
            if (description.value.length < 2) {
                errores.push('La descripción debe tener al menos 20 caracteres')
                description.classList.add('is-invalid')
                errorDescription.classList.add('text-danger')
                errorDescription.innerHTML = 'La descripción debe tener al menos 20 caracteres'

            } else {
                description.classList.add('is-valid')
                errorDescription.innerHTML = ''
                description.classList.remove('is-invalid')
            }

            // PRECIO
            let errorPrice = document.getElementById('errorPrice')
            if (isNaN(price.value)) {
                errores.push('El precio debe ser numérico')
                price.classList.add('is-invalid')
                errorPrice.classList.add('text-danger')
                errorPrice.innerHTML = 'El precio debe ser numérico'
            } else {
                price.classList.add('is-valid')
                errorPrice.innerHTML = ''
                price.classList.remove('is-invalid')
            };

            // DESCUENTO
            // let errorDiscount = document.getElementById('errorDiscount')
            // if (isNaN(discount.value)) {
            //     errores.push('El descuento debe ser numérico')
            //     discount.classList.add('is-invalid')
            //     errorDiscount.classList.add('text-danger')
            //     errorDiscount.innerHTML = 'El descuento debe ser numérico'
            // } else {
            //     discount.classList.add('is-valid')
            //     errorDiscount.innerHTML = ''
            //     discount.classList.remove('is-invalid')
            // };

            //VALIDO SI HUBO ERRORES EN TODO EL PROCESO.

            if (errores.length > 0) {
                evento.preventDefault();
                // alert(errores.length)
                errores = [];
            } else {
                return true
            };
        }
    })
})