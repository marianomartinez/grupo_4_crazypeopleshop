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
                discount,
                stock,
                size,
                addStock,
                addSize,
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

            //CATEGORIAS
            let errorCat = document.getElementById('errorcategoria')
            if (categoryId.value > 0) {
                categoryId.classList.add('is-valid')
                errorCat.innerHTML = ''
                categoryId.classList.remove('is-invalid')


                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                errores.push('la categoria no puede quedar vacia')
                categoryId.classList.add('is-invalid')
                errorCat.classList.add('text-danger')
                errorCat.innerHTML = 'la categoria no puede quedar vacia'
            }

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
            if (description.value.length < 20) {
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
          

            if (price.value >= 0) {
              
                price.classList.add('is-valid')
                errorPrice.innerHTML = ''
                price.classList.remove('is-invalid')
            
            } 
           
            
            else {
                errores.push('la precio no puede quedar vacio')
                price.classList.add('is-invalid')
                errorPrice.classList.add('text-danger')
                errorPrice.innerHTML = 'El precio debe ser 0 o mayor a 0'

            }
            // DESCUENTO
            let errorDiscount = document.getElementById('errorDiscount')
            if (discount.value >= 0 && discount.value <= 100) {
                discount.classList.add('is-valid')
                errorDiscount.innerHTML = ''
                discount.classList.remove('is-invalid')

            } else {
                errores.push('el descuento no puede quedar vacio')
                discount.classList.add('is-invalid')
                errorDiscount.classList.add('text-danger')
                errorDiscount.innerHTML = 'El descuento debe ser un numero entre 0 y 100'

            }


        
            // SIZE
            let errorSize = document.getElementById('errorSize')
            let errorStock = document.getElementById('errorStock')

            
            if (stock.value < 0 ) {
                stock.classList.add('is-invalid')
                errorStock.classList.add('text-danger')
                errorStock.innerHTML = 'El stock no puede ser negativo'
                errorSize.innerHTML = ''
                errores.push('El stock no puede ser negativo')

                //alert('entra con stock negativo')
            }
        
            
            if (stock.value === ''  && size.value > 0) {
                size.classList.add('is-valid')
                stock.classList.add('is-invalid')
                errorSize.innerHTML = ''
                errorStock.innerHTML = 'Ell stock no puede quedar vació si carga talle'
                errorStock.classList.add('text-danger')
                errores.push('El stock no puede quedar vació si carga talle')

                //alert('entra con stock vacio y talle postivo')
            }
            
            if (stock.value == '' && size.value == 'elegir talle'){
                // size.classList.add('is-valid')
                // stock.classList.add('is-valid')
                // errorSize.innerHTML = ''
                // errorStock.innerHTML = ''
                // size.classList.remove('is-invalid')
                // stock.classList.remove('is-invalid')
                //alert('entra con stock vacio y talle vacio')
            }
           
            if (stock.value >= '0' && size.value == 'elegir talle') {
                size.classList.add('is-invalid')
                stock.classList.add('is-valid')
                errorSize.innerHTML = 'Debe elegir un talle si hay stock'
                errorStock.innerHTML = ''
                errorSize.classList.add('text-danger')
                errores.push('Se debe elegir un talle')
                stock.classList.remove('is-invalid')
                //alert('entra con stock vacio y talle vacio')
            }


            if (stock.value >= '0' && size.value > 0) {
                size.classList.add('is-valid')
                stock.classList.add('is-valid')
                //errorStock.innerHTML = ''
                errorSize.innerHTML = ''
               size.classList.remove('is-invalid')
                stock.classList.remove('is-invalid')
                //alert('entra con stock positivo y talle postivo')
            }



            // if (stock.value == '') {
            //     size.classList.add('is-valid')
            //     errorSize.innerHTML = ''
            //     size.classList.remove('is-invalid')
            // } else if (stock.value >= 0 && size.value > 0) {
            //     size.classList.add('is-valid')
            //     errorSize.innerHTML = ''
            //     size.classList.remove('is-invalid')
            // } else {
            //     errores.push('El talle no puede quedar vació si carga stock')
            //     size.classList.add('is-invalid')
            //     errorSize.classList.add('text-danger')
            //     errorSize.innerHTML = 'El talle no puede quedar vació si carga stock'
            // }

            // // // STOCK
            
            // if (stock.value == '' && size.value > 0) {
            //     alert(stock.value)
            //     alert(size.value)
            //     errores.push('El talle no puede quedar vació si carga stock')
            //     stock.classList.add('is-invalid')
            //     errorStock.classList.add('text-danger')
            //     errorStock.innerHTML = 'El stock no puede ser nulo sin selecciona un talle'
            // } else {
            //     alert('entra tambien aca 2')
            //     stock.classList.add('is-valid')
            //     errorStock.innerHTML = ''
            //     stock.classList.remove('is-invalid')
            // }

            

            


            //VALIDO SI HUBO ERRORES EN TODO EL PROCESO.
         
            if (errores.length > 0) {
                evento.preventDefault();
                //alert(errores.length)
                errores = [];
            } else {
                return true
            };
        }
    })
})