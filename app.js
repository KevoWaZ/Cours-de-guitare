const menu = document.querySelector('.liste-nav')
const btn = document.querySelector('.btn-toggle')

btn.addEventListener('click', function () {
    menu.classList.toggle('active-menu')
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active-menu')
    })
})

const change = document.querySelector(".btn");
let cssEnabled = true; // état initial du CSS

change.addEventListener('click', () => {
    if (cssEnabled) { // si le CSS est actuellement activé
        document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove()); // supprime tous les éléments <style> et <link>
        change.textContent = "Réactiver le CSS"; // change le texte du bouton
        cssEnabled = false; // met à jour l'état du CSS
    } else { // si le CSS est actuellement désactivé
        const head = document.querySelector("head");
        const link = document.createElement("link"); // crée un élément <link>
        link.rel = "stylesheet"; // définit le type d'élément <link> comme étant un fichier CSS
        link.href = "style.css"; // définit le chemin du fichier CSS
        head.appendChild(link); // ajoute l'élément <link> à la balise <head>
        change.textContent = "Désactiver le CSS"; // change le texte du bouton
        cssEnabled = true; // met à jour l'état du CSS
    }
});
