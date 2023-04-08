const menu = document.querySelector('.liste-nav')
const btn = document.querySelector('.btn-toggle')

btn.addEventListener('click', function() {
    menu.classList.toggle('active-menu')
})

const allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active-menu') 
    })
})

const change = document.querySelector(".btn");
let cssEnabled = true; // �tat initial du CSS

change.addEventListener('click', () => {
  if (cssEnabled) { // si le CSS est actuellement activ�
    document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove()); // supprime tous les �l�ments <style> et <link>
    change.textContent = "R�activer le CSS"; // change le texte du bouton
    cssEnabled = false; // met � jour l'�tat du CSS
  } else { // si le CSS est actuellement d�sactiv�
    const head = document.querySelector("head");
    const link = document.createElement("link"); // cr�e un �l�ment <link>
    link.rel = "stylesheet"; // d�finit le type d'�l�ment <link> comme �tant un fichier CSS
    link.href = "style.css"; // d�finit le chemin du fichier CSS
    head.appendChild(link); // ajoute l'�l�ment <link> � la balise <head>
    change.textContent = "D�sactiver le CSS"; // change le texte du bouton
    cssEnabled = true; // met � jour l'�tat du CSS
  }
});