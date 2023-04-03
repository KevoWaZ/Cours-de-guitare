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




