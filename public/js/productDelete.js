window.addEventListener('load', () => {

    let eliminarCheck = document.querySelectorAll('.eliminarcheck')
    eliminarCheck.forEach(elemento=>{elemento.addEventListener('click',function(e){

        e.preventDefault();
        Swal.fire({
            title: '¿Está seguro que desea eliminar el producto?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar producto!'
        }).then((result) => {
            if (result.value) {
                //ir a la ruta
                    Swal.fire(
                    'Eliminado',
                    'El producto ha sido eliminado.',
                    'success'
                ).then(result => window.location.href = e.target.parentElement.href);
            }
        })



    })})
 
   

})
