/*
 * L'objectif de l'exercice est de permettre de changer l'image de l'ampoule par une
 * ampoule allumée ou éteinte, au fur et à mesure qu'on clique sur le bouton à côté.
 * Le bouton doit également changer avec l'action qui va se produire si on clique dessus.
 */

// ---- VARIABLES ET CONSTANTES GLOBALES

let lightBulb = document.getElementById("lightBulb"); // L'objet DOM représentant la balise <img>
let toggleButton = document.getElementById("toggle-button"); // L'objet DOM représentant la balise <button>

// ---- FONCTIONS

function switchLight() 
{
    if (lightBulb.src.includes("off"))
    {
        lightBulb.src = "./images/on.png";
        toggleButton.textContent="Eteindre la lumière";
    } 
    else 
    {
        lightBulb.src = "./images/off.png";
        toggleButton.textContent="Allumer la lumière",
    }
}

// AUTRE SOLUTION
// function switchLight() 
// {
//     if (toggleButton.textContent == "Allumer la lumière")
//     {
//         lightBulb.src = "./images/on.png";
//         toggleButton.textContent="Eteindre la lumière"
//     } 
//     else 
//     {
//         lightBulb.src = "./images/off.png";
//         toggleButton.textContent="Allumer la lumière"
//     }
// }

    // ---- CODE PRINCIPAL

    toggleButton.addEventListener("click", switchLight);
