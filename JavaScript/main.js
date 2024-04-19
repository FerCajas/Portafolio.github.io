

// Definir autobiografía por años
var autobiography = [
    { year: 2020, event: "Fundamentos de la web", description: "Tome cursos en linea para aprender HTML,CSS y JS.", image: "../Images/Udemy.jpg" },
    { year: 2020, event: "Desarrollo web", description: "Durante la virtualidad he conocido variedad de tecnologias para el desarrollo web.", image: "../Images/Tecnologiaweb.jpg" },
    { year: 2021, event: "Framework", description: "En clases de App Moviles he aprendido el uso de framework Angular.", image: "../Images/Framework.jpg" },
    { year: 2021, event: "Practicas Preprofesionales", description: "Para ello se ha trabajado en la empresa de san fernando en la modificacion de la web.", image: "../Images/WSF.png" },
    { year: 2023, event: "Proyecto propio", description: "Desarrollo web con angular.", image: "../Images/WH.png" }
];

var currentYearIndex = 0; // Índice del año actual en la autobiografía

// Función para abrir la ventana modal al hacer clic en "Comenzar"
function openModal() {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modal-text");
    var modalImage = document.getElementById("modal-image");

    // Mostrar el primer año de la autobiografía en la modal
    displayYearInfo(currentYearIndex);

    // Abrir la ventana modal
    modal.style.display = "block";
}

// Función para cerrar la ventana modal al hacer clic en la "X"
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar la ventana modal
}

// Función para mostrar la información del año específico en la autobiografía
function displayYearInfo(index) {
    var modalText = document.getElementById("modal-text");
    var modalImage = document.getElementById("modal-image");

    if (index >= 0 && index < autobiography.length) {
        var yearInfo = autobiography[index];
        modalText.innerHTML = `<h3>${yearInfo.year} - ${yearInfo.event}</h3><p>${yearInfo.description}</p>`;
        modalImage.innerHTML = `<img src="${yearInfo.image}" alt="${yearInfo.event}">`;
    }
}

// Función para mostrar la información del año siguiente en la autobiografía
function showNextYear() {
    currentYearIndex++; // Incrementar el índice al siguiente año
    displayYearInfo(currentYearIndex);
}

// Función para mostrar la información del año anterior en la autobiografía
function showPreviousYear() {
    currentYearIndex--; // Decrementar el índice al año anterior
    displayYearInfo(currentYearIndex);
}
