window.addEventListener('load', function () {

    //capturo formulario
    let formulario = document.getElementById('formulario')

    if (formulario.elements.talle.value =='sin stock'){
    let botonagregar = document.getElementById('botagregar')
    botonagregar.classList.add('botcarDisabled')
    botonagregar.classList.remove('botcar')
    formulario.elements.talle.classList.add('is-invalid')    
}
    

    

    
    formulario.addEventListener('submit', function (evento) {
        
        
        if (!validaciones(evento)) {

            evento.preventDefault();
        } else {
            //evento.preventDefault();



           
            formulario.submit();

        }

        function validaciones(evento) {
            let { talle, cantidad } = formulario.elements
            //let firstName = formulario.elements.firstName.value
            //let lastName = formulario.elements.lastName.value
            //let email = formulario.elements.email.value
            let errores = [];
            
            //TALLE
            let errorTalle = document.getElementById('errortalle')
            if (talle.value == '-elegir talle-') {
                errores.push('Debe seleccionar un talle')
                talle.classList.add('is-invalid')
                errorTalle.classList.add('text-danger')
                errorTalle.innerHTML = 'Debe seleccionar un talle'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                talle.classList.add('is-valid')
                errorTalle.innerHTML = ''
                talle.classList.remove('is-invalid')
            }

       

            
            //CANTIDAD
            let errorCant = document.getElementById('errorcantidad')
            if (cantidad.value <= 0) {
                errores.push('La cantidad debe ser mayor a 0')
                cantidad.classList.add('is-invalid')
                errorCant.classList.add('text-danger')
                errorCant.innerHTML = 'La cantidad debe ser mayor a 0'

                //errores['firstName'] = 'El nombre no puede estar vacío'
            } else {
                cantidad.classList.add('is-valid')
                errorCant.innerHTML = ''
                cantidad.classList.remove('is-invalid')
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
