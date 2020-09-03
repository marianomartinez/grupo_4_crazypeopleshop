window.addEventListener('load', () => {
    let eliminarCheck = document.querySelectorAll('.eliminarcheck')
    eliminarCheck.forEach(elemento=>{elemento.addEventListener('click',function(e){
        e.preventDefault();
        Swal.fire({
            title: '¿Está seguro que desea eliminar la imagen?',
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar imagen!'
        }).then((result) => {
            if (result.value) {
                    Swal.fire(
                    'Eliminado',
                    'La imagen ha sido eliminada.',
                    'success'
                ).then(() => window.location.href = e.target.parentElement.href);
            }
        })
    })})
})
