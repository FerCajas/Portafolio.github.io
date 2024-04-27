function openModal(videoSrc) {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.src = videoSrc; 
    modal.style.display = 'block'; 
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');
    video.pause(); 
    modal.style.display = 'none'; 
}


window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
