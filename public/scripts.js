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
const card = document.querySelectorAll('.cardr')

for (let i=0; i < card.length; i++) {
    const recipe = card[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/preparation/${i}`
        console.log('apertei')
    })
}