window.addEventListener('load', function () {

    //capturo formulario
    let formulario = document.querySelector('.formulario')
    
    let botAgregar = document.querySelector('.botcar')
    let iconCart = document.getElementById('headercart')
    let talle = document.getElementById('talle')
    let producto = document.getElementById('producto')
    let i = 0
    let arrayProductos = []
    
    //alert(formulario.elements.email.value)
    botAgregar.addEventListener('click', function (evento) {
    

        if (!validaciones(evento)) {
            
            evento.preventDefault();
        } else {
       
            formulario.submit();
        }   

        function validaciones(evento) {

            let errores = [];

            //VALIDO TALLE
            let errorTalle = document.getElementById('errortalle')
              if (talle.value > 0) {
               errorTalle.innerHTML = ''
               talle.classList.add('is-valid')
               talle.classList.remove('is-invalid')
            
            }
            else {
                errores.push('debe seleccionar un talle')
                talle.classList.add('is-invalid')
                errorTalle.classList.add('text-danger')
                errorTalle.innerHTML = 'Debe seleccionar un talle'

            }

         

            //VALIDO SI HUBO ERRORES EN TODO EL PROCESO.

            if (errores.length > 0) {
             
                evento.preventDefault();

                errores = [];
            } else {

                return true
            }

        }

       
   
        })

    })