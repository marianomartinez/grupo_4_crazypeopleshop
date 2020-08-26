window.addEventListener('load', () => {

    let eliminarSubcat = document.querySelectorAll('.eliminarcat')
    eliminarSubcat.forEach(elemento => {
        elemento.addEventListener('click', function (e) {

            e.preventDefault();
            Swal.fire({
                title: '¿Está seguro que desea eliminar la categoría?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar categoría!'
            }).then((result) => {
                if (result.value) {
                    //ir a la ruta
                    Swal.fire(
                        'Eliminada',
                        'La categoría ha sido eliminada.',
                        'success'
                    ).then(result => window.location.href = e.target.parentElement.href);
                }
            })



        })
    })



})
