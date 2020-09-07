window.addEventListener('load', function () {


    //capturo formulario
    let formulario = document.getElementById('formulario')
    var carrito = document.getElementById('headercart').textContent

    formulario.addEventListener('submit', function (evento) {
        


        if (!validaciones(evento)) {
            
            evento.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Ya tiene un carrito activo!',
                footer: 'El carrito de compras debe estar vacío'
            })
        } else {
            evento.preventDefault();
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    formulario.submit();
                }
            })


        
        

        }

        function validaciones(evento) {
         
            let errores = [];

            //  VALIDO SI HAY UN CARRITO ACTIVO
               if (carrito.charAt(1) != 0) {
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
