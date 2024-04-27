


var autobiography = [
    { year: 2020, event: "Fundamentos de la web", description: "Tome cursos en linea para aprender HTML,CSS y JS.", image: "../Images/Udemy.jpg" },
    { year: 2020, event: "Desarrollo web", description: "Durante la virtualidad he conocido variedad de tecnologias para el desarrollo web.", image: "../Images/Tecnologiaweb.jpg" },
    { year: 2021, event: "Framework", description: "En clases de App Moviles he aprendido el uso de framework Angular.", image: "../Images/Framework.jpg" },
    { year: 2021, event: "Practicas Preprofesionales", description: "Para ello se ha trabajado en la empresa de san fernando en la modificacion de la web.", image: "../Images/WSF.png" },
    { year: 2023, event: "Proyecto propio", description: "Desarrollo web con angular.", image: "../Images/WH.png" }
];

var currentYearIndex = 0; 


function openModal() {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modal-text");
    var modalImage = document.getElementById("modal-image");

    
    displayYearInfo(currentYearIndex);

    
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


function displayYearInfo(index) {
    var modalText = document.getElementById("modal-text");
    var modalImage = document.getElementById("modal-image");

    if (index >= 0 && index < autobiography.length) {
        var yearInfo = autobiography[index];
        modalText.innerHTML = `<h3>${yearInfo.year} - ${yearInfo.event}</h3><p>${yearInfo.description}</p>`;
        modalImage.innerHTML = `<img src="${yearInfo.image}" alt="${yearInfo.event}">`;
    }
}


function showNextYear() {
    currentYearIndex++; 
    displayYearInfo(currentYearIndex);
}


function showPreviousYear() {
    currentYearIndex--; 
    displayYearInfo(currentYearIndex);
}
