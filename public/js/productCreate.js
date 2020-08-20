window.addEventListener('load', function () {
    
    //capturo formulario
    let formulario = document.querySelector('.formulario')
    //alert(formulario.elements.email.value)
    formulario.addEventListener('submit', function (evento) {

        if (!validaciones(evento)){ 
            evento.preventDefault(); 
        } else { 
            formulario.submit();
        }

        function validaciones(evento) {
            let { brand, model, price, discount,subcategoryId,categoryId,description ,image } = formulario.elements
 
            let errores = [];


             //CATEGORIAS
             let errorCat = document.getElementById('errorcat')
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
            //precio
            let errorPrice = document.getElementById('errorprice')
            
            if (price.value > 0) {
                price.classList.add('is-valid')
                errorPrice.innerHTML = ''
                price.classList.remove('is-invalid')

                

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                errores.push('la precio no puede quedar vacio')
                price.classList.add('is-invalid')
                errorPrice.classList.add('text-danger')
                errorPrice.innerHTML = 'El precio debe ser un numero'
              
            }

             //discount
             let errorDiscount = document.getElementById('errordiscount')
             
             if (discount.value > 0) {
                discount.classList.add('is-valid') 
                 errorDiscount.innerHTML = ''
                 discount.classList.remove('is-invalid')
 
                 
 
                 //errores['firstName'] = 'El nombre no puede estar vacío'
             } else {
                 errores.push('El descuento no puede quedar vacio')
                 discount.classList.add('is-invalid')
                 errorDiscount.classList.add('text-danger')
                 errorDiscount.innerHTML = 'El descuento debe ser un numero'
               
             }
             
           
            

            //Descripcion
            let errorDescription = document.getElementById('errordescription')
            if (description.value.length < 20 ) {
                errores.push('la descripcion no puede tener menos de 20 caracteres')
                description.classList.add('is-invalid')
                errorDescription.classList.add('text-danger')
                errorDescription.innerHTML = 'la marca no puede tener menos de 20 caracteres'

                //errores['firstName'] = 'El nombre no puede estar vacío'
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
