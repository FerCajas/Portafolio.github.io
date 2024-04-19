function openModal(videoSrc) {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.src = videoSrc; // Establecer la fuente del video
    modal.style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.pause(); // Pausar el video al cerrar el modal
    modal.style.display = 'none'; // Ocultar el modal
}

// Cerrar el modal si el usuario hace clic fuera del área del modal
window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}