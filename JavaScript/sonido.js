let boton = document.querySelector(".reproductor")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../Sound/SonidoB.mp3")
      etiquetaAudio.play()
    })



