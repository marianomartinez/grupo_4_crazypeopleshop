window.addEventListener('load', () => {

    let eliminarSubcat = document.querySelectorAll('.eliminarsubcat')
    eliminarSubcat.forEach(elemento => {
        elemento.addEventListener('click', function (e) {

            e.preventDefault();
            Swal.fire({
                title: '¿Está seguro que desea eliminar la subcategoría?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar subcategoría!'
            }).then((result) => {
                if (result.value) {
                    //ir a la ruta
                    Swal.fire(
                        'Eliminada',
                        'La subcategoría ha sido eliminada.',
                        'success'
                    ).then(result => window.location.href = e.target.parentElement.href);
                }
            })



        })
    })



})
