window.addEventListener('load', function () {


    //capturo formulario
    let formulario = document.getElementById('formulario')
    var carrito = document.getElementById('headercart').textContent

    formulario.addEventListener('submit', function (evento) {


        if (!validaciones(evento)) {
            alert('Hay un carrito activo')
            evento.preventDefault();
        } else {
            //evento.preventDefault();
        formulario.submit();

        }

        function validaciones(evento) {
         
            let errores = [];

            //  VALIDO SI HAY UN CARRITO ACTIVO
           
            if (carrito == '(0)') {
                errores.push('Hay un carrito activo')
              
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
