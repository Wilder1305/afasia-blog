document.addEventListener("DOMContentLoaded", function () {
    let scrollPosition = 0;

    // Guardar la posición de desplazamiento al abrir el modal y bloquear el desplazamiento
    $('#imageModal').on('show.bs.modal', function () {
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    });

    // Restaurar la posición de desplazamiento al cerrar el modal
    $('#imageModal').on('hidden.bs.modal', function () {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    });
});
