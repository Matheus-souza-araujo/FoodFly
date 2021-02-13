// ===para fazer a animação do mostrar/esconder===
const content = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.button');
for (let [i,button] of buttons.entries()) {
    button.addEventListener("click", () => {
        if(content[i].classList.contains("show")){
            content[i].classList.remove('show')
            content[i].classList.add('hide')
            button.innerHTML= "Mostrar"
        } else {
            content[i].classList.add('show')
            content[i].classList.remove('hide')
            button.innerHTML= "Esconder"
        }
    })  
}

// ===para redirecionar para a pagina da receita===
// const card = document.querySelectorAll('.cardr')

// for (let i=0; i < card.length; i++) {
//     const recipe = card[i]
//     recipe.addEventListener('click', () => {
//         window.location.href = `/preparation/${i}`
//         console.log('apertei')
//     })
// }

    

// ===Para fazer página atual ficar selectionada ===
const currentPage= location.pathname
const menuItens = document.querySelectorAll("header .links a")

for (item of menuItens) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// ===Para fazer o Modal ===
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')//significa que você vai pegar uma coleção de objetos iguais


for (let card of cards) {
    card.addEventListener("click", function(){
        const imagem = card.querySelectorAll("img")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imagem}`;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

